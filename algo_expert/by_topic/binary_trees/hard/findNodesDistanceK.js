
/**
* You're given the root node of a Binary Tree, a target value of a
* node that's contained in the tree, and a positive integer k.
* Write a function that returns the values of all the nodes that are exactly
* distance k from the node with target value.
*
* The distance between two nodes is defined as the number of edges that must be
* traversed to go from one node to the other. For example, the distance between
* a node and its immediate left or right child is 1. The same holds
* in reverse: the distance between a node and its parent is 1. In a
* tree of three nodes where the root node has a left and right child, the left
* and right children are distance 2 from each other.
*
* Each BinaryTree node has an integer value, a
* left child node, and a right child node. Children
* nodes can either be BinaryTree nodes themselves or
* None / null.
*
* Note that all BinaryTree node values will be unique, and your
* function can return the output values in any order.
*
*     Sample Input
*     tree =   1
*            /   \
*           2     3
*         /   \     \
*        4     5     6
*                  /   \
*                 7     8
* target = 3
* k = 2
*
* Sample Output
* [2, 7, 8] * These values could be ordered differently.
*/


class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 *  time: O(V + N) Vertices + Nodes amount
 *  space: O(N) - N - number of nodes
 */
function findNodesDistanceK(tree, target, k) {
    let params = { height: 1, k, target, };
    let result = [];

    let leftData = dive(tree.left, {...params, nodesDistances: new Map()});
    let rightData = dive(tree.right, {...params, nodesDistances: new Map()});

    let withTargetBranch = rightData.has(target) ? rightData : leftData;
    let noTargetBranch = !rightData.has(target) ? rightData : leftData;

    let distanceToTarget = withTargetBranch.get(target);
    for (const [key, value] of noTargetBranch.entries()) {
        if (value + distanceToTarget === k) {
            result.push(key)
        }
    }

    for (const [key, value] of withTargetBranch.entries()) {
        if (value - distanceToTarget === k) {
            result.push(key)
        }
    }

    return result;
}

function dive(node, params) {
    if (!node) return params.nodesDistances;

    params.nodesDistances.set(node.value, params.height)
    if (node.left || node.right) {
        params.height += 1
        if (node.left) params.nodesDistances = dive(node.left, params)
        if (node.right) params.nodesDistances = dive(node.right, params)
    }

    return params.nodesDistances;
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
        }
    },
    right: {
        value: 3,
        right: {
            value: 6,
            left: {
                value: 7
            },
            right: {
                value: 8,
            }
        }
    }
}
console.log(findNodesDistanceK(tree, 3, 2)) // [2, 7, 8]