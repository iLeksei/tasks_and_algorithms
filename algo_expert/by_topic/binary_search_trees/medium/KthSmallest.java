import java.util.ArrayList;
import java.util.List;

public class KthSmallest {

    public static void main(String[] args) {
        TreeNode root1 = new TreeNode(5);
        TreeNode n3 = new TreeNode(3);
        TreeNode n7 = new TreeNode(7);
        TreeNode n1 = new TreeNode(1);
        TreeNode n4 = new TreeNode(4);
        root1.left = n3;
        root1.right = n7;
        n3.left = n1;
        n3.right = n4;
        System.out.println(kthSmallest(root1, 3));
    }

    /**
     *  Given the root of a binary search tree, and an integer k,
     *  return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
     *
     * Example 1:
     * Input: root = [3,1,4,null,2], k = 1
     * Output: 1
     *
     * Example 2:
     * Input: root = [5,3,6,2,4,null,null,1], k = 3
     * Output: 3
     *
     * Constraints:
     * The number of nodes in the tree is n.
     * 1 <= k <= n <= 104
     * 0 <= Node.val <= 104
     *
     * Follow up: If the BST is modified often (i.e., we can do insert and delete operations)
     * and you need to find the kth smallest frequently, how would you optimize?
     */
    public static int kthSmallest(TreeNode root, int k) {
        List<Integer> values = new ArrayList<>();
        inOrderTraverse(root, values, k);
        return values.size() < k ? 0 : values.get(k - 1);
    }

    private static void inOrderTraverse(TreeNode node, List<Integer> values, int k) {
        if (node != null) {
            inOrderTraverse(node.left, values, k);
            values.add(node.val);
            if (values.size() >= k) return;
            inOrderTraverse(node.right, values, k);
        };
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
