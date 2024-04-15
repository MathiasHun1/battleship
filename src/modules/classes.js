import _ from 'lodash'

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
        this.ship1 = ''
        this.ship2 = ''
        this.ship3 = ''
        this.ship4 = ''
        this.ship5 = ''
        this.takenFields = []
    }
    
    //create new ships with positions on board
    setShip1(name, size, direction,  startField) {
        this.ship1 = [...this.setShip(name, size, direction,  startField)]
    }
    
    setShip2(name, size, direction,  startField) {
        this.ship2 = [...this.setShip(name, size, direction,  startField)]
    }

    setShip3(direction, startField, size) {
        this.ship3 = [...this.setShip(name, size, direction,  startField)]
    }

    setShip4(name, size, direction,  startField) {
        this.ship4 = [...this.setShip(name, size, direction,  startField)]
    }

    setShip5(name, size, direction,  startField) {
        this.ship5 = [...this.setShip(name, size, direction,  startField)]
    }

    //additional methods
    setShip(name, size, direction,  startField) {
        const arr = [[new Ship(name, size)], []]   

        //check if ship positioned inside the table dimensions
        if (startField[0] + size > this.height || startField[1] + size > this.width) {
            throw Error('board limits reached')
        }

        //create ship's fields on the board if available
        if (direction === 'horizontal') {
            for(let i = 0; i < size; i++) {
                let field = [startField[0], startField[1] + i]
                if (this.checkEmptyField(field)) {
                    this.takenFields.push(field)
                    arr[1].push(field)
                } else throw Error('spot has been taken')
            }
        } else if (direction === 'vertical') {
            for(let i = 0; i < size; i++) {
                let field = [startField[0] + i, startField[1]]
                if (this.checkEmptyField(field)) {
                    this.takenFields.push(field)
                    arr[1].push(field)
                } else throw Error('spot has been taken')
            }
        }
    }

    checkEmptyField(field) {
        return !this.takenFields.some((element) => _.isEqual(element, field))
    }

    recieveAttack() {

    }
}


export { Ship, GameBoard }