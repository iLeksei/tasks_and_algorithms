import java.util.LinkedList;
import java.util.Queue;

public class MinDepth {

    public static void main(String[] args) {

    }

    private static class Depth {
        int value = Integer.MAX_VALUE;
    }

    /**
     * Given a binary tree, find its minimum depth.
     * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
     * Note: A leaf is a node with no children.
     * <p>
     * Example 1:
     * Input: root = [3,9,20,null,null,15,7]
     * Output: 2
     * <p>
     * Example 2:
     * Input: root = [2,null,3,null,4,null,5,null,6]
     * Output: 5
     * <p>
     * Constraints:
     * The number of nodes in the tree is in the range [0, 105].
     * -1000 <= Node.val <= 1000
     */
    public static int minDepth(TreeNode root) {
        if (root == null) return 0;
        Depth minDepth = new Depth();
        traverse(root, 1, minDepth);
        return minDepth.value;
    }

    private static void traverse(TreeNode node, int depth, Depth minDepth) {
        if (node != null) {
            if (node.left == null && node.right == null) {
                minDepth.value = Math.min(depth, minDepth.value);
                return;
            }
            traverse(node.left, depth + 1, minDepth);
            traverse(node.right, depth + 1, minDepth);
        }
    }

    /**
     * this approach is better in a case if we have left depth is just 1 and right is 10000...
     * we don't need to dive recursively through all that 10000... nodes
     */
    public int minDepth2(TreeNode root) {
        if (root == null) return 0;
        int depth = 1;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            // for each level
            for (int i = 0; i < size; i++) {
                TreeNode node = q.poll();
                if (node.left == null && node.right == null) {
                    return depth;
                }
                if (node.left != null) {
                    q.offer(node.left);
                }
                if (node.right != null) {
                    q.offer(node.right);
                }
            }
            depth++;
        }
        return depth;
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

        @Override
        public String toString() {
            return STR."\{this.val}";
        }
    }
}
