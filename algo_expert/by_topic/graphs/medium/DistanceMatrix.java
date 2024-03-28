import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Queue;

public class DistanceMatrix {

    public static void main(String[] args) {
        int[][] m1 = new int[][] {
            new int[]{0,0,0},
            new int[]{0,1,0},
            new int[]{0,0,0}
        };
        System.out.println(Arrays.deepToString(updateMatrix(m1))); // [0,0,0][0,1,0][0,0,0]

        int[][] m2 = new int[][] {
                new int[]{0,0,0},
                new int[]{0,1,0},
                new int[]{1,1,1}
        };
        System.out.println(Arrays.deepToString(updateMatrix(m2))); // [0,0,0][0,1,0][1,2,1]

    }

    /**
     * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
     * The distance between two adjacent cells is 1.
     * <p>
     * Example 1:
     * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
     * Output: [[0,0,0],[0,1,0],[0,0,0]]
     * <p>
     * Example 2:
     * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
     * Output: [[0,0,0],[0,1,0],[1,2,1]]
     * <p>
     * Constraints:
     * m == mat.length
     * n == mat[i].length
     * 1 <= m, n <= 104
     * 1 <= m * n <= 104
     * mat[i][j] is either 0 or 1.
     * There is at least one 0 in mat.
     */
    public static int[][] updateMatrix(int[][] mat) {
        if (mat == null || mat.length == 0) return null;
        int[][] distances = new int[mat.length][mat[0].length];
        bfs(mat, distances);
        return distances;
    }

    private static void bfs(int[][] matrix, int[][] distances) {
        Queue<Cell> q = new ArrayDeque<>();
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == 0) {
                    distances[i][j] = 0;
                    q.add(new Cell(i, j));
                } else {
                    distances[i][j] = Integer.MAX_VALUE;
                }
            }
        }

        final int[] di = {-1, 1, 0, 0};
        final int[] dj = {0, 0, -1, 1};

        Cell cell = null;
        int nextRowIdx = 0;
        int nextColIdx = 0;
        while (!q.isEmpty()) {
            cell = q.poll();

            // go up, down, left, right
            for (int k = 0; k < 4; k++) {
                nextRowIdx = cell.rowIdx + di[k];
                nextColIdx = cell.colIdx + dj[k];
                if (nextRowIdx < 0 || nextRowIdx >= matrix.length || nextColIdx < 0 || nextColIdx >= matrix[0].length) {
                    continue;
                }
                if (distances[nextRowIdx][nextColIdx] == Integer.MAX_VALUE) {
                    distances[nextRowIdx][nextColIdx] = distances[cell.rowIdx][cell.colIdx] + 1;
                    q.add(new Cell(nextRowIdx, nextColIdx));
                }
            }
        }
    }

    private static class Cell {
        private int rowIdx, colIdx;

        Cell(int rowIdx, int colIdx) {
            this.rowIdx = rowIdx;
            this.colIdx = colIdx;
        }
    }

}