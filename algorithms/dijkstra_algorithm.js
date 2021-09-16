
const graph = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
}

function findLowestNode(costs, processed = []) {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
}

function use_dijkstra(graph) {
    // initialize first costs for node A {finish: Infinity, A: 5, B: 2}
    const costs = {finish: Infinity, ...graph.start};

    // object with associated values of childNode and his parentNode
    const parents = {finish: null};

    // set parent to start's children: { A: 'start', B: 'start', finish: null}
    for (let child in graph.start) {
        parents[child] = 'start';
    }

    // track nodes that have already been visited
    const processed = [];

    // pick the node with lowest price
    let node = findLowestNode(costs, processed);


    while (node) {
        let cost = costs[node]; 		// cost of current node
        let children = graph[node]; // children of current node
        for (let n in children) {		// loop of all children of current node
            let newCost = cost + children[n];
            if (!costs[n] || costs[n] > newCost) {          // if we do not have a current childNode, we set his cost and his parent
                costs[n] = newCost;
                parents[n] = node;
            }

        }
        processed.push(node);
        node = findLowestNode(costs, processed); // after 1 cycle: { A: 5, B: 2, D: 9 }, visites: [ B ] -> next cheapest node is A, because we exclude visited node B
        //
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.finish,
        path: optimalPath
    };

    return results;
}

let result = use_dijkstra(graph);
console.log(result);
