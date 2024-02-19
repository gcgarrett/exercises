'use strict';

/*
 * Helper function to determine if the given words have any letters in common.
 * Returns `true` if they do have lettes in common, `false` otherwise.
 * 
 * Note: when support for the `Set.prototype.union` function is added to
 *       node.js this function can be replaced by it
 */
function letterUnion(wordA: string, wordB: string): boolean {
    // convert words into sets of letters, to remove duplicates
    let letterSetA = new Set(wordA.split(''));
    let letterSetB = new Set(wordB.split(''));
    let result = false;

    // if letterSetB has more non-duplicate letters than letterSetA swap the
    // values of the two variables
    if (letterSetB.size > letterSetA.size) {
        let temp = letterSetA;
        letterSetA = letterSetB;
        letterSetB = temp;
    }

    // iterate over all of the letters in letterSetA to check if they also
    // exist in letterSetB
    letterSetA.forEach((letterA) => {
        if (letterSetB.has(letterA)) {
            result = true;
        }
    });

    return result;
}

/*
 * Helper function to compare two words. If the given words do not have any
 * letters in common, then return the product of their lengths.
 */
function wordLengthProductHelper(wordA: string, wordB: string): number {
    if (letterUnion(wordA, wordB)) {
        return 0;
    }

    return wordA.length * wordB.length;
}

/*
 * Function to return the maximum word length product for the given string
 * array. If no pair of words in the array have all unique letters then 0 is
 * returned.
 */
function wordLengthProduct(wordArray: string[]): number {
    let maxProduct = 0;
    // get the first word from the array; if the given array is empty then set
    // the word to be an empty string instead of undefined
    let wordA = wordArray.shift() ?? '';

    // while wordA is not empty and the remainder of the array is not empty
    // compare wordA to the other words in the array
    while ((wordA !== '') && (wordArray.length > 0)) {
        wordArray.forEach((wordB) => {
            const product = wordLengthProductHelper(wordA, wordB);

            // if the calculated word length product is greater than the
            // current maximum product, set the maximum product to it
            if (product > maxProduct) {
                maxProduct = product;
            }
        });

        // get the next word in the array to compare to the remainder of the
        // array
        wordA = wordArray.shift() ?? '';
    }

    return maxProduct;
}

// test cases from the newsletter
console.log(wordLengthProduct(["fish","fear","boo","egg","cake","abcdef"]));
console.log(wordLengthProduct(["a","aa","aaa","aaaa"]));
