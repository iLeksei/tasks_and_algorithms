/**
*     You're given a Node class that has a name and an
*     array of optional children nodes. When put together, nodes form
*     an acyclic tree-like structure.
*
*     Implement the breadthFirstSearch method on the
*     Node class, which takes in an empty array, traverses the tree
*     using the Breadth-first Search approach (specifically navigating the tree from
*     left to right), stores all of the nodes' names in the input array, and returns
*     it.
*
*     If you're unfamiliar with Breadth-first Search, we recommend watching the
*     Conceptual Overview section of this question's video explanation before
*     starting to code.
*
* Sample Input
* graph = A
*      /  |  \
*     B   C   D
*    / \     / \
*   E   F   G   H
*      / \   \
*     I   J   K
*
* Sample Output
* ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
* */

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array = []) {
        let queue = [this];
        while (queue.length > 0) {
            let node = queue.shift();
            if (node.children.length > 0) queue.push(...node.children);
            array.push(node.name);
        }
        return array;
    }
}

const graph = new Node('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');
console.log(graph.breadthFirstSearch()); // [A, B, C, D, E, F, G, H, I, J, K]