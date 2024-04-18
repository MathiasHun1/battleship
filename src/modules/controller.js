import { GameBoard, Ship } from "./classes/gameBoard";
import { Player } from "./classes/player";

export class Controller {

    static initGame() {
        const player1 = new Player('Player1')
        const player2 = new Player('Computer')
        
        player1.gameBoard.setFields()
        player2.gameBoard.setFields()
        console.log(player1, player2)

        //generate ships manually 
        player1.gameBoard.addShipHorizontal('tiny', 2, 5)
        player1.gameBoard.addShipHorizontal('small', 3, 46)
        player1.gameBoard.addShipHorizontal('medium', 4, 12)
        player1.gameBoard.addShipHorizontal('big', 5, 52)
    
        player2.gameBoard.addShipHorizontal('tiny', 2, 5)
        player2.gameBoard.addShipHorizontal('small', 3, 46)
        player2.gameBoard.addShipHorizontal('medium', 4, 12)
        player2.gameBoard.addShipHorizontal('big', 5, 52)
    }

}