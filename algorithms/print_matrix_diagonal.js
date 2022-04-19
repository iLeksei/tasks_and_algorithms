
const matrix = [
    [1, 2, 3, 4, 1],
    [3, 2, 6, 1, 8],
    [5, 6, 2, 1, 9],
    [8, 2, 3, 3, 6],
    [1, 2, 7, 7, 9],
];

/**
 * matrix always has number of rows that equals to number of elements in that rows
 */
function printDiagonal(matrix = []) {
    let rowIdx = 0;
    let colIdx = 0;
    let maxIdx = matrix.length - 1 || 0;
    while (rowIdx <= maxIdx && colIdx <= maxIdx) {
        console.log(matrix[rowIdx][colIdx]);
        rowIdx++;
        colIdx++
    }

}

printDiagonal(matrix); //should print 1 2 2 3 9