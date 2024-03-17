import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DfsGraph {

    public static void main(String[] args) {
        List<List<Integer>> graph = Arrays.asList(
            Arrays.asList(1, 2),
            Arrays.asList(0, 2, 3),
            Arrays.asList(0, 1),
            Arrays.asList(1)
        );
        boolean[] visited = new boolean[graph.size()];
        dfs(graph, 0, visited);
    }

    private static void dfs(List<List<Integer>> graph, Integer vertex, boolean[] visited) {
        visited[vertex] = true;
        System.out.println(STR."Visited vertex: \{vertex}");
        for (Integer neighbourIdx: graph.get(vertex)) {
            if (!visited[neighbourIdx]) {
                dfs(graph, neighbourIdx, visited);
            }
        }
    }
}
