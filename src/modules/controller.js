import { GameBoard, Ship } from "./classes/gameBoard";
import { Player } from "./classes/player";

export class Controller {
    static player1 = new Player('Player1')
    static player2 = new Player('Computer')

    static initShips() {
        //generate ships manually 
        this.player1.gameBoard.setShipHorizontal('tiny', 2, [0, 5])
        this.player1.gameBoard.setShipHorizontal('small', 3, [4, 6])
        this.player1.gameBoard.setShipVertical('medium', 4, [1, 2])
        this.player1.gameBoard.setShipVertical('big', 5, [5, 2])

        this.player2.gameBoard.setShipHorizontal('tiny', 2, [0, 5])
        this.player2.gameBoard.setShipHorizontal('small', 3, [4, 6])
        this.player2.gameBoard.setShipVertical('medium', 4, [1, 2])
        this.player2.gameBoard.setShipVertical('big', 5, [5, 2])
        console.log(this.player1)
    }
}