import { Ship } from "../modules/classes";

describe('Ship', () => {
    const myShip = new Ship(' Migthy Pillow  ', '8')
    test('initialize properties correctly', () => {
        expect(myShip.name).toBe('Migthy Pillow')
        expect(typeof myShip.length).toBe('number')
        expect(myShip.timesHit).toBe(0)
    })
})