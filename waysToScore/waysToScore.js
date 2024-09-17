'use strict';

function waysToScorePoints(totalPoints, possiblePoints) {
    if (totalPoints < 0 || possiblePoints.length == 0) {
        return 0;
    }
    else if (totalPoints === 0) {
        return 1;
    }

    const [currentPoints] = possiblePoints;

    return waysToScorePoints(totalPoints - currentPoints, possiblePoints) + 
                waysToScorePoints(totalPoints, possiblePoints.slice(1));
}

function waysToScore(totalPoints) {
    return waysToScorePoints(totalPoints, [6, 3, 2]);
}

const testValues = [5, 12, 6, 11, 59, 24];

testValues.forEach((testValue) => {
    process.stdout.write(`waysToScore(${testValue})\n${waysToScore(testValue)}\n`);
});
