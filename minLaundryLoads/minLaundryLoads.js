'use strict';

/**
 * Generates a string that represents the color and fabric type for a clothing
 * item. The string is in the format `{color}-{type}`, where type is `delicate`
 * if the fabric type is delicate or `mixed` if the fabric type is either
 * normal or heavy.
 * 
 * @param {Array} clothingItem Array of the clothing color and fabric type
 * @returns A String representing the item key
 */
function generateItemKey(clothingItem) {
    const [color, type] = clothingItem;

    if (type === 'delicate') {
        return `${color}-delicate`;
    }
    else {
        return `${color}-mixed`;
    }
}

/**
 * Method to determine the minimum number of laundry loads required to wash
 * all of the given clothing items.
 * 
 * @param {Array} laundryList Array of clothing items
 * @returns The minimum Number of laundry loads required to wash all of the
 *          clothing
 */
function minLaundryLoads(laundryList) {
    const loads = new Set();

    laundryList.forEach((clothingItem) => {
        const itemKey = generateItemKey(clothingItem);
        loads.add(itemKey);
    });

    return loads.size;
}

const testValues = [
    [
        ['red', 'normal'],
        ['blue', 'normal'],
        ['red', 'delicate'],
        ['blue', 'heavy']
    ],
    [
        ['white', 'normal'],
        ['white', 'delicate'],
        ['white', 'normal'],
        ['white', 'heavy']
    ],
    [
        ['purple', 'delicate'],
        ['purple', 'heavy'],
        ['pink', 'heavy'],
        ['pink', 'delicate'],
        ['tan', 'delicate'],
        ['tan', 'heavy']
    ],
    [
        ['black', 'normal'],
        ['black', 'heavy'],
        ['black', 'heavy'],
        ['black', 'normal'],
        ['black', 'normal'],
        ['black', 'heavy']
    ]
];

testValues.forEach((testValue) => {
    process.stdout.write(`minLaundryLoads(${JSON.stringify(testValue)})\n${minLaundryLoads(testValue)}\n`);
});
