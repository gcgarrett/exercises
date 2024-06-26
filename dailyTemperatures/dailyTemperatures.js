'use strict';

/**
 * Function that takes an array of daily high temperatures and returns an array
 * where each element is the number of days you would have to wait for a
 * warmer high temperature. If there is no future day for which this is
 * possible 0 is returned for that day.
 * 
 * @param {Array} temperaturesArray The number array of daily high temperatures
 * @returns The number array of days to wait for a warmer high temperature
 */
function dailyTemperatures(temperaturesArray) {
    const numberOfDaysArray = [];

    // loops through all of the temperatures in the given array of daily high
    // temperatures and finds the index of the day which a higher daily high
    // temperature. the array is sliced to current index + 1 so we don't look
    // at days before the current one.
    temperaturesArray.forEach((currentTemperature, currentIndex, array) => {
        const higherTemperatureIndex = array.slice(
            currentIndex + 1
        ).findIndex((temperature) => {
            return temperature > currentTemperature;
        });

        // add 1 to the found index since the days are not zero-indexed. if
        // a higher temperature is not found, `findIndex` will return -1 so
        // adding 1 will give us the desired 0 value.
        numberOfDaysArray.push(higherTemperatureIndex + 1);
    });

    return numberOfDaysArray;
}

const testArrays = [
    [70, 70, 70, 75],
    [90, 80, 70, 60],
    [73, 74, 75, 71, 69, 72, 76, 73]
];

testArrays.forEach((testArray) => {
    console.log(`dailyTemperatures([${testArray.join(', ')}])`);
    console.log(`Answer: [${dailyTemperatures(testArray).join(', ')}]`);
});
