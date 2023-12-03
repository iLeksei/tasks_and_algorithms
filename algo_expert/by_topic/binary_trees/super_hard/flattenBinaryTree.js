
/**
*     Write a function that takes in a Binary Tree, flattens it, and returns its
*     leftmost node.
*
*     A flattened Binary Tree is a structure that's nearly identical to a Doubly
*     Linked List (except that nodes have left and
*     right pointers instead of prev and
*     next pointers), where nodes follow the original tree's
*     left-to-right order.
*
*     Note that if the input Binary Tree happens to be a valid Binary Search Tree,
*     the nodes in the flattened tree will be sorted.
*
*     The flattening should be done in place, meaning that the original data
*     structure should be mutated (no new structure should be created).
*
*     Each BinaryTree node has an integer value, a
*     left child node, and a right child node. Children
*     nodes can either be BinaryTree nodes themselves or
*     None / null.
*
* Sample Input
* tree =  1
*      /     \
*     2       3
*   /   \   /
*  4     5 6
*       / \
*      7   8
*
* Sample Output
* 4 <-> 2 <-> 7 <-> 5 <-> 8 <-> 1 <-> 6 <-> 3 * the leftmost node with value 4
*
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 *  time: O(V * E) V - vertices, E - edges
 *  space: O(N) - nodes
 */
function flattenBinaryTree(node) {

    let nodes = traverse(node, []);
    console.log(nodes)

    let i = nodes.length - 1;
    let prevNode = null;
    while (i >= 0) {
        let newListElement = new BinaryTree(nodes[i]);
        newListElement.right = prevNode;
        if (prevNode !== null) {
            prevNode.left = newListElement;
        }
        prevNode = newListElement;
        i--;
    }

    return prevNode;
}

function traverse(node, result = []) {
    if (!node) return null

    if (node.left) traverse(node.left, result);
    result.push(node.value);
    if (node.right) traverse(node.right, result);
    return result;
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
            left: {
                value: 7,
            },
            right: {
                value: 8,
            }
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
        }
    }
}
console.log(flattenBinaryTree(tree))

// console.log(JSON.stringify(linkedListConstruct(tree)));