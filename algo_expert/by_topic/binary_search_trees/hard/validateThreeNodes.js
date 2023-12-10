/**
* You're given three nodes that are contained in the same Binary Search Tree:
* nodeOne, nodeTwo, and nodeThree. Write
* a function that returns a boolean representing whether one of
* nodeOne or nodeThree is an ancestor of
* nodeTwo and the other node is a descendant of
* nodeTwo. For example, if your function determines that
* nodeOne is an ancestor of nodeTwo, then it needs to
* see if nodeThree is a descendant of nodeTwo. If your
* function determines that nodeThree is an ancestor, then it needs
* to see if nodeOne is a descendant.
*
* A descendant of a node N is defined as a node contained in
* the tree rooted at N. A node N is an ancestor of
* another node M if M is a descendant of
* N.
*
* It isn't guaranteed that nodeOne or nodeThree will
* be ancestors or descendants of nodeTwo, but it is guaranteed that
* all three nodes will be unique and will never be None /
* null. In other words, you'll be given valid input nodes.
*
* Each BST node has an integer value, a
* left child node, and a right child node. A node is
* said to be a valid BST node if and only if it satisfies the BST
* property: its value is strictly greater than the values of every
* node to its left; its value is less than or equal to the values
* of every node to its right; and its children nodes are either valid
* BST nodes themselves or None / null.
*
* Sample Input
* tree =    5
*        /     \
*       2       7
*     /   \   /   \
*    1     4 6     8
*   /     /
*  0     3
* * This tree won't actually be passed as an input; it's here to help you visualize the problem.
* nodeOne = 5 // The actual node with value 5.
* nodeTwo = 2 // The actual node with value 2.
* nodeThree = 3 // The actual node with value 3.
*
* Sample Output
* true // nodeOne is an ancestor of nodeTwo, and nodeThree is a descendant of nodeTwo.
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {

    let toValidate = [nodeOne.value, nodeTwo.value, nodeThree.value];
    let nodes1Result = traverse(nodeOne, [,,,], toValidate);
    let nodes2Result = traverse(nodeTwo, [,,,], toValidate);
    let nodes3Result = traverse(nodeThree, [,,,], toValidate);
    console.log(nodes1Result, nodes2Result, nodes3Result);

    let isNode1Ancestor = nodes1Result[0] === toValidate[0] &&
        nodes1Result[0] > nodes1Result[1] &&
        nodes1Result[0] > nodes1Result[2] &&
        nodes1Result[2] > nodes1Result[1] &&
        nodes1Result[2] === toValidate[2];

    let isNode3Ancestor = nodes3Result[0] === toValidate[2] &&
        nodes3Result[0] > nodes3Result[1] &&
        nodes3Result[0] > nodes3Result[2] &&
        nodes3Result[2] > nodes3Result[1] &&
        nodes3Result[2] === toValidate[0];

    return isNode1Ancestor || isNode3Ancestor;
}

function traverse(node, nodes = [,,,], toValidate = []) {
    if (!node) return nodes;

    if (toValidate.includes(node.value)) {
        nodes.shift();
        nodes.push(node.value)
    }
    if(node.left) traverse(node.left, nodes, toValidate);
    if(node.right) traverse(node.right, nodes, toValidate);

    return nodes;
}


let root = new BST(5);
let n2 = new BST(2);
let n7 = new BST(7);
root.left = n2;
root.right = n7;
let n1 = new BST(1);
let n4 = new BST(4);
n2.left = n1;
n2.right = n4;
let n6 = new BST(6);
let n8 = new BST(8);
n7.left = n6;
n7.right = n8;
n1.left = new BST(0);
n3 = new BST(3);
n4.left = n3;

console.log(validateThreeNodes(root, n2, n3));