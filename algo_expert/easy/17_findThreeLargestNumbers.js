/**
 *
 * Expamle:
 * @param array [11, 2, 5, -1, 24, -222, 244]
 * @returns {number[11, 24, 244]}
 */

function findThreeLargestNumbers(array) {
    // Write your code here.
    let max = -Infinity;
    let mid = -Infinity;
    let min = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            min = mid;
            mid = max;
            max = array[i]
        } else if (array[i] > mid) {
            min = mid;
            mid = array[i];
        } else if (array[i] > min) {
            min = array[i]
        }
    }
    return [min, mid, max]
}


// console.log(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])); // [11, 43, 55]
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])); // [18, 141, 541]

