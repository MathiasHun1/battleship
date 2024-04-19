import { AIplayer, Player } from "./classes/player";
import { UI } from "./DOM/UI";

export class Controller {
    static player1 = new Player('Player1')
    static player2 = new AIplayer('Computer')
    // static activePlayer = this.player1

    static board1 = document.querySelector('#player1-gameboard')
    static board2 = document.querySelector('#computer-gameboard')

    static initStartView() {
        UI.drawStartView([this.board1, this.board2])
    }

    static initGame() {
        this.player1.gameBoard.setFields()
        this.player2.gameBoard.setFields()

        //generate ships manually 
        this.player1.gameBoard.addShipRandomly('tiny', 2)
        this.player1.gameBoard.addShipRandomly('small', 3)
        this.player1.gameBoard.addShipRandomly('medium', 4)
        this.player1.gameBoard.addShipRandomly('big', 5)
    
        this.player2.gameBoard.addShipRandomly('tiny', 2)
        this.player2.gameBoard.addShipRandomly('small', 3)
        this.player2.gameBoard.addShipRandomly('medium', 4)
        this.player2.gameBoard.addShipRandomly('big', 5)

        this.renderView()
    }


    static renderView() {
        UI.drawPlayerFields(this.player1, this.board1)
        UI.drawAIFields(this.player2, this.board2)
    }

    static checkWinner(player) {
        if (player.gameBoard.ships.every((ship) => ship.isSunk())) {
            return true
        }
    }

    static playRound(id) {
        if(this.checkWinner(this.player1)) return
        if(this.checkWinner(this.player2)) return

        this.player2.getAttack(id)
        this.renderView()
        if (this.checkWinner(this.player2)) {
            UI.endGame(this.player1)
            return
        }

        this.player1.getAttack()
        this.renderView()
        if (this.checkWinner(this.player1)) {
            UI.endGame(this.player2)
            return
        }
    }

}