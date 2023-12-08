/**
* You're given a Binary Search Tree (BST) that has at least 2 nodes and that
* only has nodes with unique values (no duplicate values). Exactly two nodes
* in the BST have had their values swapped, therefore breaking the BST. Write
* a function that returns a repaired version of the tree with all values on
* the correct nodes.
*
* Your function can mutate the original tree; you do not need to create a new
* one. Moreover, the shape of the returned tree should be exactly the same as
* that of the original input tree.
*
* Each BST node has an integer value, a
* left child node, and a right child node. A node is
* said to be a valid BST node if and only if it satisfies the BST
* property: its value is strictly greater than the values of
* every node to its left; its value is less than or equal to the
* values of every node to its right; and its children nodes are either valid
* BST nodes themselves or None / null.
*
* Sample Input
*     tree =    10
*             /     \
*            7       20
*          /   \    /  \
*        3     12  8   22
*       /           \
*     2              14
*
* Sample Output
*               10
*             /     \
*            7       20
*          /   \    /  \
*        3      8  12   22
*       /           \
*     2              14
*/



class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function repairBst(tree) {
    let params1 = {
        parentNode: tree,
        toSwap: null,
        min: -Infinity,
        max: tree.value,
    }
    let params2 = {
        parentNode: tree,
        toSwap: null,
        min: tree.value,
        max: Infinity,
    }
    params1 = traverse(tree.left, params1);
    params2 = traverse(tree.right, params2);

    if (params1.parentNode.right === params1.toSwap) {
        params1.parentNode.right = params2.toSwap;
    }

    if (params1.parentNode.left === params1.toSwap) {
        params1.parentNode.left = params2.toSwap;
    }

    if (params2.parentNode.right === params2.toSwap) {
        params2.parentNode.right = params1.toSwap;
    }

    if (params2.parentNode.left === params2.toSwap) {
        params2.parentNode.left = params1.toSwap;
    }

    swapChildren(params1.toSwap, params2.toSwap);
    // console.log(params1, params2);
    return tree;
}

function traverse(node, params) {
    if (!node) return params;
    if (node.value <= params.min || node.value >= params.max) {
        if (!params.toSwap) {
            params.toSwap = node;
            return params;
        }
    };
    if (node.left) params = traverse(node.left, {...params, parentNode: node});
    if (node.right) params = traverse(node.right, {...params, parentNode: node});
    return params;
}

function swapChildren(node1, node2) {
    let node1LeftRef = node1.left;
    let node1RightRef = node1.right;

    node1.left = node2.left;
    node1.right = node2.right;
    node2.left = node1LeftRef;
    node2.right = node1RightRef;
}

let tree1 = {
    value: 10,
    left: {
        value: 7,
        left: {
            value: 3,
            left: {
                value: 2,
            }
        },
        right: {
            value: 12
        }
    },
    right: {
        value: 20,
        left: {
            value: 8,
            right: {
                value: 14,
            }
        },
        right: {
            value: 22,
        }
    }
}
console.log(JSON.stringify(repairBst(tree1)));