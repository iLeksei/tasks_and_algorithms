
/**
* Write a function that takes in an n x m two-dimensional array (that can be
* square-shaped when n == m) and returns a one-dimensional array of all the
* array's elements in zigzag order.
*
* Zigzag order starts at the top left corner of the two-dimensional array, goes
* down by one element, and proceeds in a zigzag pattern all the way to the
* bottom right corner.
*
* Sample Input
*     array = [
*         [1,  3,  4, 10],
*         [2,  5,  9, 11],
*         [6,  8, 12, 15],
*         [7, 13, 14, 16],
*     ]
*
* Sample Output
*     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

function zigzagTraverse(array) {
    let rowIdx = 0;
    let colIdx = 0;
    let rowBoundary = 1;
    let colBoundary = 1;
    let result = [];

    while (colIdx < array.length && rowIdx < array.length) {
        result.push(array[rowIdx][colIdx]);
        //go down

    }

    return result;
}