/**
 *     You're given a two-dimensional array (a matrix) of potentially unequal height
 *     and width containing only 0s and 1s. Each
 *     0 represents land, and each 1 represents part of a
 *     river. A river consists of any number of 1s that are either
 *     horizontally or vertically adjacent (but not diagonally adjacent). The number
 *     of adjacent 1s forming a river determine its size.
 *
 *     Note that a river can twist. In other words, it doesn't have to be a straight
 *     vertical line or a straight horizontal line; it can be L-shaped, for example.
 *
 *     Write a function that returns an array of the sizes of all rivers represented
 *     in the input matrix. The sizes don't need to be in any particular order.
 *
 * Sample Input
 * matrix = [
 *   [1, 0, 0, 1, 0],
 *   [1, 0, 1, 0, 0],
 *   [0, 0, 1, 0, 1],
 *   [1, 0, 1, 0, 1],
 *   [1, 0, 1, 1, 0],
 * ]
 *
 * Sample Output
 * [1, 2, 2, 2, 5] // The numbers could be ordered differently.

 * The rivers can be clearly seen here:
 * [
 *   [1,  ,  , 1,  ],
 *   [1,  , 1,  ,  ],
 *   [ ,  , 1,  , 1],
 *   [1,  , 1,  , 1],
 *   [1,  , 1, 1,  ],
 * ]
 */

function riverSizes(matrix) {
    let result = []
    let rivers = new Set();

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
            if (matrix[rowIdx][colIdx] === 0) continue;
            if (rivers.has(`${rowIdx}${colIdx}`)) continue
            let data = {counter: 1};
            rivers.add(`${rowIdx}${colIdx}`)
            let river = traverseRiver(rowIdx, colIdx, matrix, rivers, data);
            result.push(river.counter);
        }
    }

    return result;
}

function traverseRiver(rowIdx, colIdx, matrix, rivers, data) {
    if (matrix[rowIdx][colIdx] === 0) return data;

    //top
    if (matrix[rowIdx - 1] &&
        matrix[rowIdx - 1][colIdx] === 1 &&
        !rivers.has(`${rowIdx - 1}${colIdx}`)) {
        rivers.add(`${rowIdx - 1}${colIdx}`)
        data.counter++;
        traverseRiver(rowIdx - 1, colIdx, matrix, rivers, data);
    }

    //bottom
    if (matrix[rowIdx + 1] &&
        matrix[rowIdx + 1][colIdx] === 1 &&
        !rivers.has(`${rowIdx + 1}${colIdx}`)) {
        rivers.add(`${rowIdx + 1}${colIdx}`)
        data.counter++;
        traverseRiver(rowIdx + 1, colIdx, matrix, rivers, data);
    }

    //left
    if (matrix[rowIdx][colIdx - 1] === 1 && !rivers.has(`${rowIdx}${colIdx - 1}`)) {
        rivers.add(`${rowIdx}${colIdx - 1}`)
        data.counter++;
        traverseRiver(rowIdx, colIdx - 1, matrix, rivers, data);
    }

    //right
    if (matrix[rowIdx][colIdx + 1] === 1 && !rivers.has(`${rowIdx}${colIdx + 1}`)) {
        rivers.add(`${rowIdx}${colIdx + 1}`)
        data.counter++;
        traverseRiver(rowIdx, colIdx + 1, matrix, rivers, data);
    }

    return data;
}

console.log(riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
]))