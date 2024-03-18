public class IslandPerimeter {

    public static void main(String[] args) {
        int[][] grid1 = new int[][]{
            new int[]{0, 1, 0, 0},
            new int[]{1, 1, 1, 0},
            new int[]{0, 1, 0, 0},
            new int[]{1, 1, 0, 0}
        };
        System.out.println(islandPerimeter(grid1));
    }

    public static int islandPerimeter(int[][] grid) {
        boolean[][] visited = new boolean[grid.length][];
        for (int i = 0; i < grid.length; i++) {
            visited[i] = new boolean[grid[0].length];
        }

        int result = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (!visited[i][j] && grid[i][j] == 1) {
                    result += dfs(grid, i, j, visited);
                }
            }
        }
        return result;
    }

    private static int dfs(int[][] graph, int rowIdx, int colIdx, boolean[][] visited) {
        if (rowIdx < 0 || rowIdx >= graph.length || colIdx < 0 || colIdx >= graph[0].length) {
            return 0;
        }
        if (visited[rowIdx][colIdx] || graph[rowIdx][colIdx] == 0) {
            return 0;
        }
        visited[rowIdx][colIdx] = true;
        int perimeter = 4;

        if (rowIdx + 1 < graph.length && graph[rowIdx + 1][colIdx] == 1) {
            perimeter--;
        }
        if (rowIdx - 1 >= 0 && graph[rowIdx - 1][colIdx] == 1) {
            perimeter--;
        }
        if (colIdx + 1 < graph[0].length && graph[rowIdx][colIdx + 1] == 1) {
            perimeter--;
        }
        if (colIdx - 1 >= 0 && graph[rowIdx][colIdx - 1] == 1) {
            perimeter--;
        }

        perimeter += dfs(graph, rowIdx, colIdx + 1, visited);
        perimeter += dfs(graph, rowIdx, colIdx - 1, visited);
        perimeter += dfs(graph, rowIdx + 1, colIdx, visited);
        perimeter += dfs(graph, rowIdx - 1, colIdx, visited);

        return perimeter;
    }
}
