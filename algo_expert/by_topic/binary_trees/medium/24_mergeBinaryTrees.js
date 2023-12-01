/**
    Given two binary trees, merge them and return the resulting tree.
    If two nodes overlap during the merger then sum the values, otherwise use the existing node.

    Note that your solution can either mutate the existing trees or return a
    new tree.

    Sample Input:
        tree1 =   1
                /   \
               3     2
             /   \
            7     4

        tree2 =   1
                /   \
               5     9
             /      / \
            2      7   6

        Sample Output
        output =  2
                /   \
              8      11
            /  \    /  \
          9     4  7    6
*/



class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function mergeBinaryTrees(tree1, tree2) {
    if (!tree1 && !tree2) return null;
    let node = new BinaryTree(tree1.value + tree2.value)
    node.left = mergeBinaryTrees(tree1.left, tree2.left)
    node.right = mergeBinaryTrees(tree1.right, tree2.right)
    return node;
}

let tree1 = {
    value: 1,
    left: {
        value: 2,
    },
    right: {
        value: 3,
    }
}

let tree2 = {
    value: 4,
    left: {
        value: 5,
    },
    right: {
        value: 6,
    }
}
console.log(mergeBinaryTrees(tree1, tree2)); //