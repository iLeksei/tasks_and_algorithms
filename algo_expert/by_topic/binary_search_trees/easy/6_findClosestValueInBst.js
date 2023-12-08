/**
 * Write a function that takes in a Binary Search Tree (BST) and a target integer
 * value and returns the closest value to that target value contained in the BST.
 * You can assume that there will only be one closest value
 *
 * time: O(N) amount of nodes
 * space: O(N) nodes
 */
function findClosestValueInBst(tree, target) {
   let closest = Infinity;
   let stack = [tree];

   while(stack.length > 0) {
       let currentNode = stack.pop();
       closest = Math.abs(currentNode.value - target) < Math.abs(closest - target) ?
           currentNode.value : closest;

       if (currentNode.left) stack.push(currentNode.left);
       if (currentNode.right) stack.push(currentNode.right);
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