import java.util.*;

public class BinaryTreeRightSideView {

    public static void main(String[] args) {

    }

    /**
     * Given the root of a binary tree, imagine yourself standing on the right side of it,
     * return the values of the nodes you can see ordered from top to bottom.
     * <p>
     * Example 1:
     * Input: root = [1,2,3,null,5,null,4]
     * Output: [1,3,4]
     * <p>
     * Example 2:
     * Input: root = [1,null,3]
     * Output: [1,3]
     * <p>
     * Example 3:
     * Input: root = []
     * Output: []
     * <p>
     * Constraints:
     * The number of nodes in the tree is in the range [0, 100].
     * -100 <= Node.val <= 100
     */
    public static List<Integer> rightSideView2(TreeNode root) {
        if (root == null) return Collections.emptyList();
        // reverse level traversal
        List<Integer> result = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                if (i == 0) result.add(cur.val);
                if (cur.right != null) queue.offer(cur.right);
                if (cur.left != null) queue.offer(cur.left);
            }

        }
        return result;
    }

    public List<Integer> rightSideView(TreeNode root) {
        Map<Integer, List<Integer>> levelGroups = new HashMap<>();
        traverse(root, levelGroups, 0);
        List<Integer> result = new ArrayList<>();
        levelGroups.values().forEach(list -> {
            result.add(list.getLast());
        });
        return result;
    }

    private void traverse(TreeNode node, Map<Integer, List<Integer>> levelGroups, int level) {
        if (node == null) {
            return;
        }
        levelGroups.computeIfAbsent(level, k -> new ArrayList<>()).add(node.val);
        traverse(node.left, levelGroups, level + 1);
        traverse(node.right, levelGroups, level + 1);
    }

    private record TreeNode(int val, TreeNode left, TreeNode right) {
    }

    ;
}
