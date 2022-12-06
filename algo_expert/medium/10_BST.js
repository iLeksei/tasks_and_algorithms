/**
    
    Write a BST class for a Binary Search Tree. The class should
    support:

    Inserting values with the insert method.
    Removing values with the remove method; this method should
        only remove the first instance of a given value.
    Searching for values with the contains method.

    Note that you can't remove values from a single-node tree. In other words,
    calling the remove method on a single-node tree should simply not
    do anything.

    Each BST node has an integer value, a
    left child node, and a right child node. A node is
    said to be a valid BST node if and only if it satisfies the BST
    property: its value is strictly greater than the values of every
    node to its left; its value is less than or equal to the values
    of every node to its right; and its children nodes are either valid
    BST nodes themselves or None / null.
    
   Sample Usage<
    // Assume the following BST has already been created:
         10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

// All operations below are performed sequentially.
insert(12):   10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /        /  \
     1        12  14

remove(10):   12
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /           \
     1            14

contains(15): true
*/


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        let node = this;
        while (node) {
            if (value < node.value) {
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = new BST(value)
                    break;
                }
            } else if (value >= node.value) {
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = new BST(value)
                    break;
                }
            }

        }
        return this;
    }

    contains(value) {
        // Write your code here.
        let node = this;
        while (node) {
            if (value === node.value) {
                return true;
            }
            if (value > node.value && node.right) {
                node = node.right;
            } else {
                node = node.left
            }
        }
        return false;
    }

    remove(value, node = this) {
        // Write your code here.
        // Do not edit the return statement of this method.
        if (node === null) { return this }

        if (node.right && value > node.value) {
            node.right = this.remove(value, node.right);
            return node;
        }

        if (node.left && value < node.value) {
            node.left = this.remove(value, node.left);
            return node;
        }

        if (!node.left && !node.right) {
            return null;
        }

        if (!node.left) {
            node.value = node.right.value;
            node.left = node.right.left;
            node.right = node.right.right;
            return node;
        }

        if (!node.right) {
            node.value = node.left.value;
            node.right = node.left.right;
            node.left = node.left.left;
            return node;
        }

        let successor = this._getMinNode(node.right);
        node.value = successor.value;
        node.right = this.remove(value, node.right);
        if (node) return node;

        return this;
    }

    _getMinNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}

// let bst10 = new BST(10);
// bst10.insert(5);
// bst10.insert(15);
// bst10.insert(12);
// bst10.insert(22);
//
// bst10.remove(15)

let bst5 = new BST(10);
bst5.insert(5)
bst5.insert(15);
bst5.insert(2);
bst5.insert(5);
bst5.insert(13);
bst5.insert(22);
bst5.insert(1);
bst5.insert(14);
bst5.insert(12);

bst5.remove(5)

console.log(JSON.stringify(bst5))

