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
    if (!tree || !tree.value) return null;
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
    if (tree.left) invertBinaryTree(tree.left);
    if (tree.right) invertBinaryTree(tree.right);

    return tree;
}

let root = new BinaryTree(1);
let n2 = new BinaryTree(2);
let n3 = new BinaryTree(3);
root.left = n2;
root.right = n3;

let n4 = new BinaryTree(4);
let n5 = new BinaryTree(5);
n2.left = n4;
n2.right = n5;

let n8 = new BinaryTree(8);
let n9 = new BinaryTree(9);
n4.left = n8;
n4.right = n9;

let n6 = new BinaryTree(6);
let n7 = new BinaryTree(7);
n3.left = n6;
n3.right = n7;

console.log(JSON.stringify(invertBinaryTree(root)));