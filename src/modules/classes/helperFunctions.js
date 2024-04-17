import _ from 'lodash'

function containsSameElement(arr1, arr2) {
    for (let subArr1 of arr1) {
        for (let subArr2 of arr2) {
            if (_.isEqual(subArr1, subArr2)) {
                return true
            }
        }
    }
    return false
}

function makeField(startField, size, direction) {
    const arr = []
    for (let i = 0; i < size; i++) {
        if (direction === 'horizontal') {
            arr.push([startField[0], startField[1] + i])
        } else if (direction === 'vertical') {
            arr.push([startField[0] + i, startField[1]])
        }
    }
    return arr
}

export { containsSameElement, makeField }