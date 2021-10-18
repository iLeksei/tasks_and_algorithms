
class BinaryTree {

    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.#addNode(this.root, newNode);
        }
    }

    #addNode(vertex, newNode) {
        if (newNode.data < vertex.data) {
            if (!vertex.left) {
                vertex.left = newNode;
            } else {
                this.#addNode(vertex.left, newNode);
            }
        } else {
            if (!vertex.right) {
                vertex.right = newNode;
            } else {
                this.#addNode(vertex.right, newNode);
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();
tree.add(6);
tree.add(3);
tree.add(5);
tree.add(7);
tree.add(9);

console.log(tree);

const invert_binary_tree = (tree = {}) => {
    if (!tree.root) { return tree; }

    function invert_nodes(vertex) {
        if (!vertex.left && !vertex.right) { return vertex; }
        const tmp = vertex.left;
        vertex.left = vertex.right;
        vertex.right = tmp;
    }

    return invert_nodes(tree.root);
}

invert_binary_tree(tree);

console.log(tree)