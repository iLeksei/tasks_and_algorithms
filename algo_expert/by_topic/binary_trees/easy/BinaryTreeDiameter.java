public class BinaryTreeDiameter {

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        TreeNode n2 = new TreeNode(2);
        TreeNode n3 = new TreeNode(3);
        root.left = n2;
        root.right = n3;
        TreeNode n4 = new TreeNode(4);
        TreeNode n5 = new TreeNode(5);
        n2.left = n4;
        n2.right = n5;
        System.out.println(diameterOfBinaryTree(root));
    }

    private static int maxDiameter = 0;

    /**
     *  Given the root of a binary tree, return the length of the diameter of the tree.
     * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
     * This path may or may not pass through the root.
     * The length of a path between two nodes is represented by the number of edges between them.
     *
     * Example 1:
     *
     * Input: root = [1,2,3,4,5]
     * Output: 3
     * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
     *
     * Example 2:
     * Input: root = [1,2]
     * Output: 1
     *
     * Constraints:
     * The number of nodes in the tree is in the range [1, 104].
     * -100 <= Node.val <= 100
     */
    public static int diameterOfBinaryTree(TreeNode root) {
        if (root == null) return 0;
        traverse(root);
        return maxDiameter;
    }

    private static int traverse(TreeNode node) {
        if (node == null) {
            return 0;
        }
        int left = traverse(node.left);
        int right = traverse(node.right);
        maxDiameter = Math.max(maxDiameter, left + right);

        return Math.max(left, right) + 1;
    }

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }

        @Override
        public String toString() {
            return STR."\{this.val}";
        }
    }
}
