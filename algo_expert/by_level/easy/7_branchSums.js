
// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.

// Each BinaryTree node has an integer value, a left child node and a right child node.
// Children nodes can either be BinaryTree nodes themselves on null

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root, sum = 0, result = []) {
    // Write your code here.
    let currentSum  = root.value + sum;
    if (!root.left && !root.right) {
        result.push(currentSum)
    }

    if(root.left) {
        branchSums(root.left, currentSum, result)
    }

    if(root.right) {
        branchSums(root.right, currentSum, result)
    }

    return result;
}

console.log(branchSums({
    value: 10,
    right: {
        value: 15,
        right: {
            value: 22,
            right: null,
            left: null,
        },
        left: {
            value: 13,
            left: null,
            right: {
                value: 14,
                right: null,
                left: null,
            }
        }
    },
    left: {
        value: 5,
        left: {
            value: 2,
            left: {
                value: 1,
                right: null,
                left: null,
            },
            right: null,
        },
        right: {
            value: 5,
            left: null,
            right: null,
        }
    }
}));
