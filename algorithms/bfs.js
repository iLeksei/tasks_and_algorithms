

let tree = {
    "10": {
        value: "10",
        left: "4",
        right: "17",
    },
    "4": {
        value: "4",
        left: "1",
        right: "9",
    },
    "17": {
        value: "17",
        left: "12",
        right: "18",
    },
    "1": {
        value: "1",
        left: null,
        right: null,
    },
    "9": {
        value: "9",
        left: null,
        right: null,
    },
    "12": {
        value: "12",
        left: null,
        right: null,
    },
    "18": {
        value: "18",
        left: null,
        right: null,
    },
};

function bfs(tree = {}, startNode = null, searchValue = null) {
    if (!tree || !searchValue || !startNode) { return null };

    let queue = [startNode];
    while(queue.length > 0) {
        let currNode = queue.shift();
        if  (currNode.value === searchValue) {
            return currNode
        } else {
            if  (tree[currNode.left]) { queue.push(tree[currNode.left]) }
            if  (tree[currNode.right]) { queue.push(tree[currNode.right]) }
        }
    }
    return null;
}

const result = bfs(tree, tree["10"], "18"); //should return [start, a, c, finish];
console.log(result)