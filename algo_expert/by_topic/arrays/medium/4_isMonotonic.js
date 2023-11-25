/**
    Write a function that takes in an array of integers and returns a boolean
    representing whether the array is monotonic.

    An array is said to be monotonic if its elements, from left to right, are
    entirely non-increasing or entirely non-decreasing.

    Non-increasing elements aren't necessarily exclusively decreasing; they simply
    don't increase. Similarly, non-decreasing elements aren't necessarily
    exclusively increasing; they simply don't decrease.

    Note that empty arrays and arrays of one element are monotonic.
    Sample Input:
    array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
    Sample Output: true
 */

function isMonotonic(array) {
    if (array.length <= 2) return true;
    let isIncreasing = array[0] <= array[1];
    for (let i = 1; i < array.length; i++) {
        if (isIncreasing && array[i + 1] < array[i]) {
            return false;
        }
        if (!isIncreasing && array[i + 1] > array[i]) {
            return false;
        }
    }
    return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])) // true