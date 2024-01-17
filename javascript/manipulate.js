/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */

const manipulate = (text) => {
    // TODO : start your code here
    if (text.length === 0) {
        return []
    } else {
        let result = []
        let arr = text.split('').sort()
        let temp = []

        const swap = (arr, a, b) => {
            let temp = arr[a]
            arr[a] = arr[b]
            arr[b] = temp
        }

        const permute = (arr, start, end) => {
            if (start === end) {
                temp.push(arr.join(''))
            } else {
                for (let i = start; i <= end; i++) {
                    swap(arr, start, i)
                    permute(arr, start + 1, end)
                    swap(arr, start, i)
                }
            }
        }

        permute(arr, 0, arr.length - 1);

        for (let i = 0; i < temp.length; i++) {
            if (!result.includes(temp[i])) {
                result.push(temp[i])
            }
        }
        
        return result.sort()
    }
}

module.exports = {
    manipulate
}