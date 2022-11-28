
// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.
//
// You can assume that there will only be one closest value


function findClosestValueInBst(tree, target) {
    let closest = Infinity;
    let currentNode = tree;
    let nextNode = null;

    while (currentNode !== null) {
        if (Math.abs(currentNode.value - target) < Math.abs(closest - target) || closest === null) {
            closest = currentNode.value
        }
        currentNode = currentNode.value < target ? currentNode.right : currentNode.left;
    }
    return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


console.log(findClosestValueInBst({
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
}, 12))