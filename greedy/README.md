# greedy

Implements the greedy algorithm implementation of the set-covering problem from chapter 10 of Grokking Algorithms in JavaScript. I wanted to try out the new `Set` functions that were recently added to the specification, like `intersection` and `difference` (both used by the algorithm).

## requirements
This program requires NodeJS version 22, which is when the `intersection` and `difference` methods were added to `Set`.

## usage
* NodeJS: `node greedy.js`

## output
Logs solution to the set-covering problem as the set of stations that cover all of the required states
