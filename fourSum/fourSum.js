'use strict';

/**
 * Generic solution that returns all unique combitions for the given number of
 * integers to sum that match the target sum. With this you can do quintuplets,
 * quadruplets, triplets, etc. Returns an array of arrays, where each sub-array
 * is of length of the number of integers to sum.
 * 
 * @param {Array} integers     The array of integers
 * @param {Number} sum         The target sum
 * @param {Number} numberToSum The number of integers to sum
 * @returns An array of all unique combinations
 */
function sumHelper(integers, sum, numberToSum) {
    if (numberToSum < 1) {
        throw new Error(`Invalid number of integers to sum: ${numberToSum}`);
    }

    if (!Number.isInteger(sum)) {
        throw new Error('Target sum must be an integer');
    }

    integers.forEach((i) => {
        if (!Number.isInteger(i)) {
            throw new Error('Invalid number found in integers array');
        }
    });

    let result = [];
    let integer;

    // loop through the array of integers until the index is greater than or
    // equal to the length of the array minus the number of integers to sum
    // minus 1. e.g. if the array length is 7 and the number of integers to
    // sum is 4, then we want to stop the loop when there are less than 4
    // numbers left to process in the array
    for (let i = 0; i < (integers.length - (numberToSum - 1)); i++) {
        integer = integers[i];

        // if the number of integers to sum is greater than one, run this
        // function recursively on the remainder of the array. if the number
        // of integers to sum is 1, then we return all integers that are equal
        // to the sum
        if (numberToSum > 1) {
            let subResult = sumHelper(integers.slice(i + 1), sum - integer, numberToSum - 1);

            if (subResult.length > 0) {
                // map the sub-results to add the integer to the front, then
                // sort them
                subResult = subResult.map((r) => {
                    r = [integer, ...r];

                    // the default compare function subtracts the two integers.
                    // this results in arrays sorted as [-1, -2, 1, 2], which
                    // is not what we want
                    return r.sort((a, b) => {
                        return (a < b) ? -1 : (a > b) ? 1 : 0;
                    });
                });

                // merge the sub-results with the current results 
                result = result.concat(subResult);
            }
        }
        else if (integer === sum) {
            result.push([integer]);
        }
    }

    return result;
}

/**
 * Takes an array of integers and a target sum and returns all unique
 * quadruplets `[a, b, c, d]` in the array such that `a + b + c + d = target`.
 * If there are no possible combinations then an empty array is returned.
 * 
 * @param {Array} integers The array of integers
 * @param {Number} sum     The target sum
 * @returns An array of all unique quadruplets
 */
function fourSum(integers, sum) {
    return sumHelper(integers, sum, 4);
}

console.log('fourSum([1, 0, -1, 0, -2, 2], 0)');
console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));
console.log('fourSum([], 0)');
console.log(JSON.stringify(fourSum([], 0)));
console.log('fourSum([13, -13], 0)');
console.log(JSON.stringify(fourSum([13, -13], 0)));
console.log('fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)');
console.log(JSON.stringify(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)));
console.log('fourSum([1, 2, 3, 4], 10)');
console.log(JSON.stringify(fourSum([1, 2, 3, 4], 10)));
