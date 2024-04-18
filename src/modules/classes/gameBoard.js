import _ from 'lodash'
import { makeField, containsSameElement} from './helperFunctions'


class Ship {
    constructor (name, length) {
        this.name = name.trim()
        this.length = parseInt(length)
        this.timesHit = 0
        this.fieldIds = []
        this.sunk = false
    }

    hit() {
        this.timesHit++
        this.isSunk()
    }

    isSunk() {
        this.timesHit < this.length ? this.sunk = false : this.sunk = true
        return this.sunk
    }
}

class Field {
    constructor(id, coordinateX, coordinateY) {
        this.id = id
        this.coordinateX = coordinateX
        this.coordinateY = coordinateY
        this.isAttacked = false
    }
    setAttack() {
        this.isAttacked = true
    }
}

class GameBoard {
    constructor() {
        this.ships = []
        this.fields = []
        this.attackedFields = []
    }

    setFields() {
        let id = 0
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.fields.push(new Field(id, j, i))
                id++
            }
        }
    }

    addShipHorizontal(name, length, startPosition) {
        const ship = new Ship(name, length)
        const field = this.fields[startPosition]

        for (let i = 0; i < length; i++) {
            ship.fieldIds.push(startPosition + i)
        }

        if (field.coordinateX + length-1 > 9) {
            return false
        } else if ( this.ships.some((ownShip) => ownShip.fieldIds.some((id) => ship.fieldIds.includes(id)))) {
            return false
        } else {
            this.ships.push(ship)
            return true
        }
    }

    addShipVertical(name, length, startPosition) {
        const ship = new Ship(name, length)
        const field = this.fields[startPosition]

        for (let i = 0; i < length*10; i+=10) {
            ship.fieldIds.push(startPosition + i)
        }

        if (field.coordinateY + length-1 > 9) {
            return false
        } else if ( this.ships.some((ownShip) => ownShip.fieldIds.some((id) => ship.fieldIds.includes(id)))) {
            return false
        } else {
            this.ships.push(ship)
            return true
        }
    }

}


export { Ship, Field,  GameBoard }

