/**
 *     You're given a two-dimensional array (a matrix) of potentially unequal height
 *     and width containing only 0s and 1s. The matrix
 *     represents a two-toned image, where each 1 represents black and
 *     each 0 represents white. An island is defined as any number of
 *     1s that are horizontally or vertically adjacent (but not
 *     diagonally adjacent) and that don't touch the border of the image. In other
 *     words, a group of horizontally or vertically adjacent 1s isn't an
 *     island if any of those 1s are in the first row, last row, first
 *     column, or last column of the input matrix.
 *
 *     Note that an island can twist. In other words, it doesn't have to be a
 *     straight vertical line or a straight horizontal line; it can be L-shaped, for
 *     example.
 *
 *     You can think of islands as patches of black that don't touch the border of
 *     the two-toned image.
 *
 *     Write a function that returns a modified version of the input matrix, where
 *     all of the islands are removed. You remove an island by replacing it with
 *     0s.
 *
 * Naturally, you're allowed to mutate the input matrix.
 * Sample Input
 * matrix =
 * [
 *   [1, 0, 0, 0, 0, 0],
 *   [0, 1, 0, 1, 1, 1],
 *   [0, 0, 1, 0, 1, 0],
 *   [1, 1, 0, 0, 1, 0],
 *   [1, 0, 1, 1, 0, 0],
 *   [1, 0, 0, 0, 0, 1],
 * ]
 *
 * Sample Output
 * [
 *   [1, 0, 0, 0, 0, 0],
 *   [0, 0, 0, 1, 1, 1],
 *   [0, 0, 0, 0, 1, 0],
 *   [1, 1, 0, 0, 1, 0],
 *   [1, 0, 0, 0, 0, 0],
 *   [1, 0, 0, 0, 0, 1],
 * ]
 * The islands that were removed can be clearly seen here:
 * [
 *   [ ,  ,  ,  ,  , ],
 *   [ , 1,  ,  ,  , ],
 *   [ ,  , 1,  ,  , ],
 *   [ ,  ,  ,  ,  , ],
 *   [ ,  , 1, 1,  , ],
 *   [ ,  ,  ,  ,  , ],
 * ]
 */

/**
 *  time: O(N * M)
 *  space: O(N * M)
 */
function removeIslands(matrix) {
    let islands = [];
    let badIslands = [];

    for (let rowIdx = 1; rowIdx < matrix.length - 1; rowIdx++) {
        for (let colIdx = 1; colIdx < matrix[rowIdx].length - 1; colIdx++) {
            if (matrix[rowIdx][colIdx] === 0) continue;
            //best case
            let topEl = matrix[rowIdx - 1][colIdx];
            let bottomEl = matrix[rowIdx + 1][colIdx];
            let leftEl = matrix[rowIdx][colIdx - 1];
            let rightEl = matrix[rowIdx][colIdx + 1];
            let areNullAdjacents = topEl === 0 && bottomEl === 0 && leftEl === 0 && rightEl === 0;
            if (matrix[rowIdx][colIdx] === 1 && areNullAdjacents) {
                matrix[rowIdx][colIdx] = 0;
                continue;
            }
            //regular case
            let position = `${rowIdx}${colIdx}`;
            if (isPartOfIsland(islands, position) || isPartOfIsland(badIslands, position)) continue;
            let data = {isBadIsland: false, result: new Set()}
            gatherConnected(matrix, rowIdx, colIdx, data);
            console.log(data)
            if (data.isBadIsland) {
                badIslands.push(data.result);
            } else {
                islands.push(data.result);
            }
        }
    }

    islands.forEach(islandElementSet => {
        for (const element of islandElementSet) {
            matrix[element[0]][element[1]] = 0;
        }
    })
    return matrix;
}

function isPartOfIsland(islands = [], node = "") {
    for (const island of islands) {
        if (island.has(node)) return true;
    }
    return false;
}

function gatherConnected(matrix, rowIdx, colIdx, data) {
    if (rowIdx === matrix.length - 1 ||
        colIdx === matrix[rowIdx].length - 1 ||
        rowIdx === 0 ||
        colIdx === 0
    ) {
        data.isBadIsland = true;
    }
    if (
        rowIdx > matrix.length ||
        colIdx > matrix[rowIdx].length ||
        colIdx < 0 ||
        rowIdx < 0
    ) return data;

    // top
    if (matrix[rowIdx - 1][colIdx] === 1 &&
        !data.result.has(`${rowIdx - 1}${colIdx}`)
    ) {
        data.result.add(`${rowIdx - 1}${colIdx}`);
        gatherConnected(matrix, rowIdx - 1, colIdx, data)
    }

    // bottom
    if (matrix[rowIdx + 1] &&
        matrix[rowIdx + 1][colIdx] === 1 &&
        !data.result.has(`${rowIdx + 1}${colIdx}`)
    ) {
        data.result.add(`${rowIdx + 1}${colIdx}`);
        gatherConnected(matrix, rowIdx + 1, colIdx, data)
    }

    // left
    if (matrix[rowIdx][colIdx - 1] === 1 &&
        !data.result.has(`${rowIdx}${colIdx - 1}`)
    ) {
        data.result.add(`${rowIdx}${colIdx - 1}`);
        gatherConnected(matrix, rowIdx, colIdx - 1, data)
    }

    // right
    if (matrix[rowIdx][colIdx + 1] === 1 &&
        !data.result.has(`${rowIdx}${colIdx + 1}`)
    ) {
        data.result.add(`${rowIdx}${colIdx + 1}`);
        gatherConnected(matrix, rowIdx, colIdx + 1, data)
    }
    return data;
}

console.log(removeIslands(
    [
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 1, 0],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 1],
    ]
))

console.log(removeIslands(
    [
        [1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 1],
    ]
))