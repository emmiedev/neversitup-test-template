/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text) => {
    // TODO : start your code here

    let result = 0
    let eyes = [':', ';']
    let nose = ['-', '~']
    let mouth = [')', 'D']

    for (let i = 0; i < text.length; i++) {
        let face = text[i].split('').filter((char) => char !== ' ')
        if (face.length === 2) {
            if (eyes.includes(face[0]) && mouth.includes(face[1])) {
                result++
            }
        } else if (face.length === 3) {
            if (eyes.includes(face[0]) && nose.includes(face[1]) && mouth.includes(face[2])) {
                result++
            }
        }
    }

    return result
}

module.exports = {
    countSmilyFace
}