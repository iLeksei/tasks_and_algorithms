/**
 Write a function that takes in an n x m two-dimensional array (that can be
 square-shaped when n == m) and returns a one-dimensional array of all the
 array's elements in spiral order.

 Spiral order starts at the top left corner of the two-dimensional array, goes
 to the right, and proceeds in a spiral pattern all the way until every element
 has been visited.

 Sample Input:
 array = [
 [1,   2,  3, 4],
 [12, 13, 14, 5],
 [11, 16, 15, 6],
 [10,  9,  8, 7],
 ]

 Sample Output:
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */

function spiralTraverse(array) {
    // Write your code here.
    let result = [];
    let startRow = 0, endRow = array.length - 1;
    let startCol = 0, endCol = array[0].length - 1;

    while (startCol <= endRow && startCol <= endCol) {
        // go right
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        // go down
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        // go left
        for (let col = endCol - 1; col >= startCol; col--) {
            if (endRow > startRow) {
                result.push(array[endRow][col]);
            }
        }
        // go up
        for (let row = endRow - 1; row > startRow; row--) {
            if (endCol > startCol) {
                result.push(array[row][startCol]);
            }
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    return result;
}


// console.log(spiralTraverse([
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]
// ]))// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

console.log(spiralTraverse( [
        [27, 12, 35, 26],
        [25, 21, 94, 11],
        [19, 96, 43, 56],
        [55, 36, 10, 18],
        [96, 83, 31, 94],
        [93, 11, 90, 16]
    ]));