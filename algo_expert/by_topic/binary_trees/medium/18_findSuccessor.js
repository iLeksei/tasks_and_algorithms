/**
    Write a function that takes in a Binary Tree (where nodes have an additional
    pointer to their parent node) as well as a node contained in that tree and
    returns the given node's successor.

    A node's successor is the next node to be visited (immediately after the given
    node) when traversing its tree using the in-order tree-traversal technique. A
    node has no successor if it's the last node to be visited in the in-order
    traversal.

    If a node has no successor, your function should return None /
    null.

    Each BinaryTree node has an integer value, a
    parent node, a left child node, and a
    right child node. Children nodes can either be
    BinaryTree nodes themselves or None / null.
    
    Sample Input
    tree =    1
            /   \
           2     3
         /   \ 
        4     5
       /       
      6  
    node = 5
    Sample Output: 1
    This tree's in-order traversal order is:
    6 -> 4 -> 2 -> 5 -> 1 -> 3
    1 comes immediately after 5.

    - The predecessor node is the largest node
    that is smaller than the root (current node)
    thus it is on the left branch of the Binary Search Tree,
    and the rightmost leaf (largest on the left branch).

    - On the other hand, the successor node is the smallest node
    that is bigger than the root/current
    thus it is on the right branch of the BST,
    and also on the leftmost leaf (smallest on the right branch).
 */


// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}


function findSuccessor(tree, node) {
    // Write your code here.
    const inOrderNodes = getInOrderNodes(tree);
    for (let i = 0; i < inOrderNodes.length; i++) {
        if (inOrderNodes[i].value === node.value) return inOrderNodes[i + 1];
    }
    return null;
}

function getInOrderNodes(node, inOrderNodes = []) {
    if (!node) return null;
    getInOrderNodes(node.left, inOrderNodes)
    inOrderNodes.push(node);
    getInOrderNodes(node.right, inOrderNodes)
    return inOrderNodes;
}

// todo to fix
function findSuccessor2(tree, node) {
    // Write your code here.
    if (node.right) {
        let successor = node.right;
        while (successor !== null) {
            successor = successor.left;
        }
        return successor;
    }

    let currentNode = node;
    while (
        currentNode.parent !== null &&
        currentNode.parent.right.value === currentNode.value
        ) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}
