public class DeleteNode {

    public static void main(String[] args) {
        TreeNode root1 = new TreeNode(5);
        TreeNode n3 = new TreeNode(3);
        TreeNode n2 = new TreeNode(2);
        TreeNode n4 = new TreeNode(4);
        TreeNode n1 = new TreeNode(1);
        n3.left = n2;
        n3.right = n4;
        n2.left = n1;
        TreeNode n6 = new TreeNode(6);
        root1.left = n3;
        root1.right = n6;
        TreeNode n10 = new TreeNode(10);
        n6.right = n10;
        TreeNode n8 = new TreeNode(8);
        TreeNode n15 = new TreeNode(15);
        TreeNode n12 = new TreeNode(12);
        TreeNode n11 = new TreeNode(11);
        n15.left = n12;
        n12.left = n11;
        n10.left = n8;
        n10.right = n15;
        TreeNode n7 = new TreeNode(7);
        TreeNode n9 = new TreeNode(9);
        n8.left = n7;
        n8.right = n9;


        TreePrinter(root1);
        deleteNode(root1, 10);
        TreePrinter(root1);
    }

    /**
     * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
     * Return the root node reference (possibly updated) of the BST.
     * Basically, the deletion can be divided into two stages:
     * Search for a node to remove.
     * If the node is found, delete the node.
     * <p>
     * Example 1:
     * Input: root = [5,3,6,2,4,null,7], key = 3
     * Output: [5,4,6,2,null,null,7]
     * Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
     * One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
     * Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
     * <p>
     * Example 2:
     * Input: root = [5,3,6,2,4,null,7], key = 0
     * Output: [5,3,6,2,4,null,7]
     * Explanation: The tree does not contain a node with value = 0.
     * <p>
     * Example 3:
     * Input: root = [], key = 0
     * Output: []
     * <p>
     * Constraints:
     * The number of nodes in the tree is in the range [0, 104].
     * -105 <= Node.val <= 105
     * Each node has a unique value.
     * root is a valid binary search tree.
     * -105 <= key <= 105
     * Follow up: Could you solve it with time complexity O(height of tree)?
     */
    private static TreeNode deleteNode(TreeNode node, int key) {
        if (node == null) return null;

        if (node.val > key) {
            node.left = deleteNode(node.left, key);
            return node;
        } else if (node.val < key) {
            node.right = deleteNode(node.right, key);
            return node;
        }

        if (node.left == null) {
            return node.right;
        } else if (node.right == null) {
            return node.left;
        } else {
            TreeNode minNode = node.right;
            while (minNode.left != null) {
                minNode = minNode.left;
            }
            node.val = minNode.val;
            node.right = deleteNode(node.right, minNode.val);
            return node;
        }
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

    private static int height(TreeNode root) {
        if (root == null)
            return 0;
        return Math.max(height(root.left), height(root.right)) + 1;
    }

    private static int getcol(int h) {
        if (h == 1)
            return 1;
        return getcol(h - 1) + getcol(h - 1) + 1;
    }

    private static void printTree(int[][] M, TreeNode root, int col, int row, int height) {
        if (root == null)
            return;
        M[row][col] = root.val;
        printTree(M, root.left, col - (int) Math.pow(2, height - 2), row + 1, height - 1);
        printTree(M, root.right, col + (int) Math.pow(2, height - 2), row + 1, height - 1);
    }

    private static void TreePrinter(TreeNode root) {
        int h = height(root);
        int col = getcol(h);
        int[][] M = new int[h][col];
        printTree(M, root, col / 2, 0, h);
        for (int i = 0; i < h; i++) {
            for (int j = 0; j < col; j++) {
                if (M[i][j] == 0)
                    System.out.print("  ");
                else
                    System.out.print(M[i][j] + " ");
            }
            System.out.println();
        }
    }
}
