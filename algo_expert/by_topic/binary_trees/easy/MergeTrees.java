public class MergeTrees {

    public static void main(String[] args) {
        
    }
    
    private static TreeNode mergeTrees(TreeNode n1, TreeNode n2) {
        if (n1 == null) return n2;
        if (n2 == null) return n1;
        n1.val += n2.val;
        n1.left = mergeTrees(n1.left, n2.left);
        n2.right = mergeTrees(n1.right, n2.right);
        return n1;
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
