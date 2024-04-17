import { GameBoard } from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new GameBoard('gameBoard', 10, 10)
    }

    attack() {

    }

    randomAttack() {
        
    }
}

export {Player}