import { Ship, GameBoard } from "../modules/classes";
import {containsSameElement, checkAllEmpty, makeField} from "../modules/helperFunctions";

describe('Ship', () => {
    test('initialize properties correctly', () => {
        const myShip = new Ship(' Migthy Pillow  ', '8')
        expect(myShip.name).toBe('Migthy Pillow')
        expect(typeof myShip.length).toBe('number')
        expect(myShip.timesHit).toBe(0)
    })
    test('methods working correctly', () => {
        const myShip = new Ship(' Migthy Pillow  ', '8')
        myShip.hit()
        myShip.hit()
        expect(myShip.timesHit).toBe(2)
        expect(myShip.isSunk()).toBe(false)
        myShip.hit()
        myShip.hit()
        myShip.hit()
        myShip.hit()
        myShip.hit()
        myShip.hit()
        expect(myShip.isSunk()).toBe(true)
    })
})

describe('GameBoard', () => {
    const myBoard = new GameBoard('myBoard', 50, 50)
    test('init gameboard properly', () => {
        expect(myBoard.width).toBe(50)
        expect(myBoard.height).toBe(50)
    })
    test('setShipHorizontal works', () => {
        myBoard.setShipHorizontal('big', 5, [0, 0])
        expect(myBoard.ships[0].name).toBe('big')
        expect(myBoard.checkEmptyField([0, 0])).toBe(false)
        expect(myBoard.checkEmptyField([0, 5])).toBe(true)

    })
    
})
