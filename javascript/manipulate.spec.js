// Write your test here
const { manipulate } = require('./manipulate')

describe('manipulate', () => {
    test('should return ["a"] when text is "a"', () => {
        expect(manipulate('a')).toEqual(["a"])
    })
    test('should return ["ab", "ba"] when text is "ab"', () => {
        expect(manipulate("ab")).toEqual(["ab", "ba"])
    })
    test('should return ["abc","acb","bac","bca","cab","cba"] when text is "abc"', () => {
        expect(manipulate("abc")).toEqual(["abc","acb","bac","bca","cab","cba"])
    })

    test('should return ["aabb", "abab", "abba", "baab", "baba", "bbaa"] when text is "aabb"', () => {
        expect(manipulate("aabb")).toEqual(["aabb", "abab", "abba", "baab", "baba", "bbaa"])
    })
    test('should return [] when text is ""', () => {
        expect(manipulate('')).toEqual([])
    })
})
