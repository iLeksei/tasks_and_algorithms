

// Write a function that takes in an array of integers and returns an array of
// length 2 representing the largest range of integers contained in that array.
//
// The first number in the output array should be the first number in the range,
// while the second number should be the last number in the range.
//
// A range of numbers is defined as a set of numbers that come right after each
// other in the set of real integers. For instance, the output array
// [2, 6] represents the range {2, 3, 4, 5, 6}, which
// is a range of length 5. Note that numbers don't need to be sorted or adjacent
// in the input array in order to form a range.
//
// You can assume that there will only be one largest range.
// Sample Input
//     array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
//
// Sample Output
//     [0, 7]


// todo
function largestRange(array) {
    // Write your code here.
    if (array.length === 1) return [array[0], array[0]]
    let map = new Set();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i] + 1)) {
            if (result[result.length - 1] + 1 === array[i] || result.length === 0) {
                result.push(array[i]);
                result.push((array[i] + 1));
            }
        }
        map.add(array[i])
    }
    if (!result.length) return [];
    return [result[0], result[result.length - 1]];
}