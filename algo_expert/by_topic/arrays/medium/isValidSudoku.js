/**
 *Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

 Each row must contain the digits 1-9 without repetition.
 Each column must contain the digits 1-9 without repetition.
 Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 Note:

 A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 Only the filled cells need to be validated according to the mentioned rules.

 Example 1:
 Input: board =
 [["5","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]]
 Output: true

 Example 2:
 Input: board =
 [["8","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]]
 Output: false
 Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

 Constraints:
 board.length == 9
 board[i].length == 9
 board[i][j] is a digit 1-9 or '.'.
 *
 * */

function isValidSudoku(board) {
    let numbersSet = new Set();
    let boardSize = 9;

    for (let rowIdx = 0; rowIdx < boardSize; rowIdx++) {
        for (let colIdx = 0; colIdx < boardSize; colIdx++) {
            if (board[rowIdx][colIdx] === ".") continue;
            if (
                numbersSet.has(`row-num-${rowIdx}-${board[rowIdx][colIdx]}`)  ||
                numbersSet.has(`col-num-${colIdx}-${board[rowIdx][colIdx]}`) ||
                numbersSet.has(`block-num-${Math.floor(rowIdx / 3)}-${Math.floor(colIdx / 3)}-${board[rowIdx][colIdx]}`)
            ) {
                return false;
            }
            numbersSet.add(`row-num-${rowIdx}-${board[rowIdx][colIdx]}`);
            numbersSet.add(`col-num-${colIdx}-${board[rowIdx][colIdx]}`);
            numbersSet.add(`block-num-${Math.floor(rowIdx / 3)}-${Math.floor(colIdx / 3)}-${board[rowIdx][colIdx]}`);
        }
    }
    return true;
};



// console.log(isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]))

// console.log(isValidSudoku([
//     [".",".",".",".","5",".",".","1","."],
//     [".","4",".","3",".",".",".",".","."],
//     [".",".",".",".",".","3",".",".","1"],
//     ["8",".",".",".",".",".",".","2","."],
//     [".",".","2",".","7",".",".",".","."],
//     [".","1","5",".",".",".",".",".","."],
//     [".",".",".",".",".","2",".",".","."],
//     [".","2",".","9",".",".",".",".","."],
//     [".",".","4",".",".",".",".",".","."]
// ]))

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]))