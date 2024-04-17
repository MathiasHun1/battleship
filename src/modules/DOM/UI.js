import { Controller } from "../controller"

const playerBoard = document.querySelector('#player-gameboard')
const computerBoard = document.querySelector('#computer-gameboard')

class BoardView {
    
    static playerBoard = document.querySelector('#player-gameboard')
    static computerBoard = document.querySelector('#computer-gameboard')

    static init() {
        
    }

    static render() {
        Controller.player1.
    }
}


function createField (id) {
    const field = document.createElement('.field')
    field.setAttribute('id', id)
    return field
}