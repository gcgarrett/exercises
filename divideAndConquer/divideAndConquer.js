'use strict';

// Solutions to the exercises from chapter 4 of Grokking Algorithms

/*
 * 4.1 - Write out the code for the earlier `sum` function recursive method to
 * sum the number in the given list.
 * 
 * parameters
 *   numberList (Array): The list of numbers to sum
 * 
 * returns
 *   (Number):           The sum of the numbers in the list
 */
function sum(numberList) {
    if (numberList.length === 0) {
        return 0;
    }
    else {
        return numberList.shift() + sum(numberList);
    }
}

console.log(`Sum of [2,4,6]: ${sum([2,4,6])}`);
console.log(`Sum of [3,6,9]: ${sum([3,6,9])}`);
console.log(`Sum of [13,27,55]: ${sum([13,27,55])}`);
console.log(`Sum of [3]: ${sum([3])}`);
console.log(`Sum of []: ${sum([])}`);

/*
 * 4.2 - Write a recursive function to count the number of items in a list.
 * recursive method to count the items in the given list.
 *
 * parameters
 *   itemList (Array): The list of items to count
 *
 * returns
 *   (Number):         The count of items in the list
 */
function count(itemList) {
    if (itemList.length === 0) {
        return 0;
    }
    else {
        return 1 + count(itemList.slice(1));
    }
}

console.log(`Count of [2,4,6]: ${count([2,4,6])}`);
console.log(`Count of [3,6,9,12,15,18,21]: ${count([3,6,9,12,15,18,21])}`)
console.log(`Count of ["h","e","l","l","o"," ","w","o","r","l","d"]: ${count(["h","e","l","l","o"," ","w","o","r","l","d"])}`)
console.log(`Count of []: ${count([])}`)

/*
 * 4.3 - Write a recursive function to find the maximum number in a list.
 * recursive method to find the maximum number in the given list.
 *
 * parameters
 *   numberList (Array): The list of numbers to process
 *
 * returns
 *   (Number|null):      The maximum number or null if given an empty list
 */
function max(numberList) {
    if (numberList.length === 0) {
        return null;
    }

    let number = numberList.shift();
    let subMax = max(numberList) ?? Number.NEGATIVE_INFINITY;

    return (number > subMax) ? number : subMax;
}

console.log(`Max of [2,4,6]: ${max([2,4,6])}`)
console.log(`Max of [3,9,6]: ${max([3,9,6])}`)
console.log(`Max of [55,27,13]: ${max([55,27,13])}`)
console.log(`Max of [17,2]: ${max([17,2])}`)
console.log(`Max of [3]: ${max([3])}`)
console.log(`Max of []: ${max([])}`)
