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

class AIplayer extends Player {

    getAttack(fieldId) {
        this.gameBoard.fields[fieldId].setAttack()
    }
}

export { Player, AIplayer }