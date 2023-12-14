/**
* You're given a Node class that has a name and an
* array of optional children nodes. When put together, nodes form
* an acyclic tree-like structure.

* Implement the depthFirstSearch method on the
* Node class, which takes in an empty array, traverses the tree
* using the Depth-first Search approach (specifically navigating the tree from
* left to right), stores all of the nodes' names in the input array, and returns
* it.

* If you're unfamiliar with Depth-first Search, we recommend watching the
* Conceptual Overview section of this question's video explanation before
* starting to code.
*/

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array = [], node = this) {
        array.push(node.name)
        for (let child of node.children) {
            this.depthFirstSearch(array, child)
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
console.log(graph.depthFirstSearch([]));