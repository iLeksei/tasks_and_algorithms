void main(String[] args) {
    System.out.println(searchMatrixOptimized(new int[][] {
            new int[] {1},
            new int[] {3},
    }, 3)); // true
    System.out.println(searchMatrixOptimized(new int[][] {
            new int[] {1,1},
            new int[] {2,2},
    }, 2)); // true
}

/**
 *  You are given an m x n integer matrix matrix with the following two properties:
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 *
 * Example 1:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -104 <= matrix[i][j], target <= 104
 *
 */
private boolean searchMatrixOptimized(int[][] matrix, int target) {
    int colLen = matrix.length;
    int rowLen = matrix[0].length;
    int start = 0;
    int end = colLen * rowLen - 1;
    int mid = 0;

    while (start != end) {
        mid = start + (end - start) / 2;
        if (matrix[mid / rowLen][mid % rowLen] < target) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return matrix[end / rowLen][end % rowLen] == target;
}
private boolean searchMatrix(int[][] matrix, int target) {
    int rowIdx = findRowIdx(matrix, target);
    int start = 0;
    int end = matrix[rowIdx].length - 1;
    int mid = 0;

    while (start <= end) {
        mid = (start + end) / 2;
        if (matrix[rowIdx][mid] == target) {
            return true;
        }
        if (target > matrix[rowIdx][mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}

private int findRowIdx(int[][] matrix, int target) {
    int low = 0;
    int high = matrix.length - 1;
    int mid = 0;

    while (low <= high) {
        mid = (low + high) / 2;
        if (matrix[mid].length == 1 && target == matrix[mid][0]) {
            return mid;
        }
        if  (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
            return mid;
        }
        if (target > matrix[mid][0]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return 0;
}