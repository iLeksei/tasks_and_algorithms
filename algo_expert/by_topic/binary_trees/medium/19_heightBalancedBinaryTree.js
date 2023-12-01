/**
    You're given the root node of a Binary Tree. Write a function that returns
    true if this Binary Tree is height balanced and
    false if it isn't.

    A Binary Tree is height balanced if for each node in the tree, the difference
    between the height of its left subtree and the height of its right subtree is
    at most 1.

    Each BinaryTree node has an integer value, a
    left child node, and a right child node. Children
    nodes can either be BinaryTree nodes themselves or
    None / null.

    Sample Input:
    tree = 1
         /   \
        2     3
      /   \     \
     4     5     6
         /   \
        7     8

    Sample Output: true
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function heightBalancedBinaryTree(tree) {
    let params = {isBalanced: true}
    calcHeight(tree, params)
    return params.isBalanced;
}

function calcHeight(node, treeInfo, height = 0) {
    if (!node) return height;

    let leftHeight = calcHeight(node.left, treeInfo,height + 1);
    let rightHeight = calcHeight(node.right, treeInfo,height + 1);

    if (Math.abs(leftHeight - rightHeight) > 1) treeInfo.isBalanced = false;

    return Math.max(leftHeight, rightHeight);
}

let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        }
    },
    right: {
        value: 3,
        right: {
            value: 6
        }
    }
}
console.log(heightBalancedBinaryTree(tree))