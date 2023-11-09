/**
    Write a function that takes in a Binary Search Tree (BST) and a positive
    integer k and returns the kth largest integer contained in the
    BST.

    You can assume that there will only be integer values in the BST and that
    k is less than or equal to the number of nodes in the tree.

    Also, for the purpose of this question, duplicate integers will be treated as
    distinct values. In other words, the second largest value in a BST containing
    values {5, 7, 7} will be 7—not 5.

    Each BST node has an integer value, a
    left child node, and a right child node. A node is
    said to be a valid BST node if and only if it satisfies the BST
    property: its value is strictly greater than the values of every
    node to its left; its value is less than or equal to the values
    of every node to its right; and its children nodes are either valid
    BST nodes themselves or None / null.

    Sample Input
    tree =      15
             /     \
            5      20
          /   \   /   \
         2     5 17   22
       /   \
      1     3
    k = 3

    Sample Output: 17
*/

// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let array = inOrderTravers(tree);
    return array[array.length - k] ? array[array.length - k] : -1;
}

function inOrderTravers(tree, nodesValues = []) {
    let node = tree;
    if (node) {
        if (node.left) inOrderTravers(tree.left, nodesValues)
        nodesValues.push(node.value)
        if (node.right) inOrderTravers(tree.right, nodesValues)
    }
    return nodesValues;
}


let bst = {
    value: 10,
    left: {
        value: 5,
        left: {
            value: 2,
            left: {
                value: 1,
            }
        },
        right: {
            value: 5,
        }
    },
    right: {
        value: 15,
        right: {
            value: 22,
        }
    }
}

console.log(findKthLargestValueInBst(bst, 1))