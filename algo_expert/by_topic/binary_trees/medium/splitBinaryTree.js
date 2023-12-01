
/**
* Write a function that takes in a Binary Tree with at least one node and
* checks if that Binary Tree can be split into two Binary Trees of equal sum by
* removing a single edge. If this split is possible, return the new sum of each
* Binary Tree, otherwise return 0. Note that you do not need to return the edge
* that was removed.
*
* The sum of a Binary Tree is the sum of all values in that Binary Tree.
*
* Each BinaryTree node has an integer value, a
* left child node, and a right child node. Children
* nodes can either be BinaryTree nodes themselves or None / null.
*
* Sample Input
* tree =     1
*         /     \
*        3       -2
*      /   \    /  \
*     6    -5  5    2
*   /
*  2
*
* Sample Output
*     6   * Remove the edge to the left of the root node,
*         * creating two trees, each with sums of 6
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// todo
// I need to find a node with value that equals to sum of left subtree and right subtree
function splitBinaryTree(tree) {
    let leftParams = {sum: 0, values: []}
    let rightParams = {sum: 0, values: []}

    // Math.abs of right sum - left sum => if we have a node.value = dff return it
    let leftResult = getSum(tree.left, leftParams);
    let rightResult = getSum(tree.right, rightParams);
    console.log(leftResult, rightParams)
    return -1;
}

function getSum(node, params = {sum: 0, values: []}) {
    if (!node) return params;
    params.sum += node.value;
    params.values.push(node.value)
    if (node.left) {
        getSum(node.left, params);
    }
    if (node.right) {
        getSum(node.right, params);
    }
    return params;
}

let tree = {
    value: 1,
    left: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 2,
            }
        },
        right: {
            value: -5,
        }
    },
    right: {
        value: -2,
        left: {
            value: 5,
        },
        right: {
            value: 2,
        }
    }
}
console.log(splitBinaryTree(tree));