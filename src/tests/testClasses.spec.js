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
    const myBoard = new GameBoard('myBoard', 50, 50)
    test('init gameboard properly', () => {
        expect(myBoard.width).toBe(50)
        expect(myBoard.height).toBe(50)
    })
    test('places ship horizontally', () => {
        myBoard.setShip1('tiny', 2, 'horizontal', [0, 0])
        expect(myBoard.ship1[1]).toStrictEqual([[0, 0], [0, 1]])
    })
    test('places ship vertically', () => {
        myBoard.setShip2('bigger', 3, 'vertical', [13, 22])
        expect(myBoard.ship2[1]).toStrictEqual([[13, 22], [14, 22], [15, 22]])
    })
    test('throw error if place ship outside the board', () => {
        expect(() => { myBoard.setShip('golem', 5, 'vertical', [46, 13]) }).toThrow('board limits reached')
        expect(() => { myBoard.setShip('very big', 4, 'horizontal', [11, 48]) }).toThrow('board limits reached')
    })
    test('checks if a field is available', () => {
        expect(myBoard.checkEmptyField([0, 5])).toBe(true)
        myBoard.takenFields.push([12, 12])
        expect(myBoard.checkEmptyField([12, 12])).toBe(false)
    })
    test('not places new ship if the spot has been taken', () => {
        myBoard.setShip1('bla', 6, 'horizontal', [0, 15])
        expect(() => { myBoard.setShip('golem', 5, 'horizontal', [0, 13]) }).toThrow('spot has been taken')
        expect(myBoard.checkEmptyField([0, 14])).toBe('true')
    })
})