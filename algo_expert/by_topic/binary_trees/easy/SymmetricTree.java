import com.sun.source.tree.Tree;

public class SymmetricTree {

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        TreeNode n2_1 = new TreeNode(2);
        TreeNode n2_2 = new TreeNode(2);
        TreeNode n3_1 = new TreeNode(3);
        TreeNode n3_2 = new TreeNode(3);
        root.left = n2_1;
        root.right = n2_2;
        n2_1.left = n3_1;
        n2_2.right = n3_2;
        System.out.println(isSymmetric(root)); // true
    }

    /**
     *  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
     *
     * Example 1:
     * Input: root = [1,2,2,3,4,4,3]
     * Output: true
     *
     * Example 2:
     * Input: root = [1,2,2,null,3,null,3]
     * Output: false
     *
     * Constraints:
     * The number of nodes in the tree is in the range [1, 1000].
     * -100 <= Node.val <= 100
     * Follow up: Could you solve it both recursively and iteratively?
     */
    public static boolean isSymmetric(TreeNode root) {
        return compare(root.left, root.right);
    }

    private static boolean compare(TreeNode n1, TreeNode n2) {
        if (n1 == null && n2 == null) return true;
        if (n1 == null || n2 == null || n1.val != n2.val) return false;

        return compare(n1.left, n2.right) &&
                compare(n1.right, n2.left);
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
