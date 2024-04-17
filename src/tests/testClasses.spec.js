import { Ship, GameBoard } from "../modules/classes/gameBoard";

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
    const myBoard = new GameBoard()
    myBoard.setFields()
    test('fill in with 100 fields', () => {
        expect(myBoard.fields.length).toBe(100)
    })
    test('fields have proper id and coordinates', () => {
        expect(myBoard.fields[0].id).toBe(0)
        expect(myBoard.fields[99].id).toBe(99)
        expect(myBoard.fields[0].coordinateX).toBe(0)
        expect(myBoard.fields[0].coordinateY).toBe(0)
        expect(myBoard.fields[24].coordinateX).toBe(2)
        expect(myBoard.fields[24].coordinateY).toBe(4)
    })

})

