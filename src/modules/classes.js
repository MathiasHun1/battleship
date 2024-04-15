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
    }
    
    //init the ships position
    setShip1(direction, startField, size) {
        this.ship1 = [...this.setShip(direction, startField, size)]
    }
    
    setShip2(direction, startField, size) {
        this.ship2 = [...this.setShip(direction, startField, size)]
    }

    //additional methods
    setShip(direction, startField, size) {
        const arr = []
        if (direction === 'horizontal') {
            for(let i = 0; i < size; i++) {
                arr.push([startField[0], startField[1] + i])
            }
        } else if (direction === 'vertical') {
            for(let i = 0; i < size; i++) {
                arr.push([startField[0] + i, startField[1]])
            }
        }
        return arr
    }
}


export { Ship, GameBoard }