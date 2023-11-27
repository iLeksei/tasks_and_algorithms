/**
 *
 * Expamle:
 * @param array [11, 2, 5, -1, 24, -222, 244]
 * @returns {number[11, 24, 244]}
 *
 * time: N
 * space: O(1)
 */
function findThreeLargestNumbers(array) {
    let min = -Infinity;
    let mid = -Infinity;
    let max = -Infinity;

    for (const num of array) {
        if (num > max) {
            min = mid;
            mid = max;
            max = num;
        } else if (num > mid) {
            min = mid;
            mid = num;
        } else if (num > min) {
            min = num;
        }
    }

    return [max, mid, min];
}


// console.log(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])); // [11, 43, 55]
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])); // [18, 141, 541]

