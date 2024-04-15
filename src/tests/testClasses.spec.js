import { Ship, GameBoard } from "../modules/classes";

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
    test('init gameboard properly', () => {
        const myBoard = new GameBoard('myBoard', 50, 50)
        expect(myBoard.width).toBe(50)
        expect(myBoard.height).toBe(50)
    })
    test('places ship horizontally', () => {
        const myBoard = new GameBoard('myBoard', 50, 50)
        const myShip = new Ship('Sanyi hajó', 6)
        myBoard.setShip1('horizontal', [0, 0], myShip.length)
        expect(myBoard.ship1).toStrictEqual([[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]])
    })
    test('places ship vertically', () => {
        const myBoard = new GameBoard('myBoard', 50, 50)
        const myShip = new Ship('Sanyi hajó', 5)
        myBoard.setShip1('vertical', [13, 22], myShip.length)
        expect(myBoard.ship1).toStrictEqual([[13, 22], [14, 22], [15, 22], [16, 22], [17, 22]])
    })
})