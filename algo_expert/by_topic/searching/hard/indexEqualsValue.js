/**
 *     Write a function that takes in a sorted array of distinct integers and returns
 *     the first index in the array that is equal to the value at that index. In
 *     other words, your function should return the minimum index where
 *     index == array[index].
 *
 * If there is no such index, your function should return -1.
 * Sample Input
 * array = [-5, -3, 0, 3, 4, 5, 9]
 *
 * Sample Output
 * 3 // 3 == array[3]
 *
 * time: N
 * space: O(1)
 */
function indexEqualsValue(array) {
    for (let i = 0; i < array.length; i++) {
        if (i === array[i]) return i;
    }
    return -1;
}

/**
 * time: logN
 * space: O(1)
 */
function indexEqualsValue2(array) {
    let leftCursor = 0;
    let rightCursor = array.length;
    let pivot = Math.floor((leftCursor + rightCursor) / 2);

    while (leftCursor < rightCursor) {
        if (array[pivot] === pivot) return array[pivot]

        if (array[pivot] < pivot) {
            if (leftCursor === pivot) return -1;
            leftCursor = pivot;
        } else if (array[pivot] > pivot) {
            if (rightCursor === pivot) return -1;
            rightCursor = pivot;
        }
        pivot = Math.floor((leftCursor + rightCursor) / 2);
    }

    return -1;
}

console.log(indexEqualsValue2(               // 9 idx/pivot (103)
     [-10, -2, -1, 2, 3, 5, 12, 13, 44, 103, 125, 204, 444, 505, 506, 507, 1112, 2012])) // 5 array[5] === 5;

console.log(indexEqualsValue2([-20, -10, -3, 0, 1, 3, 5, 7, 8])); // 7
console.log(indexEqualsValue2([-20, -10, -3, 0, 1, 3, 5, 12, 13])); // -1