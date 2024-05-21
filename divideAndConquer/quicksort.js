'use strict';

/*
 * quicksort implementation that picks a random pivot value and recursively
 * sorts all values less than or equal to it and all values greater than it
 * and finally concatenates those values together.
 * 
 * parameters
 *   a (Array): The array of numbers to sort
 * 
 * returns
 *   (Array):   The sorted array
 */
function quicksort(a) {
    // base case, return arrays of length 0 or 1 as they are already sorted
    if (a.length < 2) {
        return a;
    }

    // pick a random pivot index
    const pivotIndex = Math.floor(Math.random() * a.length);
    // remove pivot value from array
    const pivot = a.splice(pivotIndex, 1);
    // initialize less than and greater than arrays
    let lessThan = [];
    let greaterThan = [];

    a.forEach((val) => {
        // if value is less than or equal to the pivot value, append it to the
        // less than array
        if (val <= pivot[0]) {
            lessThan.push(val);
        }
        // else append the value to the greater than array
        else {
            greaterThan.push(val);
        }
    });

    // return an array of the sorted values less than or equal to the pivot,
    // the pivot value, and the sorted values greater than the pivot
    return [].concat(quicksort(lessThan), pivot, quicksort(greaterThan));
}

console.log(`Quicksort of []: ${JSON.stringify(quicksort([]))}`);
console.log(`Quicksort of [20]: ${JSON.stringify(quicksort([20]))}`);
console.log(`Quicksort of [1,7]: ${JSON.stringify(quicksort([1,7]))}`);
console.log(`Quicksort of [33,15,10]: ${JSON.stringify(quicksort([33,15,10]))}`);
console.log(`Quicksort of [33,10,15,7]: ${JSON.stringify(quicksort([33,10,15,7]))}`);
console.log(`Quicksort of [3,5,2,1,4]: ${JSON.stringify(quicksort([3,5,2,1,4]))}`);

let bigArray = [];

for (let i = 0; i < 1000; i++) {
    const val = Math.floor(Math.random() * 1000);
    bigArray.push(val);
}

console.log(`Quicksort of big array: ${JSON.stringify(quicksort(bigArray))}`);
