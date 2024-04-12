import java.util.Arrays;

public class SurroundedRegions {

    public static void main(String[] args) {
        char[][] b1 = new char[][]{
                new char[]{'X', 'X', 'X', 'X'},
                new char[]{'X', 'O', 'O', 'X'},
                new char[]{'X', 'X', 'O', 'X'},
                new char[]{'X', 'O', 'X', 'X'}
        };
        solve(b1);
        System.out.println(Arrays.deepToString(b1));

        char[][] b2 = new char[][]{
                new char[]{'X', 'O', 'X', 'O', 'X', 'O'}, // {'X','O','X','O','X','O'}
                new char[]{'O', 'X', 'O', 'X', 'O', 'X'}, // {'O','X','X','X','X','X'}
                new char[]{'X', 'O', 'X', 'O', 'X', 'O'}, // {'X','X','X','X','X','O'}
                new char[]{'O', 'X', 'O', 'X', 'O', 'X'}  // {'O','X','O','X','O','X'}
        };
        solve(b2);
        System.out.println(Arrays.deepToString(b2));
    }

    /**
     * Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
     * A region is captured by flipping all 'O's into 'X's in that surrounded region.
     * <p>
     * Example 1:
     * Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
     * Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
     * Explanation: Notice that an 'O' should not be flipped if:
     * - It is on the border, or
     * - It is adjacent to an 'O' that should not be flipped.
     * The bottom 'O' is on the border, so it is not flipped.
     * The other three 'O' form a surrounded region, so they are flipped.
     * <p>
     * Example 2:
     * Input: board = [["X"]]
     * Output: [["X"]]
     * <p>
     * Constraints:
     * m == board.length
     * n == board[i].length
     * 1 <= m, n <= 200
     * board[i][j] is 'X' or 'O'.
     */
    public static void solve(char[][] board) {
        boolean[][] visited = new boolean[board.length][board[0].length];
        for (int i = 0; i < board[0].length; i++) {
            // check first row
            if (board[0][i] == 'O') {
                dfs(board, 0, i, visited);
            }
            // check last row
            if (board[board.length - 1][i] == 'O') {
                dfs(board, board.length - 1, i, visited);
            }
        }

        for (int i = 0; i < board.length; i++) {
            // check left edge
            if (board[i][0] == 'O') {
                dfs(board, i, 0, visited);
            }
            // check right edge
            if (board[i][board[0].length - 1] == 'O') {
                dfs(board, i, board[0].length - 1, visited);
            }
        }

        // remove all islands
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
            }
        }

        // remove all cells with *
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == '*') {
                    board[i][j] = 'O';
                }
            }
        }
    }

    private static void dfs(char[][] board, int rowIdx, int colIdx, boolean[][] visited) {
        if (rowIdx >= board.length || rowIdx < 0 || colIdx >= board[0].length || colIdx < 0) {
            return;
        }
        if (board[rowIdx][colIdx] == 'X' || visited[rowIdx][colIdx]) {
            return;
        }
        visited[rowIdx][colIdx] = true;

        if (board[rowIdx][colIdx] == 'O') {
            board[rowIdx][colIdx] = '*';
        }

        dfs(board, rowIdx + 1, colIdx, visited);
        dfs(board, rowIdx - 1, colIdx, visited);
        dfs(board, rowIdx, colIdx + 1, visited);
        dfs(board, rowIdx, colIdx - 1, visited);
    }
}
