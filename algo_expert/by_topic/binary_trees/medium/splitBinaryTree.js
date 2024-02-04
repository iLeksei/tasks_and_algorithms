
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
*     6    -4  5    2
*   /
*  2
*
* Sample Output:
*   remove edge(1 -> -2) therefore we will receive two trees with sum of 7:
*   1) 2 -> 5
*   2) 3 -> 6 -> 2 -> -4
*
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// for each edge we should have sum of right and left sub-trees
// HashMap like
// 1  { 3, -2 }
// 3  { 6 -4 }
// 6  { 2 }
// -2 { 5, 2 }
function splitBinaryTree(tree) {
    let subTreesSums = new Map();
    let leftSum = getLeafSum(tree.left, 0,subTreesSums);
    let rightSum = getLeafSum(tree.right, 0, subTreesSums);
    console.log(leftSum, rightSum, subTreesSums);
    let result1 = traverse(tree.left, tree, leftSum, rightSum + tree.value);
    let result2 = traverse(tree.right, tree, rightSum, leftSum + tree.value);
    console.log(result1, result2)
}

function getLeafSum(node, sum = 0, subTreeSums = new Map()) {
    if (!node) return 0;
    sum += node.value;
    if (node.left) {
        sum = getLeafSum(node.left, sum);
        // subTreeSums.set(node.left.value, sum)
    }

    if (node.right) {
        sum = getLeafSum(node.right, sum);
    }
    subTreeSums.set(node.value, sum)
    return sum;
}

function traverse(node, ancestor, subtreeSum_1, subtreeSum_2) {
    let afterEdgeRemovalSubTreeSum = subtreeSum_1 - node.value - ancestor.value;
    if (afterEdgeRemovalSubTreeSum === subtreeSum_2) {
        return afterEdgeRemovalSubTreeSum;
    };

    if (node.left) {
        return traverse(node.left, node, subtreeSum_1, subtreeSum_2 + ancestor.value);
    }

    if (node.right) {
        return traverse(node.right, node, subtreeSum_1, subtreeSum_2 + ancestor.value);
    }
    return null;
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
            value: -4,
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