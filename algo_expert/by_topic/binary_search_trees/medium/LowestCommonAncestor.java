
public class LowestCommonAncestor {

    public static void main(String[] args) {
        TreeNode root = new TreeNode(6);
        TreeNode n2 = new TreeNode(2);
        TreeNode n8 = new TreeNode(8);
        root.left = n2;
        root.right = n8;
        TreeNode n7 = new TreeNode(7);
        TreeNode n9 = new TreeNode(9);
        n8.left = n7;
        n8.right = n9;
        TreeNode n0 = new TreeNode(0);
        TreeNode n4 = new TreeNode(4);
        n2.left = n0;
        n2.right = n4;
        TreeNode n3 = new TreeNode(3);
        TreeNode n5 = new TreeNode(5);
        n4.left = n3;
        n4.right = n5;

        TreeNode result = lowestCommonAncestor(root, n2, n4);
        System.out.println(result);
    }

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (root.val > p.val && root.val > q.val) {
                root = root.left;
            } else if (root.val < p.val && root.val < q.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return root;
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
