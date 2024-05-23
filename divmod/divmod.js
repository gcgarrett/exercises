'use strict';

// Mask for the high bit of a 16 bit number
const HIGH_BIT_MASK = 0x8000;
// Mask for the 16 bits of a 16 bit number
const TWO_BYTE_MASK = 0xFFFF;

/*
 * The built-in way to calculate divmod: divide the dividend by the divisor,
 * returning the floor of the value, to get the quotient and then mod the
 * dividend by the divisor to get the remainder. Returns an array with the
 * two values to mimic how Python's divmod function returns a tuple.
 * 
 * parameters
 *   dividend (Number): The dividend
 *   divisor  (Number): The divisor
 * 
 * returns
 *   (Array):           An array of the two values, the quotient and remainder
 */
function divmod(dividend, divisor) {
    return [
        Math.floor(dividend / divisor),
        dividend % divisor
    ];
}

/*
 * Implements the rol instruction from 6502 assembly. The bits in the number
 * are shifted left 1 place. If carry is true, then a 1 is shifted in from
 * the right. If the highest bit was 1, then the carry result is true.
 * 
 * parameters
 *   Object with:
 *     number (Number): The number to shift left
 *     carry (Boolean): true if a 1 should be shifted in from the right
 * 
 * returns
 *   (Object):          An object with two fields, number and carry, where
 *                      number is the updated value of the input number and
 *                      carry is true if the highest bit was a 1, false
 *                      otherwise
 */
function rol({ number, carry }) {
    // shiftIn is 1 if carry is true, 0 if false
    let shiftIn = +carry;

    return {
        // shift the given number over 1 place and add in the shiftIn value
        number: ((number << 1) & TWO_BYTE_MASK) + shiftIn,
        // carry is true if the high bit is set, false otherwise
        carry: (number & HIGH_BIT_MASK) === HIGH_BIT_MASK
    };
}

/*
 * The bitwise way to calculate divmod. Mimics the algorithm I intend to use
 * for the 6502 computer. Returns an array with the two values to mimic how
 * Python's divmod function returns a tuple. This function will only operate
 * on 16 bit numbers. Any number greater than 16 bits will be truncated.
 * 
 * parameters
 *   dividend (Number): The dividend
 *   divisor  (Number): The divisor
 * 
 * returns
 *   (Array):           An array of the two values, the quotient and remainder
 */
function bdivmod(dividend, divisor) {
    // only work on 16 bit numbers, so do a bitwise AND with 0xFFFF
    // to truncate the numbers to 16 bits. this operation converts
    // the floating point numbers to be 32 bit integers.
    dividend &= TWO_BYTE_MASK;
    divisor &= TWO_BYTE_MASK;

    // initialize remainder to 0
    let remainder = 0;
    // initialize quotient to dividend
    let quotient = dividend;
    // initialize carry to false (e.g. carry flag is clear)
    let carry = false;

    // iterate through all 16 bits of the number
    for (let i = 0; i < 16; i++) {
        // rotate quotient left
        ({ number: quotient, carry } = rol({ number: quotient, carry }));
        // rotate remainder left
        ({ number: remainder } = rol({ number: remainder, carry }));

        // if remainder greater than divisor, then subtract the divisor from
        // the remainder and set the carry flag; otherwise clear the carry
        // flag (this mimics the 6502 sbc function)
        if (remainder >= divisor) {
            remainder = remainder - divisor;
            carry = true;
        }
        else {
            carry = false;
        }
    }

    // rotate quotient left one more time
    ({ number: quotient } = rol({ number: quotient, carry }));

    // return the quotient and remainder as an array (this mimics the tuple
    // that Python returns)
    return [quotient, remainder];
}

let [q, r] = divmod(95, 7);

console.log(`Quotient is: ${q}; remainder is: ${r}`);

let [bq, br] = bdivmod(95, 7);

console.log(`Quotientb is: ${bq}; remainderb is: ${br}`);

let res = rol({ number: 0x8002, carry: true });

console.log(`Number is: ${res['number'].toString(2)}; carry is: ${res['carry']}`);
