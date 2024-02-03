/**
 * According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 The board is made up of an m x n grid of cells, where each cell has an initial state:
 live (represented by a 1) or dead (represented by a 0).
 Each cell interacts with its eight neighbors (horizontal, vertical, diagonal)
 using the following four rules (taken from the above Wikipedia article):
 - Any live cell with fewer than two live neighbors dies as if caused by under-population.
 - Any live cell with two or three live neighbors lives on to the next generation.
 - Any live cell with more than three live neighbors dies, as if by over-population.
 - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 Example 1:
 Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
 Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

 Example 2:
 Input: board = [[1,1],[1,0]]
 Output: [[1,1],[1,1]]

 Constraints:
 m == board.length
 n == board[i].length
 1 <= m, n <= 25
 board[i][j] is 0 or 1.

 Follow up:
 Could you solve it in-place? Remember that the board needs to be updated simultaneously:
 You cannot update some cells first and then use their updated values to update other cells.
 In this question, we represent the board using a 2D array.
 In principle, the board is infinite,
 which would cause problems when the active area encroaches upon the border of the array
 (i.e., live cells reach the border).
 How would you address these problems?
 * */

function gameOfLife(board) {
    //  1 && < 2 die
    //  1 && (2 || 3) live
    //  1 && > 3 die
    //  0 && 3 -> 1
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let isAlive = board[i][j] === 1;
            let aliveCounter = 0;
            let prevRow = board[i - 1];
            let nextRow = board[i + 1];
            //check top left
            if (prevRow && (prevRow[j - 1] === 1 || prevRow[j - 1] === false)) ++aliveCounter;
            //check top
            if (prevRow && (prevRow[j] === 1 || prevRow[j] === false)) ++aliveCounter;
            // check top right
            if (prevRow && (prevRow[j + 1] === 1 || prevRow[j + 1] === false)) ++aliveCounter;
            //check left
            if (board[i][j - 1] === 1 || board[i][j - 1] === false) ++aliveCounter;
            //check right
            if (board[i][j + 1] === 1 || board[i][j + 1] === false) ++ aliveCounter;
            // check bottom left
            if (nextRow && (nextRow[j - 1] === 1 || nextRow[j - 1] === false)) ++aliveCounter;
            // check bottom
            if (nextRow && (nextRow[j] === 1 || nextRow[j] === false)) ++aliveCounter;
            // check bottom right
            if (nextRow && (nextRow[j + 1] === 1 || nextRow[j + 1] === false)) ++aliveCounter;

            if (isAlive && aliveCounter < 2) board[i][j] = false;
            if (isAlive && aliveCounter > 3) board[i][j] = false;
            if (!isAlive && aliveCounter === 3) board[i][j] = true;
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === true) board[i][j] = 1;
            else if (board[i][j] === false) board[i][j] = 0;
        }
    }
    return board;
};

console.table(gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]))
// [[0,0,0],
// [1,0,1],
// [0,1,1],
// [0,1,0]]