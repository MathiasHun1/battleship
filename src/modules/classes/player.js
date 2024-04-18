import { GameBoard } from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new GameBoard()
    }

    attack() {

    }

    randomAttack() {
        
    }
}

export { Player }