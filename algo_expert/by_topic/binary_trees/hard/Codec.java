import com.sun.source.tree.Tree;

import java.util.*;

public class Codec {

    public static void main(String[] args) {
        Codec codec = new Codec();
        TreeNode root = new TreeNode(5);
        TreeNode n3 = new TreeNode(3);
        TreeNode n2 = new TreeNode(2);
        TreeNode n8 = new TreeNode(8);
        root.left = n3;
        n3.left = n2;
        root.right = n8;
        String result = codec.serialize(root);
        System.out.println(result);
        TreeNode root2 = codec.deserialize("#");
        System.out.println(root2);
    }

    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        buildString(root, sb);
        sb.deleteCharAt(sb.length() - 1); // remove last ","
        return sb.toString();
    }

    private void buildString(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append("#").append(",");
        } else {
            sb.append(node.val).append(",");
            buildString(node.left, sb);
            buildString(node.right, sb);
        }
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data == null || data.isEmpty()) return null;
        Deque<String> q = new LinkedList<>(List.of(data.split(",")));
        return buildTree(q);
    }

    private TreeNode buildTree(Deque<String> q) {
        String val = q.remove();
        if ("#".equals(val)) {
            return null;
        } else {
            TreeNode node = new TreeNode(Integer.parseInt(val));
            node.left = buildTree(q);
            node.right = buildTree(q);
            return node;
        }
    }

    private static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }
}
