

/**
    Write a function that takes in an array of integers and returns the length of
    the longest peak in the array.

    A peak is defined as adjacent integers in the array that are <b>strictly</b>
    increasing until they reach a tip (the highest value in the peak), at which
    point they become <b>strictly</b> decreasing. At least three integers are required to
    form a peak.

    For example, the integers 1, 4, 10, 2 form a peak, but the
    integers 4, 0, 10 don't and neither do the integers
    1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
    form a peak because there aren't any strictly decreasing integers after the 3.

    Sample Input: array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

    Sample Output: 6 // 0, 10, 6, 5, -1, -3
*/

function longestPeak(array) {
    // Write your code here.
    let result = 0;
    let lengthCounter = 1;
    let goUpFlag = false;
    let goDownFlag = false;

    for (let i = 1; i < array.length; i++) {
        // if the same length
        if (array[i] === array[i - 1]) {
            lengthCounter = 1;
            goDownFlag = false;
            goUpFlag = false;
            continue;
        }

        // go up
        if (array[i] >= array[i - 1] && !goDownFlag) {
            goUpFlag = true;
            lengthCounter++;
            continue;
        }

        // go down
        if (array[i] <= array[i - 1] && goUpFlag) {
            goDownFlag = true;
            lengthCounter++;
            result = lengthCounter > result ? lengthCounter : result;
            continue;
        }

        // go up again
        if (array[i] >= array[i - 1] && goDownFlag) {
            result = lengthCounter > result ? lengthCounter : result;
            lengthCounter = 2; // initial 1 + current 1
            goDownFlag = false;
            continue;
        }
    }
    return result;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])) // 6 [1, 2, 3, 3, 4, 0]
// console.log(longestPeak([5, 4, 3, 2, 1, 2, 1])) // 3 [1, 2, 1]
// console.log(longestPeak([1, 2, 3, 4, 5, 1])) // 6
// console.log(longestPeak(  [1, 2, 3, 4, 5, 6, 10, 100, 1000])); // 0
console.log(longestPeak(   [1, 2, 3, 3, 4, 0, 10])); // 3