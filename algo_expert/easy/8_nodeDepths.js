
// The distance between a node in a Binary Tree and the tree's root is called the
// node's depth.

// Write a function that takes in a Binary Tree and returns the sum of its nodes'
// depths.

//     Each BinaryTree node has an integer value, a
//     left child node, and a right child node. Children
//     nodes can either be BinaryTree nodes themselves or
//     None / null.

/**
 *        1
 *      |   \
 *     2     3       depth of the 2 is 1 + depth of the 3 is 1
 *    | \
 *   4   5           depth of the 4 is 2 + depth of the 5 is 2
 *   result 1 + 1 + 2 + 2 === 6
 */

function nodeDepths(root) {
    // Write your code here.
    let result = 0
    function dive(node, level = 0) {
        result += level;
        if (node.left) {
            dive(node.left, level + 1)
        }

        if (node.right) {
            dive(node.right, level + 1)
        }
    }
    dive(root)

    return result;
}



// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

console.log(nodeDepths({
    value: 1,
    right: {
        value: 3,
    },
    left: {
        value: 2,
        left: {
            value: 4,
        },
    }
})) // should be 4