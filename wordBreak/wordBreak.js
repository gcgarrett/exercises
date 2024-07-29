'use strict';

/**
 * Function that determines if a string can be segmented into a space-
 * separated sequence of one or more dictionary words.
 * 
 * @param {String} s   The string to test
 * @param {Array} dict The dictionary of words
 * @returns true if the string can be segmented, false otherwise
 */
function wordBreak(s, dict) {
    let results = false;

    // if the string is of length 0, then we have successfully segmented the
    // given string with the words in the dictionary
    if (s.length === 0) {
        return true;
    }

    // test if we can segment the given string with one or more words in the
    // dictionary
    dict.forEach((word) => {
        if (s.indexOf(word) === 0) {
            // if the string starts with the word, then take the substring
            // starting at the index of the matched word length and recursively
            // run the function on it; then logically or its result with the
            // results from other matched words, so that if one of recursively
            // called functions returns true, then the overall result will be
            // true
            results = results || wordBreak(s.slice(word.length), dict);
        }
    });

    return results;
}

const testValues = [
    ['leetcode', ['leet', 'code']],
    ['codeleet', ['leet', 'code']],
    ['catsandog', ['cat', 'cats', 'and', 'sand', 'dog']],
    ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
    ['a', ['aa', 'aaa']],
    ['a'.repeat(2), ['aa', 'aaa']],
    ['a'.repeat(3), ['aa', 'aaa']],
    ['a'.repeat(4), ['aa', 'aaa']],
    ['a'.repeat(5), ['aa', 'aaa']],
    ['a'.repeat(8), ['aa', 'aaa']],
    ['a'.repeat(10), ['aa', 'aaa']]
];

testValues.forEach((testValue) => {
    const [s, dict] = testValue;
    console.log(`wordBreak('${s}', ['${dict.join("', '")}'])`);
    console.log(wordBreak(s, dict) ? 'true' : 'false');
});
