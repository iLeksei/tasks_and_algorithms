public class MinimumPathSum {

    public static void main(String[] args) {
        System.out.println(minPathSum(new int[][] {
                new int[] {1,2,3},
                new int[] {4,5,6}
        }));
    }

    /**
     * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right,
     * which minimizes the sum of all numbers along its path.
     * Note: You can only move either down or right at any point in time.
     *
     * Example 1:
     * Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
     * Output: 7
     * Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
     *
     * Example 2:
     * Input: grid = [[1,2,3],[4,5,6]]
     * Output: 12
     *
     * Constraints:
     * m == grid.length
     * n == grid[i].length
     * 1 <= m, n <= 200
     * 0 <= grid[i][j] <= 200
     */
    public static int minPathSum(int[][] grid) {
        for (int colIdx = 1; colIdx < grid[0].length; colIdx++) {
            grid[0][colIdx] += grid[0][colIdx - 1];
        }

        for (int rowIdx = 1; rowIdx < grid.length; rowIdx++) {
            grid[rowIdx][0] += grid[rowIdx - 1][0];
        }


        for (int rowIdx = 1; rowIdx < grid.length; rowIdx++) {
            for (int colIdx = 1; colIdx < grid[0].length; colIdx++) {
                int minCost = Math.min(
                        grid[rowIdx - 1][colIdx], grid[rowIdx][colIdx - 1]
                );
                grid[rowIdx][colIdx] += minCost;
            }
        }

        return grid[grid.length - 1][grid[0].length - 1];
    }
}
