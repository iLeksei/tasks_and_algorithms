/**
    Write a function that takes in a Binary Tree and inverts it. In other words,
    the function should swap every left node in the tree for its corresponding
    right node.

    Each BinaryTree node has an integer value, a
    left child node, and a right child node. Children
    nodes can either be BinaryTree nodes themselves or
    None / null.

        Sample Input
        tree = 1
           /     \
          2       3
        /   \   /   \
       4     5 6     7
     /   \
    8     9

        Sample Output
           1
        /     \
       3       2
     /   \   /   \
    7     6 5     4
                /   \
               9     8
 */



// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(tree) {
    // Write your code here.
    let node = tree;
    if (node) {
        let temp = node.left || null;
        node.left = node.right;
        node.right = temp;
        if (node.left) invertBinaryTree(node.left)
        if (node.right) invertBinaryTree(node.right)
    }
    return node;
}

