// ship class

class Ship {
    constructor (name, length) {
        this.name = name
        this.length = length
        this.timesHit = 0
    }

    hit() {
        this.timesHit++
    }

    isSunk() {
        return (this.timesHit >= this.length)? true : false
    }
}



// ship factory
const shipFactory = (name, length) => {
    const timesHit = 0
    const isSunk = () => {
        return timesHit >= length
    }

    return { name, length, timesHit, isSunk}
}

