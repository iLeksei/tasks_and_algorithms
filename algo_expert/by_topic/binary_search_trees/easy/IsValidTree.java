public class IsValidTree {
    public static void main(String[] args) {
        TreeNode root1 = new TreeNode(1);
        TreeNode n2_1 = new TreeNode(2);
        TreeNode n2_2 = new TreeNode(2);
        TreeNode n3_1 = new TreeNode(3);
        TreeNode n3_2 = new TreeNode(3);
        root1.left = n2_1;
        root1.right = n2_2;
        n2_1.left = n3_1;
        n2_2.right = n3_2;
        System.out.println(isValidTree(root1)); //false
    }

    private static boolean isValidTree(TreeNode root) {
        return traverseAndValidate(root, Long.MAX_VALUE, Long.MAX_VALUE);
    }

    private static boolean traverseAndValidate(TreeNode node, long max, long min) {
        if (node == null) return true;
        if (node.val >= max || node.val <= min) return false;

        return traverseAndValidate(node.left, node.val, min) && traverseAndValidate(node.right, max, node.val);
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
