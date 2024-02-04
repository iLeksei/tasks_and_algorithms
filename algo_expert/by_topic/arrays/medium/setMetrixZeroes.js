/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 You must do it in place.

 Example 1:
 Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 Output: [[1,0,1],[0,0,0],[1,0,1]]

 Example 2:
 Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

 Constraints:
 m == matrix.length
 n == matrix[0].length
 1 <= m, n <= 200
 -231 <= matrix[i][j] <= 231 - 1

 Follow up:
 A straightforward solution using O(mn) space is probably a bad idea.
 A simple improvement uses O(m + n) space, but still not the best solution.
 Could you devise a constant space solution?
 * */

function setZeroes(matrix) {
    let zeroesRows = new Set();
    let zeroesCols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroesRows.add(i);
                zeroesCols.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (zeroesRows.has(i)) {
                matrix[i].fill(0);
                break;
            }

            if (zeroesCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};

function setZeroes2(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) fillMatrix(matrix, i, j);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === true) matrix[i][j] = 0;
        }
    }
    return matrix;
}

function fillMatrix(matrix, rowIdx, colIdx) {
    // fill row
    for (let i = 0; i < matrix[rowIdx].length; i++) {
        if (matrix[rowIdx][i] !== 0) matrix[rowIdx][i] = true;
    }
    //fill col
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][colIdx] !== 0) matrix[i][colIdx] = true;
    }

    matrix[rowIdx][colIdx] = true;
}

console.table(setZeroes2([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]))
    // [0, 0, 0, 0],
    // [0, 4, 5, 0],
    // [0, 3, 1, 0]
