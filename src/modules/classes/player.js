import { GameBoard } from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new GameBoard()
    }

    getAttack(fieldId) {
        this.gameBoard.fields[fieldId].setAttack()
    }
}

class AIplayer {
    constructor(name) {
        this.name = name
        this.gameBoard = new GameBoard()
    }
    
    getAttack(fieldId) {
        const id = parseInt(fieldId)
        this.gameBoard.fields[id].setAttack()
        const foundShip = this.gameBoard.ships.find((ship) => ship.fieldIds.includes(id))
        if (foundShip) {
            foundShip.hit()
        }
    }
}

export { Player, AIplayer }