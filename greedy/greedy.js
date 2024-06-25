'use strict';

// Implements the greedy algorithm from chapter 10 of Grokking Algorithms in
// JavaScript. I wanted to try out the new Set functions that were recently
// added to the specification, like `intersection` and `difference` (both used
// by the algorithm).

// Set of states that we want our radio show to cover
let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
// Map of stations to states they cover
const stations = {
    'kone': new Set(['id', 'nv', 'ut']),
    'ktwo': new Set(['wa', 'id', 'mt']),
    'kthree': new Set(['or', 'nv', 'ca']),
    'kfour': new Set(['nv', 'ut']),
    'kfive': new Set(['ca', 'az'])
};
// Set of stations that cover the states we desire
const finalStations = new Set();

// while there are states we need to cover...
while (statesNeeded.size > 0) {
    // the station that covers the most additional states we need to cover
    let bestStation = null;
    // the additional states that the station covers
    let statesCovered = new Set();

    // loop through all stations
    for (const station in stations) {
        // get the intersection between the states we still haven't covered
        // and the states covered by this station; this will tell us which
        // additional states we can cover by adding this station
        const covered = statesNeeded.intersection(stations[station]);

        // if the number of additional states we could cover by adding this
        // station is greater than the current maximum, then use this station
        // instead (this is the implementation of the greedy algorithm, since
        // we are picking the station that gives us the most new states to
        // cover even if this means we pick more stations overall).
        if (covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered;
        }
    }

    // take the difference between the Set of states we need to cover and the
    // currently selected Set of states covered; this gives us the Set of
    // states we still need to cover
    statesNeeded = statesNeeded.difference(statesCovered);
    // add the station to the final stations Set
    finalStations.add(bestStation);
}

console.log('Final station list:', finalStations);
