/**
* Write a function that takes in a Binary Tree and returns its max path sum.
*
* A path is a collection of connected nodes in a tree, where no node is
* connected to more than two other nodes; a path sum is the sum of the values of
* the nodes in a particular path.
*
* Each BinaryTree node has an integer value, a
* left child node, and a right child node. Children
* nodes can either be BinaryTree nodes themselves or
* None / null.
*
*     Sample Input
*     tree =   1
*           /     \
*          2       3
*        /   \   /   \
*       4     5 6     7
*
*     Sample Output
*     18 => 5 + 2 + 1 + 3 + 7
*/


function maxPathSum(tree) {

    let leftSum = dive(tree.left);
    let rightSum = dive(tree.right);

    return tree.value + leftSum + rightSum;
}

function dive(node, maxSum = 0) {
    if (!node) return maxSum;

    let leftSum = dive(node.left, maxSum);
    let rightSum = dive(node.right, maxSum);

    let sum = Math.max(node.value + leftSum, node.value + rightSum);
    return sum + maxSum;
}


let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: {
                value: 10,
            },
            right: {
                value: 9,
            }
        },
        right: {
            value: 5,
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 12,
            },
            right: {
                value: 13,
            }
        },
        right: {
            value: 7,
        },

    }
}
/**
 *     tree =   1
 *           /     \
 *          2       3
 *        /   \   /   \
 *       4     5 6     7
 *      / \     / \
 *     10  9   12  13
 */
console.log(maxPathSum(tree)) // 10 + 4 + 2 + 1 + 3 + 6 + 13 === 39