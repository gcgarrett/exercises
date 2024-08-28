'use strict';

function squares(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result = result + (i * i);
    }

    return result;
}

const testValues = [2, 5, 10, 12, 25, 100, 1000, 65535];

testValues.forEach((value) => {
    process.stdout.write(`squares(${value})\n${squares(value)}\n`);
});
