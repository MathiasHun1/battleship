import { GameBoard } from "./gameBoard"

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new GameBoard()
    }

    getAttack() {
        let freeFields = this.gameBoard.fields.filter((field) => !field.isAttacked)
        let randomIndex = Math.floor(Math.random() * freeFields.length)
        let selectedField = freeFields[randomIndex].id
        this.gameBoard.fields[selectedField].setAttack()
        const foundShip = this.gameBoard.ships.find((ship) => ship.fieldIds.includes(selectedField))
        if (foundShip) {
            foundShip.hit()
        }
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