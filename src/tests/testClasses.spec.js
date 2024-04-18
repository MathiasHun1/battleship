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
        expect(myBoard.fields[24].coordinateY).toBe(2)
        expect(myBoard.fields[24].coordinateX).toBe(4)
    })
    test('sets ship horizontal properly', () => {
        myBoard.addShipHorizontal('big', 5, 0)
        expect( typeof myBoard.ships[0]).toBe('object')
    })
    test('not place ship outside the board', () => {
        expect(myBoard.addShipHorizontal('big', 6, 15)).toBe(false)
        expect(myBoard.ships[1]).toBe(undefined)
    })
    test('place ship to correct position', () => {
        myBoard.addShipHorizontal('medium', 4, 15)
        expect(myBoard.ships[1].fieldIds).toEqual([15, 16, 17, 18,])
    })
    test('sets ship vertical properly', () => {
        myBoard.addShipVertical('medium', 4, 63)
        expect( typeof myBoard.ships[2]).toBe('object')
    })
    test('not place ship outside the board', () => {
        expect(myBoard.addShipVertical('big', 6, 15)).toBe(false)
        expect(myBoard.ships[3]).toBe(undefined)
    })
    test('place ship to correct position', () => {
        expect(myBoard.ships[2].fieldIds).toEqual([63, 73, 83, 93])
    })
    test("don't let ships to overlap", ()=> {
        expect(myBoard.addShipVertical('medium', 4, 8)).toBe(false)
    })
})

