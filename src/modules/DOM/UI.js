import { has } from "lodash"
import { Player, AIplayer } from "../classes/player"
import { Controller } from "../controller"


class UI {

    static drawAIFields(player, board) {
        board.innerHTML = ''
        player.gameBoard.fields.forEach((field) => {
            board.appendChild(this.createAIfieldView(player, field.id))
        })
    }

    static drawPlayerFields(player, board) {
        board.innerHTML = ''
        player.gameBoard.fields.forEach((field) => {
            board.appendChild(this.createPlayerFieldView(player, field.id))
        })
    }

    static createPlayerFieldView (player, id) {
        const field = document.createElement('div')
        const hasShip = player.gameBoard.ships.find((ship) => ship.fieldIds.includes(id))
        const isAttacked = player.gameBoard.fields[id].isAttacked

        field.classList.add('field')
        field.setAttribute('id', id)

        if (isAttacked && hasShip) {
            field.classList.add('hit')
        } else if (!isAttacked && hasShip) {
            field.classList.add('has-ship')
        } else if (isAttacked) {
            field.classList.add('missed')
        }

        return field
    }

    static createAIfieldView (player, id) {
        const field = document.createElement('div')
        field.classList.add('field')
        field.setAttribute('id', id)

        if (player.gameBoard.fields[id].isAttacked) {
            field.classList.add('missed')
        }

        if (player.gameBoard.fields[id].isAttacked && 
        player.gameBoard.ships.find((ship) => ship.fieldIds.includes(id))) {
            field.classList.remove('missed')
            field.classList.add('hit')
        }
    

        if (player.gameBoard.fields[id].isAttacked === false && player instanceof AIplayer) {
            field.addEventListener('click', recieveAttack)
        }

        return field
    }

    static endGame(player) {
        alert(`${player.name} wins`)
    }
}

function recieveAttack(event) {
    const fieldId = event.target.id
    Controller.playRound(fieldId)
}





export {UI}