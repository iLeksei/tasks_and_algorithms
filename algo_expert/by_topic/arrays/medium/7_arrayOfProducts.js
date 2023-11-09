/**
    Write a function that takes in a non-empty array of integers and returns an
    array of the same length, where each element in the output array is equal to
    the product of every other number in the input array.

    In other words, the value at <span>output[i] is equal to the product of
    every number in the input array other than <span>input[i].

    Note that you're expected to solve this problem without using division.
    Sample Input:
    array = [5, 1, 4, 2]

    Sample Output:
    [8, 40, 10, 20]
    // 8 is equal to 1 x 4 x 2
    // 40 is equal to 5 x 4 x 2
    // 10 is equal to 5 x 1 x 2
    // 20 is equal to 5 x 1 x 4
*/

function arrayOfProducts(array) {
    // Write your code here.
    let hasZeroCounter = 0;
    let allMultiplied = array.reduce((acc, num) => {
        if (num === 0) {
            hasZeroCounter++;
        }
        return (num || 1) * acc
    }, 1);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (hasZeroCounter > 1) {
            result.push(0)
            continue;
        }
        if (hasZeroCounter > 0 && array[i] !== 0) {
            result.push(0);
            continue;
        }

        if (array[i] === 0) {
            result.push(allMultiplied);
            continue;
        }

        result.push(allMultiplied / array[i])
    }

    return result;
}

console.log(arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) //