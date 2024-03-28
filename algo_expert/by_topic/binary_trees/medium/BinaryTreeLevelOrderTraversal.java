import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BinaryTreeLevelOrderTraversal {

    public static void main(String[] args) {

    }

    /**
     *  Given the root of a binary tree, return the level order traversal of its nodes' values.
     *  (i.e., from left to right, level by level).
     *
     * Example 1:
     * Input: root = [3,9,20,null,null,15,7]
     * Output: [[3],[9,20],[15,7]]
     *
     * Example 2:
     * Input: root = [1]
     * Output: [[1]]
     *
     * Example 3:
     * Input: root = []
     * Output: []
     *
     * Constraints:
     * The number of nodes in the tree is in the range [0, 2000].
     * -1000 <= Node.val <= 1000
     */
    public static List<List<Integer>> levelOrder(TreeNode root) {
        Map<Integer, List<Integer>> levelGroups = new HashMap<>();
        traverse(root, levelGroups, 0);
        return levelGroups.values().stream().toList();
    }

    private static void traverse(TreeNode node, Map<Integer, List<Integer>> levelGroups, int level) {
        if (node == null) {
            return;
        }
        levelGroups.computeIfAbsent(level, k -> new ArrayList<>()).add(node.val);
        traverse(node.left, levelGroups, level + 1);
        traverse(node.right, levelGroups, level + 1);
    }

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
}
