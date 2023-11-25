/**
    Write a function that takes in two non-empty arrays of integers, finds the
    pair of numbers (one from each array) whose absolute difference is closest to
    zero, and returns an array containing these two numbers, with the number from
    the first array in the first position.


    Note that the absolute difference of two integers is the distance between
    them on the real number line. For example, the absolute difference of -5 and 5
    is 10, and the absolute difference of -5 and -4 is 1.

    You can assume that there will only be one pair of numbers with the smallest
    difference.

    Sample Input:
    arrayOne</span> = [-1, 5, 10, 20, 28, 3]
    arrayTwo</span> = [26, 134, 135, 15, 17]

    Sample Output:
    [28, 26]

    HINT:
    Start by sorting both arrays.
    Put a pointer at the beginning of both arrays and evaluate the absolute difference of the pointer-numbers.
    If the difference is equal to zero, then you've found the closest pair;
    otherwise, increment the pointer of the smaller of the two numbers to find a potentially better pair.
    Continue until you get a pair with a difference of zero or until one of the pointers gets out of range of its array.

 */

// [-1, 3, 5,10, 20, 28]
// [15, 17, 26, 135, 135]
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);

    let smallestDiff = Infinity;
    let firstArrIdx = 0;
    let secondArrIdx = 0;
    let result = [];

    while (firstArrIdx < arrayOne.length && secondArrIdx < arrayTwo.length) {
        let tempDiff = Math.abs(arrayOne[firstArrIdx] - arrayTwo[secondArrIdx]);
        if (tempDiff < smallestDiff) {
            smallestDiff = tempDiff;
            result = [arrayOne[firstArrIdx], arrayTwo[secondArrIdx]];
        }

        if (arrayOne[firstArrIdx] < arrayTwo[secondArrIdx]) {
            firstArrIdx++;
        } else {
            secondArrIdx++;
        }
    }

    return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])); // [28, 26]
