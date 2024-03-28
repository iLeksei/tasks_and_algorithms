import java.util.List;

public class MaxDepth {

    public static void main(String[] args) {
        TreeNode root = new TreeNode(5);
        TreeNode n2 = new TreeNode(2);
        TreeNode n6 = new TreeNode(6);
        TreeNode n9 = new TreeNode(9);
        root.left = n2;
        root.right = n6;
        n6.right = n9;
        System.out.println(maxDepth(root));
        List<Integer> numbers = List.of(1, 2, 3);
        String.join(",", List.of("1,2,3"));
    }

    /**
     * Given the root of a binary tree, return its maximum depth.
     * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
     *
     * Example 1:
     * Input: root = [3,9,20,null,null,15,7]
     * Output: 3
     *
     * Example 2:
     * Input: root = [1,null,2]
     * Output: 2
     *
     * Constraints:
     * The number of nodes in the tree is in the range [0, 104].
     * -100 <= Node.val <= 100
     */
    public static int maxDepth(TreeNode root) {
        return findMaxDepth(root, 0);
    }

    private static int findMaxDepth(TreeNode node, int depth) {
        if (node == null) return depth;
        return Math.max(findMaxDepth(node.left, depth + 1), findMaxDepth(node.right, depth + 1));
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
