import { GameBoard, Ship } from "./classes/gameBoard";
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
        // console.log(player1, player2)

        //generate ships manually 
        this.player1.gameBoard.addShipHorizontal('tiny', 2, 5)
        this.player1.gameBoard.addShipHorizontal('small', 3, 71)
        this.player1.gameBoard.addShipHorizontal('medium', 4, 32)
        this.player1.gameBoard.addShipVertical('big', 5, 48)
    
        this.player2.gameBoard.addShipHorizontal('tiny', 2, 5)
        this.player2.gameBoard.addShipHorizontal('small', 3, 71)
        this.player2.gameBoard.addShipHorizontal('medium', 4, 32)
        this.player2.gameBoard.addShipVertical('big', 5, 48)
        console.log(this.player1)
    }


    static renderView() {
        UI.drawFields(this.player1, this.board1)
        UI.drawFields(this.player2, this.board2)
    }

    static playRound(id) {
        this.player2.getAttack(id)
        console.log(this.player1, this.player2)
        this.renderView()
    }

    static switchAcivePlayer() {
        this.activePlayer === this.player1 ? this.activePlayer = 
        this.player2 : this.activePlayer = this.player1 
    }

}