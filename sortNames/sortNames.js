'use strict';

// Global, case insensitive regular expression that matches English vowels
const vowels = new RegExp('[aeiouy]', 'gi');

/**
 * Function to count the vowels in the given string.
 * 
 * @param {String} str The string to process
 * @returns The number of vowels found in the string
 */
function countVowels(str) {
    return [...str.matchAll(vowels)].length;
}

/**
 * Comparator function to sort strings. The string with the greater number of
 * vowels will come first. If the strings have the same number of vowels, then
 * the strings will be sorted alphabetically.
 * 
 * @param {String} a The first string to compare
 * @param {String} b The second string to compare
 * @returns A negative value if a has more vowels than b OR if a comes before b
 *          alphabetically; a positive value if b has more vowels than a OR if
 *          b comes before a alphabetically; 0 if a and b are the same string
 */
function nameCompareFn(a, b) {
    const aCount = countVowels(a);
    const bCount = countVowels(b);

    if (aCount === bCount) {
        // localeCompare will compare two strings and return values that can be
        // used in a comparator function
        return a.localeCompare(b);
    }
    
    return bCount - aCount;
}

/**
 * Function that takes an array of names and returns the names sorted by the
 * number of vowels in each name in descending order. If two names have the
 * same number of vowels, then they are sorted alphabetically.
 * 
 * @param {Array} names The array of names to sort
 * @returns The sorted array of names
 */
function sortNames(names) {
    return names.sort(nameCompareFn);
}

console.log('sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])');
console.log(`${sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])}`);
console.log('sortNames(["Edward", "Alphonse", "Roy", "Winry"])');
console.log(`${sortNames(["Edward", "Alphonse", "Roy", "Winry"])}`);
console.log('sortNames(["Death Valley", "Nick", "Earth", "Colorado River", "Arizona", "Quartzsite", "Zzyzx"])');
console.log(`${sortNames(["Death Valley", "Nick", "Earth", "Colorado River", "Arizona", "Quartzsite", "Zzyzx"])}`);
