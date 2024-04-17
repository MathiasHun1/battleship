import _ from 'lodash'
import { makeField, containsSameElement} from './helperFunctions'


class Ship {
    constructor (name, length) {
        this.name = name.trim()
        this.length = parseInt(length)
        this.timesHit = 0
        this.fieldId = null
    }

    hit() {
        this.timesHit++
    }

    isSunk() {
        return (this.timesHit >= this.length)? true : false
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
        this.missedAttacks = []
        this.scoredAttacks = []
    }

    setFields() {
        let id = 0
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.fields.push(new Field(id, i, j))
                id++
            }
        }
    }
   
}


export { Ship, Field,  GameBoard }

