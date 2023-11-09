/**
    Write a function that takes in a potentially invalid Binary Search Tree (BST)
    and returns a boolean representing whether the BST is valid.

    Each BST node has an integer value, a
    left child node, and a right child node. A node is
    said to be a valid BST node if and only if it satisfies the BST
    property: its value is strictly greater than the values of every
    node to its left; its value is less than or equal to the values
    of every node to its right; and its children nodes are either valid
    BST nodes themselves or None / null.

    A BST is valid if and only if all of its nodes are valid
    BST nodes.
    
    Sample Input tree:
          10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

    Sample Output: true
*/




// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree, min = -Infinity, max = Infinity) {
    // Write your code here.
    if (!tree) return true;
    if (tree.value < min || tree.value >= max) return false;

    return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max);
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
            right: {
                value: 11
            }
        }
    },
    right: {
        value: 15,
        right: {
            value: 22,
        }
    }
}

console.log(validateBst(bst))