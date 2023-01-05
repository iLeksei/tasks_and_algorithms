/**
    The pre-order traversal of a Binary Tree is a traversal technique that starts
    at the tree's root node and visits nodes in the following order:

    Current node
    Left subtree
    Right subtree

    Given a non-empty array of integers representing the pre-order traversal of a
    Binary Search Tree (BST), write a function that creates the relevant BST and
    returns its root node.

    The input array will contain the values of BST nodes in the order in which
    these nodes would be visited with a pre-order traversal.

    Each BST node has an integer value, a
    left child node, and a right child node. A node is
    said to be a valid BST node if and only if it satisfies the BST
    property: its value is strictly greater than the values of every
    node to its left; its value is less than or equal to the values
    of every node to its right; and its children nodes are either valid
    BST nodes themselves or None / null.

    Sample Input
    preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

    Sample Output
            10
          /    \
         4      17
       /   \      \
      2     5     19
     /           /
    1           18
*/






// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


/**
 * @values - is shorter name than preOrderTraversalValues
 * @bstInfo - object, because we need to pass the same "visited" property
 */
function reconstructBst(values, bstInfo = { visited: 0, }, min = -Infinity, max = Infinity) {
    // Write your code here.
    if (bstInfo.visited === values.length) return null;
    if (values[bstInfo.visited] < min || values[bstInfo.visited] >= max) return null;
    let node = new BST(values[bstInfo.visited])
    bstInfo.visited++;
    node.left = reconstructBst(values, bstInfo, min, node.value);
    node.right = reconstructBst(values, bstInfo, node.value, max);
    return node;
}


console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]))