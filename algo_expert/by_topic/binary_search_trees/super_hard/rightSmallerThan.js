
/**
* Write a function that takes in an array of integers and returns an array of
* the same length, where each element in the output array corresponds to the
* number of integers in the input array that are to the right of the relevant
* index and that are strictly smaller than the integer at that index.
*
* In other words, the value at output[i] represents the number of
* integers that are to the right of i and that are strictly smaller
* than input[i].
*
* Sample Input
*     array = [8, 5, 11, -1, 3, 4, 2]
*
* Sample Output
*     [5, 4, 4, 0, 1, 1, 0]
* * There are 5 integers smaller than 8 to the right of it.
* * There are 4 integers smaller than 5 to the right of it.
* * There are 4 integers smaller than 11 to the right of it.
* * Etc..
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.cache = {};
    }

    add(value) {
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
}

function rightSmallerThan(array) {
    let result = [];
    let tree = new BST(array[0]);
    for (let i = 1; i < array.length; i++) {
        tree.add(array[i]);
    }


    console.log(JSON.stringify(tree))
}

function traverse(node, arr = []) {

}


// let root = new BTS(8)
// root.add(11)
console.log(rightSmallerThan([8, 5, 11, -1, 3, 4, 2]))