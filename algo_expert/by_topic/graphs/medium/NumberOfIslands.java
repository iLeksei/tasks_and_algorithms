import java.util.HashMap;
import java.util.Map;

public class NumberOfIslands {

    public static void main(String[] args) {
        char[][] grid = new char[][] {
            new char[]{'1','1','1','1','0'},
            new char[]{'1','1','0','1','0'},
            new char[]{'1','1','0','0','0'},
            new char[]{'0','0','0','0','0'}
        };
        System.out.println(numIslands(grid));
    }

    /**
     *  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
     *  return the number of islands.
     * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
     * You may assume all four edges of the grid are all surrounded by water.
     *
     * Example 1:
     * Input: grid = [
     *   ["1","1","1","1","0"],
     *   ["1","1","0","1","0"],
     *   ["1","1","0","0","0"],
     *   ["0","0","0","0","0"]
     * ]
     * Output: 1
     *
     * Example 2:
     * Input: grid = [
     *   ["1","1","0","0","0"],
     *   ["1","1","0","0","0"],
     *   ["0","0","1","0","0"],
     *   ["0","0","0","1","1"]
     * ]
     * Output: 3
     *
     * Constraints:
     * m == grid.length
     * n == grid[i].length
     * 1 <= m, n <= 300
     * grid[i][j] is '0' or '1'.
     */
    public static int numIslands(char[][] grid) {
        int result = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] != '0') {
                    traverse(grid, i, j);
                    result++;
                }
            }
        }
        return result;
    }

    private static void traverse(char[][] grid, int rowIdx, int colIdx) {
        if (rowIdx >= grid.length || rowIdx < 0 || colIdx >= grid[0].length || colIdx < 0) return;
        if (grid[rowIdx][colIdx] == '0') return;
        grid[rowIdx][colIdx] = '0';
        // go right
        traverse(grid, rowIdx, colIdx + 1);
        // go left
        traverse(grid, rowIdx, colIdx - 1);
        // go down
        traverse(grid, rowIdx + 1, colIdx);
        // go up
        traverse(grid, rowIdx - 1, colIdx);
    }
}
