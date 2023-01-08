// Write your code here.
function generateGameGrid() {
    return Array(3).fill(null).map(() => Array(3).fill(null));
}

let CELLS_AMOUNT = 9;
const board = document.getElementById("board");
const cells = document.querySelectorAll(".game-square");
const restartBtn = document.getElementById("restart-button");
const gameHeading = document.getElementById("game-heading");
let grid = generateGameGrid()
let currentPlayer = true;
let clickCounter = CELLS_AMOUNT;
let winner = null;

// restart game
restartBtn.addEventListener('click', (e) => {
    clickCounter = CELLS_AMOUNT;
    cells.forEach(cell => {
        cell.textContent = "";
    })
    currentPlayer = true;
    grid = generateGameGrid();
    restartBtn.style.display = "none";
    winner = null;
    gameHeading.textContent = "Player 1's Turn";
    toggleButtons(false)
})

function toggleButtons(isDisabled = false) {
    cells.forEach( button => {button.disabled = isDisabled;})
}

board.addEventListener("click", (e) => {
    if (e.target.className !== "game-square") return;
    let row = e.target.parentNode.parentNode;
    let [topRow, midRow, buttonRow] = e.target.parentNode.parentNode.parentNode.children;
    let cell = e.target.parentNode
    let [leftNode, midNode, rightNode] = row.children;

    let cellIdx = cell === rightNode ? 2 :
        cell === midNode ? 1 : 0;

    let rowIdx = row === topRow ? 0 :
        row === midRow ? 1 : 2;

    // if the cell is already filled;
    if (grid[rowIdx][cellIdx] != null) return;

    cell.firstChild.textContent = currentPlayer ? "X" : "O";
    cell.firstChild.disabled = true;
    --clickCounter;

    // set player's symbol
    grid[rowIdx][cellIdx] = +currentPlayer;
    currentPlayer = !currentPlayer;
    gameHeading.textContent = `Player ${currentPlayer ? "1" : "2"}\'s Turn`;

    // too early for a winner
    if (clickCounter > 4) return;

    // trying to define winner;
    winner = defineWinner(grid);
    if (winner != null) {
        gameHeading.textContent = `Player ${winner ? "1" : "2"} Won!`;
        restartBtn.style.display = "block";
        toggleButtons(true);
    }

    // stop game
    if (clickCounter === 0 && winner == null) {
        restartBtn.style.display = "block";
        gameHeading.textContent = "Tie Game!";
        toggleButtons(true);
    }

})

function defineWinner(grid) {
    const ROW_LENGTH = 3;
    const COL_LENGTH = 3;
    // check each row
    for (let row = 0; row < ROW_LENGTH; row++) {
        let currentRow = grid[row];
        if (currentRow[0] === null) continue;
        if (currentRow[0] === currentRow[1] && currentRow[0] === currentRow[2]) {
            return currentRow[0];
        }
    }

    //check columns
    for (let col = 0; col < COL_LENGTH; col++) {
        if (grid[0][col] === null) continue;
        if (grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col]) {
            return grid[0][col];
        }
    }

    //check diagonals
    if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
        return grid[0][0];
    }
    if (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]) {
        return grid[0][2];
    }
    return null;
}