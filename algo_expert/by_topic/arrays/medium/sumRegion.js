/**
 Given a 2D matrix matrix, handle multiple queries of the following type:
 Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 Implement the NumMatrix class:

 NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 You must design an algorithm where sumRegion works on O(1) time complexity.

 Example 1:
 Input
 ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
 [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
 Output
 [null, 8, 11, 12]

 Explanation
 NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
 numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
 numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
 numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)

 Constraints:

 m == matrix.length
 n == matrix[i].length
 1 <= m, n <= 200
 -104 <= matrix[i][j] <= 104
 0 <= row1 <= row2 < m
 0 <= col1 <= col2 < n
 At most 104 calls will be made to sumRegion.

 @link: https://www.youtube.com/watch?v=PwDqpOMwg6U
 */
function NumMatrix(matrix) {
    this.grid = new Array(matrix.length + 1)
        .fill()
        .map(() => new Array(matrix[0].length + 1));
    this.grid[0].fill(0);
    for (let i = 1; i <= matrix.length; i++) {
        this.grid[i][0] = 0;
    }
    // console.table(this.grid)
    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 1; j <= matrix[0].length; j++) {
            this.grid[i][j] = matrix[i - 1][j - 1] +
                this.grid[i - 1][j] +
                this.grid[i][j - 1] -
                this.grid[i - 1][j - 1]
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    // console.table(this.grid)
    return this.grid[row2 + 1][col2 + 1] -
        this.grid[row2 + 1][col1] -
        this.grid[row1][col2 + 1] +
        this.grid[row1][col1];
};

let matrix = new NumMatrix([
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
    ]
)

console.log(matrix.sumRegion(2, 1, 4, 3)) //8
console.log(matrix.sumRegion(1, 1, 2, 2)) //11
console.log(matrix.sumRegion(1, 2, 2, 4)) //12

let matrix2 = new NumMatrix([
        [2, 0, -3, 4],
        [6, 3, 2, -1],
        [5, 4, 7, 3 ],
        [2, -6, 8, 1],
    ]
)

console.log(matrix2.sumRegion(1, 1, 2, 2)) //16
