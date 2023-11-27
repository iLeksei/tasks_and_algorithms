/**
 *     Write a function that takes in a sorted array of integers as well as a target
 *     integer. The function should use a variation of the Binary Search algorithm to
 *     find a range of indices in between which the target number is contained in the
 *     array and should return this range in the form of an array.
 *
 *     The first number in the output array should represent the first index at which
 *     the target number is located, while the second number should represent the
 *     last index at which the target number is located. The function should return
 *     [-1, -1] if the integer isn't contained in the array.
 *
 *     If you're unfamiliar with Binary Search, we recommend watching the Conceptual
 *     Overview section of the Binary Search question's video explanation before
 *     starting to code.
 *
 * Sample Input
 * array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
 * target = 45
 *
 * Sample Output
 * [4, 9]
 *
 * time: logN
 * space: O(1)
 */
function searchForRange(array, target) {
    let leftCursor = 0;
    let rightCursor = array.length;
    let pivot = Math.floor((leftCursor + rightCursor) / 2);

    while (leftCursor < rightCursor - 1) {
        if (array[pivot] > target) {
            rightCursor = pivot;
        } else if (array[pivot] < target) {
            leftCursor = pivot;
        }

        if (array[pivot] === target) {
            while (array[leftCursor] !== target) {
                leftCursor++;
            }

            while (array[rightCursor] !== target) {
                rightCursor--;
            }
        }

        if (array[leftCursor] === target && array[rightCursor] === target) return [leftCursor, rightCursor];

        pivot = Math.floor((leftCursor + rightCursor) / 2);
    }

    return [-1, -1]
}


 console.log(searchForRange([1, 3, 3, 4, 5, 6, 7, 13, 14, 15, 16, 17, 18, 19, 20], 3)); // [1, 2];
 console.log(searchForRange([1, 3, 3, 4, 5, 6, 7, 13, 14, 15, 16, 16, 18, 19, 20], 16)); // [10, 11];
 console.log(searchForRange([1, 3, 3, 45, 45, 45, 45, 45, 46], 45)); // [3, 7];
console.log(searchForRange([1, 3, 3, 13, 41, 42, 43, 44, 46], 45)); // [-1, -1];