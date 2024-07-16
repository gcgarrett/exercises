'use strict';

/**
 * Function that takes a number array and returns the length of the longest
 * increasing subsequence.
 * 
 * @param {Array} nums The array of numbers
 * @returns The length of the longest increasing subsequence
 */
function increasingSubsequence(nums) {
    let longestSubsequence = 0;

    // if the array is empty, return 0
    if (nums.length === 0) {
        return longestSubsequence;
    }

    let currentSubsequence = 1;

    // loop through the array, starting at index 1 to compare it to the
    // previous index value and test if the value has increased
    for (let i = 1; i < nums.length; i++) {
        // test if the value has increased. if it has, increase the length
        // of the current subsequence. if not, then test if the current
        // subsequence length is greater than the longest found subsequence
        // length; if it is, then this is the new longest subsequence length
        if (nums[i] > nums[i - 1]) {
            currentSubsequence++;
        }
        else {
            if (currentSubsequence > longestSubsequence) {
                longestSubsequence = currentSubsequence;
            }

            // reset current subsequence length to 1
            currentSubsequence = 1;
        }
    }

    // check if the current subsequence length is greater than the longest
    // found subsequence; handles the case where the longest subsequence ends
    // at the end of the input array
    if (currentSubsequence > longestSubsequence) {
        longestSubsequence = currentSubsequence;
    }

    return longestSubsequence;
}

const testArrays = [
    [],
    [1],
    [1, 1],
    [1, 2, 3, 4, 5],
    [10, 9, 2, 3, 7, 101, 18],
    [4, 4, 4, 4, 3],
    [9, 8, 7, 4, 5, 6],
    [10, 12, 14, 7, 8, 9, 10, 1, 2],
    [99, 98, 97, 96, 95, 94, 93, 92, 91]
];

testArrays.forEach((testArray) => {
    console.log(`increasingSubsequence([${testArray.join(', ')}])`);
    console.log(increasingSubsequence(testArray));
});
