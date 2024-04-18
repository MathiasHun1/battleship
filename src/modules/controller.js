import { AIplayer, Player } from "./classes/player";
import { UI } from "./DOM/UI";

export class Controller {
    static player1 = new Player('Player1')
    static player2 = new AIplayer('Computer')
    // static activePlayer = this.player1

    static board1 = document.querySelector('#player1-gameboard')
    static board2 = document.querySelector('#computer-gameboard')

    static initGame() {
        this.player1.gameBoard.setFields()
        this.player2.gameBoard.setFields()

        //generate ships manually 
        this.player1.gameBoard.addShipHorizontal('tiny', 2, 5)
        this.player1.gameBoard.addShipHorizontal('small', 3, 71)
        this.player1.gameBoard.addShipHorizontal('medium', 4, 32)
        this.player1.gameBoard.addShipVertical('big', 5, 48)
    
        this.player2.gameBoard.addShipHorizontal('tiny', 2, 5)
        this.player2.gameBoard.addShipHorizontal('small', 3, 71)
        this.player2.gameBoard.addShipHorizontal('medium', 4, 32)
        this.player2.gameBoard.addShipVertical('big', 5, 48)
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
        if(this.checkWinner(this.player2)) return
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

    static switchAcivePlayer() {
        this.activePlayer === this.player1 ? this.activePlayer = 
        this.player2 : this.activePlayer = this.player1 
    }

}