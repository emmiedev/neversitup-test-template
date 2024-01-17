/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (text) => {
    // TODO : start your code here
    let result = 0
    for (let i = 0; i < text.length; i++) {
        result = result ^ text[i]
    }
    return result
}


module.exports = {
    findOddNumber
}