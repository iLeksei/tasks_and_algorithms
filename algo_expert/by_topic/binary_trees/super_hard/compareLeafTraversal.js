
/**
*     Write a function that takes in the root nodes of two Binary Trees and returns
*     a boolean representing whether their leaf traversals are the same.
*
*     The leaf traversal of a Binary Tree traverses only its leaf nodes from left to
*     right. A leaf node is any node that has no left or
*     right children.
*
*     For example, the leaf traversal of the following Binary Tree is
*     1, 3, 2.
*
*        4
*      /   \
*     1     5
*         /   \
*        3     2
*
*     Each BinaryTree node has an integer value, a
*     left child node, and a right child node. Children
*     nodes can either be BinaryTree nodes themselves or
*     None / null.
*
* Sample Input
* tree1 = 1
*       /   \
*      2     3
*    /   \     \
*   4     5     6
*       /   \
*      7     8
* tree2 = 1
*       /   \
*      2     3
*    /   \    \
*   4     7    5
*             /  \
*            8    6
*
* Sample Output
* true
*/


class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function compareLeafTraversal(tree1, tree2) {

    let tree1Nodes = [];
    let tree2Nodes = [];
    let firstTree = traverse(tree1, tree1Nodes);
    let secondTree = traverse(tree2, tree2Nodes);

    for (let i = 0; i < firstTree.length; i++) {
        if (firstTree[i] !== secondTree[i]) return false
    }
    console.log(firstTree, secondTree)
    return true;
}

function traverse(node, values = []) {
    if (!node) return values;

    if (node.left) traverse(node.left, values);
    if (node.right) traverse(node.right, values);

    if (!node.left && !node.right) values.push(node.value);
    return values;
}

let tree1 = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 5,
            left: {
                value: 7,
            },
            right: {
                value: 8,
            }
        }
    },
    right: {
        value: 3,
        right: {
            value: 6,
        },

    }
};
let tree2 = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 7,
        }
    },
    right: {
        value: 3,
        right: {
            value: 5,
            left: {
                value: 8,
            },
            right: {
                value: 6,
            },
        },

    }
};
console.log(compareLeafTraversal(tree1, tree2));