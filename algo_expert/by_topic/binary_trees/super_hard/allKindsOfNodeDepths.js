
/**
*         The distance between a node in a Binary Tree and the tree's root is called the
*         node's depth.
*
*         Write a function that takes in a Binary Tree and returns the sum of all of
*         its subtrees' nodes' depths.
*
*         Each BinaryTree node has an integer value, a
*         left child node, and a right child node. Children
*         nodes can either be BinaryTree nodes themselves or
*         None / null.
*
*     Sample Input
*     tree = 1
*        /     \
*       2       3
*     /   \   /   \
*    4     5 6     7
*  /   \
* 8     9
*
*     Sample Output
*     26
* * The sum of the root tree's node depths is 16.
*       => (1 + 1) + (2 + 2 + 2 + 2) + (3 + 3) => (2 + 3) + (4 + 5 + 6 + 7) + (8 + 9)
* * The sum of the tree rooted at 2's node depths is 6.
*       => (1 + 1) + (2 + 2) => (4 + 5) + (8 + 9)
* * The sum of the tree rooted at 3's node depths is 2.
*       => (1 + 1) => (6 + 7)
* * The sum of the tree rooted at 4's node depths is 2.
*       => (1 + 1) => (8 + 9)
* * Summing all of these sums yields 26.
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function allKindsOfNodeDepths(root) {
    let leftResult = dive(root.left) + 1;
    let rightResult = dive(root.right) + 1;

    return leftResult + rightResult;
}

function dive(node, depth = 0) {
    if (!node) return depth;

    let leftDepth = dive(node.left, depth + 1);
    let rightDepth = dive(node.right, depth + 1);

    return leftDepth + rightDepth;
}

let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: {
                value: 8,
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
        },
        right: {
            value: 7,
        },

    }
}

console.log(allKindsOfNodeDepths(tree))//