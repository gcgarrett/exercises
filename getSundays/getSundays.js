function formatDate(date) {
    const yearStr = String(date.getFullYear()).padStart(4, '0');
    const monthStr = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(date.getDate()).padStart(2, '0');

    return `${yearStr}-${monthStr}-${dayStr}`;
}

function isSunday(date) {
    return date.getDay() === 0;
}

function findFirstSunday(year, month) {
    let i = 1;
    let date = new Date(year, month, i);

    while (i <= 7) {
        date.setDate(i);

        if (isSunday(date)) {
            return date;
        }

        i++;
    }
}

function getSundays(year, month) {
    // Date uses an index for months starting at 0
    month = month - 1;

    let result = [];
    let date = findFirstSunday(year, month);

    result.push(formatDate(date));

    let nextSundayDay = date.getDate() + 7;
    date.setDate(nextSundayDay);

    while (nextSundayDay === date.getDate()) {
        result.push(formatDate(date));
        nextSundayDay += 7;
        date.setDate(nextSundayDay);
    }

    return result;
}

testValues = [
    [2026, 9],
    [2026, 8],
    [2024, 2],
    [2020, 3],
    [2015, 12],
    [2011, 6],
    [2000, 8]
];

testValues.forEach((testValue) => {
    process.stdout.write(`getSundays(${testValue[0]}, ${testValue[1]})\n${JSON.stringify(getSundays(...testValue))}\n`);
});
