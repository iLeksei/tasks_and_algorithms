
/**
    Write a function that takes in an array of positive integers and returns the
    maximum sum of non-adjacent elements in the array.

    If the input array is empty, the function should return 0.
    Sample Input
    array = [75, 105, 120, 75, 90, 135]

    Sample Output
    330 // 75 + 120 + 135

    time - O(N), space O(1)
*/


function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (!array.length) return 0;
    if (array.length === 1) return array[0];

    let prevMax = array[0];
    let currentMax = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        let current = Math.max(currentMax, prevMax + array[i]);
        prevMax = currentMax;
        currentMax = current;
    }

    return currentMax;
}