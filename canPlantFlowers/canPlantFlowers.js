'use strict';

/**
 * Function to test if we can plant a flower at the space at the given index.
 * We can plant a flower in the space if:
 *   - The space is empty
 *   - The surrounding spaces are empty
 * If an adjacent space is out of bounds, then we don't need to check if it has
 * a flower because it can't have one!
 * 
 * @param {Int8Array} flowers The line of planted flowers
 * @param {Number} index      The index of the space to check if it is
 *                            available
 * @returns `true` if the space is available, `false` otherwise
 */
function spaceAvailable(flowers, index) {
    if (!flowers[index]) {
        const leftIndex = index - 1;
        const rightIndex = index + 1;
        let leftEmpty = true;
        let rightEmpty = true;

        // Test if the space to the left is not out of bounds and is
        // occupied by a flower
        if ((leftIndex >= 0) && flowers[leftIndex]) {
            leftEmpty = false;
        }

        // Test if the space to the right is not out of bounds and is
        // occupied by a flower
        if (rightIndex < flowers.length && flowers[rightIndex]) {
            rightEmpty = false;
        }

        // Return true if the space to the left and right are both empty
        return leftEmpty && rightEmpty;
    }

    return false;
}

/**
 * Function to find the first available space to plant a flower.
 * 
 * @param {Int8Array} flowers The line of planted flowers
 * @returns The index of the first available space to plant a flower or -1 if
 *          there are not available spaces
 */
function findNextSpace(flowers) {
    let plantIndex = flowers.findIndex((_, index) => {
        return spaceAvailable(flowers, index);
    });

    return plantIndex;
}

/**
 * Function that takes an array of flowers planted in a line, where a flower is
 * represented by a 1 and an empty space by a 0, and attempts to plant a new
 * flower in the first available space. A flower can be planted in a space if
 * the adjacent spaces are empty. If there are no available spaces to plant the
 * flower an error is thrown.
 * 
 * @param {Int8Array} flowers The line of planted flowers
 * @returns The updated line of flowers with the newly planted flower
 * @throws An error with the message "No room to plant flower"
 */
function plantFlower(flowers) {
    // Find the next available space to plant a flower
    const plantIndex = findNextSpace(flowers);

    if (plantIndex > -1) {
        // If an available space was found, plant a flower there
        flowers[plantIndex] = 1;
    }
    else {
        // If not available space was found, throw an error
        throw new Error('No room to plant flower');
    }

    return flowers;
}

/**
 * Function that takes an initial line of planted flowers and the number of
 * additional flowers to plant. Returns true if all flowers could be planted
 * and false if they could not.
 * 
 * @param {Int8Array} flowers      The line of planted flowers
 * @param {Number} additionalCount The number of additional flowers to plant
 * @returns `true` if all flowers could be planted, `false` otherwise
 */
function canPlantFlowers(flowers, additionalCount) {
    try {
        // Try to plant all of the additional flowers we want to plant
        while (additionalCount) {
            plantFlower(flowers);
            additionalCount--;
        }
    }
    catch (error) {
        // If there is no more available space, return false
        return false;
    }

    // If we can plant all of the additional flowers, return true
    return true;
}

const testArrays = [
    [[1, 0, 0, 0, 1], 1],
    [[1, 0, 0, 0, 1], 2],
    [[0, 0, 0, 0, 0], 3],
    [[1, 0, 1, 0, 1], 1],
    [[0], 1],
    [[1], 1],
    [[0, 0], 1],
    [[0, 1], 1],
    [[1, 0], 1],
    [[0, 0], 2],
    [[0, 0, 0], 1],
    [[0, 0, 0], 2],
    [[0, 0, 1], 1],
    [[0, 1, 0], 1],
    [[1, 0, 0], 1],
    [[], 0],
    [[1, 0, 0, 0, 0, 0, 0, 0, 1], 3]
];

testArrays.forEach((testArray) => {
    const [flowersArray, additionalCount] = testArray;
    console.log(`canPlantFlowers([${flowersArray.join(', ')}], ${additionalCount})`);
    console.log(canPlantFlowers(flowersArray, additionalCount));
});
