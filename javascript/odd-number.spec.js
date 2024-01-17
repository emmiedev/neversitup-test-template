// Write your test here
const { findOddNumber } = require('./odd-number')

describe('findOddNumber', () => {
    test('should return 1 when numbers is [7]', () => {
        expect(findOddNumber([7])).toEqual(7)
    })
    test('should return 0 when numbers is [0]', () => {
        expect(findOddNumber([0])).toEqual(0)
    })
    test('should return 2 when numbers is [1,1,2]', () => {
        expect(findOddNumber([1,1,2])).toEqual(2)
    })
    test('should return 0 when numbers is [0,1,0,1,0]', () => {
        expect(findOddNumber([0,1,0,1,0])).toEqual(0)
    })
    test('should return 4 when numbers is [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
        expect(findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4)
    })
})