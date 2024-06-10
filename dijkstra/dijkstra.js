'use strict';

// JavaScript implementation of Dijkstra's algorithm found in "Grokking
// Algorithms" chapter 9. This is a solution for exercise 9.1a.

// The graph to run Dijkstra's algorithm on. In the book Aditya uses hashmaps
// to store the graph, which I have implemented here.
const graph = {
    'start': {
        'a': 5,
        'b': 2
    },
    'a': {
        'c': 4,
        'd': 2
    },
    'b': {
        'a': 8,
        'd': 7
    },
    'c': {
        'd': 6,
        'finish': 3
    },
    'd': {
        'finish': 1
    },
    'finish': {}
};

// The map of costs, initialized with values known from the 'start' node
const costs = {
    'a': 5,
    'b': 2,
    'c': Infinity,
    'd': Infinity,
    'finish': Infinity
};

// The map of node parents, initialized with values known from the 'start' node
const parents = {
    'a': 'start',
    'b': 'start'
};

// The set of processed nodes
const processed = new Set();

/*
 * Finds the unprocessed node with the lowest cost
 *
 * returns
 *   (String): The name of the node with the lowest cost or `null` if none
 *             found
 */
function findLowestCostNode() {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) {
        if (processed.has(node)) {
            continue;
        }

        const cost = costs[node];

        if (cost < lowestCost) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }

    return lowestCostNode;
}

// Find the first node with the lowest cost
let currentNode = findLowestCostNode();

// while there are still nodes to process
while (currentNode !== null) {
    // get the cost of the node
    const cost = costs[currentNode];
    // get the out-neighbors of the node
    const neighbors = graph[currentNode];

    // loop through out-neighbors to update their costs and parents
    for (let node in neighbors) {
        // neighbors value will be the cost to travel to that node from the
        // current node; add it to the cost of the current node to get the
        // total cost for the out-neighbor
        const newCost = cost + neighbors[node];

        // update cost and parent for out-neighbor if it's less than the
        // current cost for visiting that node (e.g. we have found a shorter
        // path)
        if (costs[node] > newCost) {
            costs[node] = newCost;
            parents[node] = currentNode;
        }
    }

    // add node to set of processed nodes
    processed.add(currentNode);
    // find next lowest cost node to process
    currentNode = findLowestCostNode();
}

// Build an array of the shortest path working backwards from the 'finish' node
let shortestPath = ['finish'];
currentNode = parents['finish'];

while (currentNode !== 'start') {
    shortestPath.unshift(currentNode);
    currentNode = parents[currentNode];
}

shortestPath.unshift('start');

console.log(`Shortest path is: ${shortestPath.join('->')}`);
console.log(`Shortest path weight: ${costs['finish']}`);

