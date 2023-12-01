
/**
* Write a function that takes in a Binary Tree and returns if that tree is
* symmetrical. A tree is symmetrical if the left and right subtrees are
* mirror images of each other.
*
* Each BinaryTree node has an integer value, a
* left child node, and a right child node. Children
* nodes can either be BinaryTree nodes themselves or
* None / null.
*
* Sample Input
* tree =       1
*           /     \
*          2       2
*        /  \    /   \
*       3    4  4     3
*      /      \     /  \
*     5        6   6    5
*
* Sample Output
* True
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function symmetricalTree1(tree) {
    return isSymmetric(tree.left, tree.right);
}

function isSymmetric(node1, node2) {
    if (node1 == null && node2 == null) return true;

    if (node1 != null &&
        node2 != null &&
        node1.value === node2.value) {
        return isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left);

    }

    return false;
}

let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
        },
        right: {
            value: 4,
        }
    },
    right: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 3,
        }
    }
}
console.log(symmetricalTree1(tree))