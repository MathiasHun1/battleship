import { AIplayer } from "../classes/player"
import { Controller } from "../controller"


class UI {

    static drawFields(player, board) {
        board.innerHTML = ''
        player.gameBoard.fields.forEach((field) => {
            board.appendChild(this.createFieldView(player, field.id))
        })
    }

    static createFieldView (player, id) {
        const field = document.createElement('div')
        field.classList.add('field')
        field.setAttribute('id', id)
    
        if (player.gameBoard.ships.find((ship) => ship.fieldIds.includes(id))) {
            field.classList.add('has-ship')
        }

        if (player.gameBoard.fields[id].isAttacked === false && player instanceof AIplayer) {
            field.addEventListener('click', recieveAttack)
        }

        return field
    }

    static eventListeners() {

    }
}

function recieveAttack(event) {
    console.log(event.target.id)
    const fieldId = event.target.id
    Controller.playRound(fieldId)
}





export {UI}