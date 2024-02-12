'use strict';

/*
 * Generator function to generate sequential numbers in the given range
 */
function* generator(min: number, max: number): Generator<number, null, void> {
    let n = min;

    while (n < max) {
        yield n++;
    }

    return null;
}

/*
 * Function to return a generator function to generate a range of numbers. If
 * the given min value is more than the given max value, then the values are
 * swapped. Once the values in the range have been generated, the value `null`
 * is returned.
 */
function fromTo(min: number, max: number): () => number | null {
    if (min > max) {
        console.warn(`Min value ${min} greater than max value ${max}`);
        let t = max;
        max = min;
        min = t;
    }

    // Create the generator function for the given range
    const gen = generator(min, max);

    // Return a function that calls the generator function and returns the
    // generated value. If the generator has produced all of the values in the
    // range then `null` is returned.
    return (): number | null => {
        const result = gen.next();

        if (result.done) {
            return null;
        }

        return result.value;
    }
}

const min = 0;
const max = 4
const range = fromTo(min, max);

for (let i = min; i < (max + 1); i++) {
    console.log(range());
}
