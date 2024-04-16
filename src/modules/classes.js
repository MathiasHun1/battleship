import _ from 'lodash'
import { makeField, containsSameElement} from './helperFunctions'

// ship class

class Ship {
    constructor (name, length) {
        this.name = name.trim()
        this.length = parseInt(length)
        this.timesHit = 0
    }

    hit() {
        this.timesHit++
    }

    isSunk() {
        return (this.timesHit >= this.length)? true : false
    }
}

// gameboard class

class GameBoard {
    constructor(name, height, width) {
        this.name = name
        this.height = height
        this.width = width
        this.ships = []
        this.missedAttacks = []
        this.scoredAttacks = []
    }
    
    //additional methods
    setShipHorizontal(name, size, startField) {
        //check if ship positioned inside the table dimensions
        if (startField[1] + size > this.width) {
            return false
        }
        //check if the picked position is available, connect it to the ship
        if (this.checkAllEmpty(startField, size, 'horizontal')) {
            const ship = new Ship(name, size)
            ship.ownFields = makeField(startField, size, 'horizontal')
            this.ships.push(ship)
        } else {
            return false
        }

    }

    setShipVertical(name, size, startField) {
        if (startField[0] + size > this.height) {
            return false
        }
        if (this.checkAllEmpty(startField, size, 'vertical')) {
            const ship = new Ship(name, size)
            ship.ownFields = makeField(startField, size, 'vertical')
            this.ships.push(ship)
        } else {
            return false
        }
    }

    checkAllEmpty(field, size, direction) {
        let arr1 = []
        let arr2 = []
        if (this.ships) {
            this.ships.forEach((ship) => ship.ownFields.forEach((spot) => arr1.push(spot)))
        }
        for (let i = 0; i < size; i++) {
            if (direction === 'horizontal') {
                arr2.push([field[0], field[1] + i])
            } else if (direction === 'vertical') {
                arr2.push([field[0] + i, field[1]])
            }
        }
        return !containsSameElement(arr1, arr2)
    }

    checkEmptyField(field) {
        return !this.ships.some((ship) => ship.ownFields.some((spot) => _.isEqual(spot, field)))
    }

    recieveAttack(field) {
        if (this.scoredAttacks.some((spot) => _.isEqual(spot, field)) || 
        this.missedAttacks.some((spot) => _.isEqual(spot, field))) {
            return false
        }
        let hittedShip = this.ships.find((ship) => ship.ownFields.some((spot) => _.isEqual(spot, field)))
        if (hittedShip) {
            hittedShip.hit(field)
            this.scoredAttacks.push(field)
            return true
        } else {
            this.missedAttacks.push(field)
            return true
        }
    }
}


export { Ship, GameBoard }


// (this.scoredAttacks.some((spot) => _.isEqual(spot, field)) 