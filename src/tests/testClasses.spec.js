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
    test('place ship horizontally', () => {
        myBoard.setShipHorizontal('big', 5, [0, 0])
        expect(myBoard.ships[0].name).toBe('big')
        expect(myBoard.checkEmptyField([0, 0])).toBe(false)
        expect(myBoard.checkEmptyField([0, 5])).toBe(true)
    })
    test('place ship vertically', () => {
        myBoard.setShipVertical('medium', 3, [12, 25])
        expect(myBoard.ships[1].name).toBe('medium')
        expect(myBoard.ships[1].ownFields).toEqual([[12, 25], [13, 25], [14, 25]])
    })
    test('not places ship if place is taken', () => {
        expect(myBoard.setShipHorizontal('big', 5, [0, 4])).toBe(false)
        expect(myBoard.checkEmptyField([0, 5])).toBe(true)
        expect(myBoard.setShipVertical('big', 5, [13, 25])).toBe(false)
        expect(myBoard.checkEmptyField([15, 25])).toBe(true
        )
    })
    test('not places ship if board limits are reached', () => {
        expect(myBoard.setShipHorizontal('big', 5, [0, 46])).toBe(false)
        expect(myBoard.setShipVertical('big', 5, [48, 25])).toBe(false)
        expect(myBoard.ships.length).toBe(2)
    })
    test('recieves attack properly', () => {
        expect(myBoard.recieveAttack([0, 1])).toBe(true)
        expect(myBoard.ships[0].timesHit).toBe(1)
        expect(myBoard.recieveAttack([0, 1])).toBe(false)
        expect(myBoard.recieveAttack([0, 5])).toBe(true)
        expect(myBoard.recieveAttack([0, 5])).toBe(false)
    })
    test('report if all ships sunk', () => {
        myBoard.recieveAttack([0, 0])
        myBoard.recieveAttack([0, 2])
        myBoard.recieveAttack([0, 3])
        myBoard.recieveAttack([0, 4])
        expect(myBoard.ships[0].isSunk()).toBe(true)
        myBoard.recieveAttack([12, 25])
        myBoard.recieveAttack([13, 25])
        myBoard.recieveAttack([14, 25])
        expect(myBoard.isAllSunk()).toBe(true)
    })
})
