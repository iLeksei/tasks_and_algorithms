/**
 * Write a function that takes in an array of positive integers and returns the
 * maximum sum of non-adjacent elements in the array.
 *
 * If the input array is empty, the function should return 0.
 * Sample Input
 * array = [75, 105, 120, 75, 90, 135]
 *
 * Sample Output
 * 330 // 75 + 120 + 135
 *
 * time - O(N), space O(1)
 *
 */
function maxSubsetSumNoAdjacent(array) {
    if (!array) return -1
    if (array.length < 2) return array[0];

    let prevMax = array[0];
    let currentMax = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        let current = Math.max(currentMax, array[i] + prevMax);
        prevMax = currentMax;
        currentMax = current;
    }

    return currentMax;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])) // 330