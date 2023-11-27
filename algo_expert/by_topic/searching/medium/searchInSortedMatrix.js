/**
 *     You're given a two-dimensional array (a matrix) of distinct integers and a
 *     target integer. Each row in the matrix is sorted, and each column is also sorted; the
 *     matrix doesn't necessarily have the same height and width.
 *
 *     Write a function that returns an array of the row and column indices of the
 *     target integer if it's contained in the matrix, otherwise
 *     [-1, -1].
 *
 * Sample Input
 * matrix = [
 *   [1, 4, 7, 12, 15, 1000],
 *   [2, 5, 19, 31, 32, 1001],
 *   [3, 8, 24, 33, 35, 1002],
 *   [40, 41, 42, 44, 45, 1003],
 *   [99, 100, 103, 106, 128, 1004],
 * ]
 * target = 44
 *
 * Sample Output
 * [3, 3]
 *
 *
 * time: logN * logM
 * space: O(1)
 */
function searchInSortedMatrix(matrix, target) {
    // we need to find row where next element > target and prev element < target
    let rowId = findRowIdx(matrix, target, 0, matrix.length);
    if (rowId !== -1) {
        return _binarySearch(matrix[rowId], target);
    }

    return -1;
}

function findRowIdx(matrix, target, topCursor = 0, bottomCursor = arguments[0].length) {
    let pivot = Math.floor((topCursor + bottomCursor) / 2);

    while (topCursor < bottomCursor) {
        // if  it's the last entry
        if (pivot === bottomCursor - 1) {
            return pivot;
        }

        if (matrix[pivot + 1][0] > target && matrix[pivot - 1][0] < target) {
            return pivot
        } else if (matrix[pivot][0] < target) {
            return findRowIdx(matrix, target, topCursor + 1, bottomCursor)
        } else if (matrix[pivot][0] > target) {
            return findRowIdx(matrix, target, topCursor, bottomCursor - 1)
        }
    }
    return -1;
}

function _binarySearch(array, target) {
    let i = 0;
    let j = array.length;

    while (i < j) {
        let pivot = Math.floor((i + j) / 2);
        if (array[pivot] === target) return array[pivot]
        else if (target > array[pivot]) i = pivot + 1;
        else if (target < array[pivot]) j = pivot - 1;
    }

    return target;
}


console.log(searchInSortedMatrix([
        [1, 4, 7, 12, 15, 1000],
        [2, 5, 19, 31, 32, 1001],
        [3, 8, 24, 33, 35, 1002],
        [40, 41, 42, 44, 45, 1003],
        [99, 100, 103, 106, 128, 1004],
    ],
    44)) // 44

console.log(searchInSortedMatrix([
        [1, 4, 7, 12, 15, 1000],
        [2, 5, 19, 31, 32, 1001],
        [3, 8, 24, 33, 35, 1002],
        [40, 41, 42, 44, 45, 1003],
        [99, 100, 103, 106, 128, 1004],
    ],
    103)) // 103