import java.util.*;

public class FindCycle {

    /**
     * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
     * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates
     * that you must take course bi first if you want to take course ai.
     * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
     * Return true if you can finish all courses. Otherwise, return false.
     *
     * Example 1:
     * Input: numCourses = 2, prerequisites = [[1,0]]
     * Output: true
     * Explanation: There are a total of 2 courses to take.
     * To take course 1 you should have finished course 0. So it is possible.
     *
     * Example 2:
     * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
     * Output: false
     * Explanation: There are a total of 2 courses to take.
     * To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1.
     * So it is impossible.
     *
     * Constraints:
     * 1 <= numCourses <= 2000
     * 0 <= prerequisites.length <= 5000
     * prerequisites[i].length == 2
     * 0 <= ai, bi < numCourses
     * All the pairs prerequisites[i] are unique.
     */
    public static void main(String[] args) {
        int[][] graph2 = new int[][]{new int[]{1, 0}};
        System.out.println(canFinish(2, graph2)); // true

        int[][] graph = new int[][]{new int[]{1, 0}, new int[]{0, 1}};
        System.out.println(canFinish(2, graph)); // false

    }

    private enum NodeState {
        UNVISITED,
        VISITING,
        VISITED
    }

    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        if (prerequisites == null || prerequisites.length == 0)
            return true;

        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++)
            graph.add(new ArrayList<>());

        for (int[] requirement : prerequisites)
            graph.get(requirement[0]).add(requirement[1]);

        NodeState[] state = new NodeState[numCourses];
        Arrays.fill(state, NodeState.UNVISITED);

        for (int i = 0; i < numCourses; i++)
            if (state[i] == NodeState.UNVISITED)
                if (dfs(graph, i, state))
                    return false;

        return true;
    }

    private static boolean dfs(List<List<Integer>> graph, int nodeIdx, NodeState[] state) {
        state[nodeIdx] = NodeState.VISITING;
        boolean hasCycle = false;

        for (int neighbour : graph.get(nodeIdx)) {
            if (state[neighbour] == NodeState.UNVISITED)
                hasCycle |= dfs(graph, neighbour, state);
            else if (state[neighbour] == NodeState.VISITING)
                hasCycle = true;
        }

        state[nodeIdx] = NodeState.VISITED;
        return hasCycle;
    }
}
