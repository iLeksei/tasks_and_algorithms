
    
//         Write a function that takes in a Binary Tree, transforms it into a Right
//         Sibling Tree, and returns its root.
//
//         A Right Sibling Tree is obtained by making every node in a Binary Tree have
//         its right property point to its right sibling instead of its
//         right child. A node's right sibling is the node immediately to its right on
//         the same level or None / null if there is no node
//         immediately to its right.
//
//         Note that once the transformation is complete, some nodes might no longer have
//         a node pointing to them. For example, in the sample output below, the node
//         with value 10 no longer has any inbound pointers and is
//         effectively unreachable.
//
//         The transformation should be done in place, meaning that the original data
//         structure should be mutated (no new structure should be created).
//
//         Each BinaryTree node has an integer value, a
//         left child node, and a right child node. Children
//         nodes can either be BinaryTree nodes themselves or
//         None / null.
//
//     Sample Input
//     tree = 1
//       /         \
//      2           3
//    /   \       /   \
//   4     5     6     7
//  / \     \   /     / \
// 8   9    10 11    12 13
//            /
//           14
//
//     Sample Output
//         1 // the root node with value 1
//       /
//      2-----------3
//    /           /
//   4-----5-----6-----7
//  /           /     /
// 8---9    10-11    12-13 // the node with value 10 no longer has a node pointing to it
//            /
//           14


// This is the class of the input root. Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * time: O(V * E) vertices * edges
 * space: O(V) vertices
 */
function rightSiblingTree(root) {
    // Write your code here.
    let siblings = new Map();
    siblings.set(0, [root])

    traverse(root, 0, siblings);
    for (const [key, value] of siblings.entries()) {
        let currentNode = null;
        for (let i = 0; i < value.length; i++) {
            currentNode = value[i];
            if (!currentNode) continue;
            if (!value[i + 1]) {
                currentNode.right = null;
            } else {
                currentNode.right = value[i + 1];
            }

        }
    }

    debugger;
    return root;
}

function traverse(node, depth = 0, siblings = new Map()) {
    if (!node) return siblings;

    if (!siblings.has(depth)) siblings.set(depth, []);
    let nextDepth = depth + 1;

    if (!siblings.has(nextDepth)) siblings.set(nextDepth, []);

    if (node.left && node.right) siblings.get(nextDepth).push(node.left, node.right);

    if (node.left && !node.right) siblings.get(nextDepth).push(node.left, null);

    if (!node.left && node.right) siblings.get(nextDepth).push(null, node.right);

    if (node.left) traverse(node.left, nextDepth, siblings);
    if (node.right) traverse(node.right, nextDepth, siblings);

    return siblings
}


let tree1 = {
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
            right: {
                value: 10,
            }
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 11,
                left: {
                    value: 14,
                }
            }
        },
        right: {
            value: 7,
            left: {
                value: 12,
            },
            right: {
                value: 13,
            }
        },

    }
};
console.log(JSON.stringify(rightSiblingTree(tree1)))