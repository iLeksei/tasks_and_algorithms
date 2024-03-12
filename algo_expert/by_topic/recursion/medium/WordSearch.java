
public class WordSearch {

    public static void main(String[] args) {
        char[][] board = new char[][]{
                new char[]{'A', 'B', 'C', 'E'},
                new char[]{'S', 'F', 'C', 'S'},
                new char[]{'A', 'D', 'E', 'E'}
        };
        //System.out.println(exist(board, "ABCCED"));

        char[][] board2 = new char[][]{
                new char[]{'A', 'B', 'C', 'E'},
                new char[]{'S', 'F', 'C', 'S'},
                new char[]{'A', 'D', 'E', 'E'}
        };
        //System.out.println(exist(board2, "SEE"));

        char[][] board3 = new char[][]{
                new char[]{'C', 'A', 'A'},
                new char[]{'A', 'A', 'A'},   //   A <- A
                new char[]{'B', 'C', 'D'}    //   B
        };
        // System.out.println(exist(board3, "AAB"));

        char[][] board4 = new char[][]{
                new char[]{'A', 'B', 'C', 'E'},
                new char[]{'S', 'F', 'C', 'S'},
                new char[]{'A', 'D', 'E', 'E'}
        };
        System.out.println(exist(board4, "ABCB"));

    }

    /**
     * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
     * The word can be constructed from letters of sequentially adjacent cells,
     * where adjacent cells are horizontally or vertically neighboring.
     * The same letter cell may not be used more than once.
     *
     * Example 1:
     * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
     * Output: true
     *
     * Example 2:
     * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
     * Output: true
     *
     * Example 3:
     * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
     * Output: false
     *
     * Constraints:
     * m == board.length
     * n = board[i].length
     * 1 <= m, n <= 6
     * 1 <= word.length <= 15
     * board and word consists of only lowercase and uppercase English letters.
     */
    public static boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                if (checkWord(board, word, 0, i, j)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     *
     */
    private static boolean checkWord(char[][] board, String word, int idx, int rowIdx, int colIdx) {
        if (idx == word.length()) {
            return true;
        }

        if (rowIdx >= board.length || colIdx >= board[0].length || rowIdx < 0 || colIdx < 0) {
            return false;
        }

        if (board[rowIdx][colIdx] != word.charAt(idx)) {
            return false;
        }

        board[rowIdx][colIdx] ^= 256; //make visited char not valid
        return checkWord(board, word, idx + 1, rowIdx, colIdx + 1) ||
                checkWord(board, word, idx + 1, rowIdx, colIdx - 1) ||
                checkWord(board, word, idx + 1, rowIdx + 1, colIdx) ||
                checkWord(board, word, idx + 1, rowIdx - 1, colIdx);
    }

}
