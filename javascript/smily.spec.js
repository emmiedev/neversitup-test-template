// Write your test here
const { countSmilyFace } = require('./smily')

describe('countSmilyFace', () => {
    test('should return 2 when texts is [":)", ";(", ";}"," :-D"]', () => {
        expect(countSmilyFace([":)", ";(", ";}"," :-D"])).toEqual(2)
    })
    test('should return 3 when texts is [";D", ":-(", ":-)", ";~)"]', () => {
        expect(countSmilyFace([";D", ":-(", ":-)", ";~)"])).toEqual(3)
    })
    test('should return 1 when texts is [";]", ":[", ";*", ":$", ";-D"]', () => {
        expect(countSmilyFace([";]", ":[", ";*", ":$", ";-D"])).toEqual(1)
    })
})