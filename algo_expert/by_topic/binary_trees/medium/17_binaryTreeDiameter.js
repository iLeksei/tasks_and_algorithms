/**
    Write a function that takes in a Binary Tree and returns its diameter. The
    diameter of a binary tree is defined as the length of its longest path, even
    if that path doesn't pass through the root of the tree.

    A path is a collection of connected nodes in a tree, where no node is
    connected to more than two other nodes. The length of a path is the number of
    edges between the path's first node and its last node.

    Each BinaryTree node has an integer value, a
    left child node, and a right child node. Children
    nodes can either be BinaryTree nodes themselves or None / null.
    
    Sample Input
    tree =    1
            /   \
           3     2
         /   \ 
        7     4
       /       \
      8         5
     /           \
    9             6

    Sample Output
    6 // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
    There are 6 edges between the
    first node and the last node
    of this tree's longest path.
 */


// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree) {
    let params = {maxDiameter: -Infinity};
    getMaxDiameter(tree, params);
    return params.maxDiameter;
}

function getMaxDiameter(tree, treeParameters) {
    if (!tree) return 0;

    let leftValue = getMaxDiameter(tree.left, treeParameters);
    let rightValue = getMaxDiameter(tree.right, treeParameters);

    treeParameters.maxDiameter = Math.max(
        leftValue + rightValue, treeParameters.maxDiameter
    )
    return Math.max(leftValue + 1, rightValue + 1);
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

console.log(binaryTreeDiameter(root)) // 5