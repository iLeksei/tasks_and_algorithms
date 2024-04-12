import java.util.Arrays;

public class UniquePaths {

    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7)); // 28
    }

    /**
     *  There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
     *  The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
     *  The robot can only move either down or right at any point in time.
     * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
     * The test cases are generated so that the answer will be less than or equal to 2 * 109.
     *
     * Example 1:
     * Input: m = 3, n = 7
     * Output: 28
     *
     * Example 2:
     * Input: m = 3, n = 2
     * Output: 3
     * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
     * 1. Right -> Down -> Down
     * 2. Down -> Down -> Right
     * 3. Down -> Right -> Down
     *
     * Constraints:
     * 1 <= m, n <= 100
     */
    public static int uniquePaths(int m, int n) {
        int[][] table = new int[m][n];
        Arrays.fill(table[0], 1);
        for (int rowIdx = 0; rowIdx < table.length; rowIdx++) {
            table[rowIdx][0] = 1;
        }

        for (int rowIdx = 1; rowIdx < table.length; rowIdx++) {
            for (int colIdx = 1; colIdx < table[0].length; colIdx++) {
                table[rowIdx][colIdx] = table[rowIdx - 1][colIdx] + table[rowIdx][colIdx - 1];
            }
        }
        return table[m - 1][n - 1];
    }
}
