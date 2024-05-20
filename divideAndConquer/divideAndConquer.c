#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Solutions to the exercises from chapter 4 of Grokking Algorithms

/*
 * 4.1 - Write out the code for the earlier `sum` function recursive method to
 * sum the number in the given list.
 * 
 * parameters
 *   array (int64_t *):      The array of numbers to sum
 *   arrayLength (uint32_t): The array length
 * 
 * returns
 *   (int64_t):              The sum of the numbers in the list
 */
int64_t sum(int64_t *array, uint32_t arrayLength) {
    if (arrayLength == 0) {
        return 0;
    }
    else {
        int64_t value = array[0];

        return value + sum(++array, --arrayLength);
    }
}

/*
 * 4.2 - Write a recursive function to count the number of items in a list.
 * recursive method to count the items in the given list.
 *
 * This one, admittedly, is kinda silly, since we are passing the array length
 * as one of the parameters, but this is an exercise in recursion.
 *
 * parameters
 *   array (int64_t *):      The array of numbers to process
 *   arrayLength (uint32_t): The array length
 *
 * returns
 *   (uint32_t):             The count of numbers in the array
 */
uint32_t count(int64_t *array, uint32_t arrayLength) {
    if (arrayLength == 0) {
        return 0;
    }
    else {
        return 1 + count(++array, --arrayLength);
    }
}

/*
 * 4.3 - Write a recursive function to find the maximum number in a list.
 * recursive method to find the maximum number in the given list.
 *
 * parameters
 *   array (int64_t *):      The array of numbers to process
 *   arrayLength (uint32_t): The array length
 *
 * returns
 *   (int64_t):              The maximum number in the array
 */
int64_t max(int64_t *array, uint32_t arrayLength) {
    int64_t value = array[0];
    int64_t subMax;

    if (arrayLength == 1) {
        return value;
    }
    else {
        // call max on remaining array values, incrementing array pointer
        // and decrementing array length
        subMax = max(++array, --arrayLength);

        if (value > subMax) {
            return value;
        }
        else {
            return subMax;
        }
    }
}

int main() {
    int64_t aArray[] = {2, 4, 6};
    int64_t bArray[] = {3, 9, 6};
    int64_t cArray[] = {55, 27, 13};
    int64_t dArray[] = {17, 2};
    int64_t eArray[] = {3};
    int64_t fArray[] = {3, 6, 9, 12, 15, 18, 21};
    int64_t gArray[] = {-17, -33, -92, -4, -57};

    int64_t sumResult = 0;
    uint32_t countResult = 0;
    int64_t maxResult = 0;

    // Sum results
    sumResult = sum(aArray, 3);
    printf("Sum of [2, 4, 6]: %" PRId64 "\n", sumResult);

    sumResult = sum(bArray, 3);
    printf("Sum of [3, 9, 6]: %" PRId64 "\n", sumResult);

    sumResult = sum(cArray, 3);
    printf("Sum of [55, 27, 13]: %" PRId64 "\n", sumResult);

    sumResult = sum(dArray, 2);
    printf("Sum of [17, 2]: %" PRId64 "\n", sumResult);

    sumResult = sum(eArray, 1);
    printf("Sum of [3]: %" PRId64 "\n", sumResult);

    sumResult = sum(fArray, 7);
    printf("Sum of [3, 6, 9, 12, 15, 18, 21]: %" PRId64 "\n", sumResult);

    sumResult = sum(gArray, 5);
    printf("Sum of [-17, -33, -92, -4, -57]: %" PRId64 "\n", sumResult);

    // Count results
    countResult = count(aArray, 3);
    printf("Count of [2, 4, 6]: %" PRIu32 "\n", countResult);

    countResult = count(bArray, 3);
    printf("Count of [3, 9, 6]: %" PRIu32 "\n", countResult);

    countResult = count(cArray, 3);
    printf("Count of [55, 27, 13]: %" PRIu32 "\n", countResult);

    countResult = count(dArray, 2);
    printf("Count of [17, 2]: %" PRIu32 "\n", countResult);

    countResult = count(eArray, 1);
    printf("Count of [3]: %" PRIu32 "\n", countResult);

    countResult = count(fArray, 7);
    printf("Count of [3, 6, 9, 12, 15, 18, 21]: %" PRIu32 "\n", countResult);

    countResult = count(gArray, 5);
    printf("Count of [-17, -33, -92, -4, -57]: %" PRIu32 "\n", countResult);

    // Max results
    maxResult = max(aArray, 3);
    printf("Max of [2, 4, 6]: %" PRId64 "\n", maxResult);

    maxResult = max(bArray, 3);
    printf("Max of [3, 9, 6]: %" PRId64 "\n", maxResult);

    maxResult = max(cArray, 3);
    printf("Max of [55, 27, 13]: %" PRId64 "\n", maxResult);

    maxResult = max(dArray, 2);
    printf("Max of [17, 2]: %" PRId64 "\n", maxResult);

    maxResult = max(eArray, 1);
    printf("Max of [3]: %" PRId64 "\n", maxResult);

    maxResult = max(fArray, 7);
    printf("Max of [3, 6, 9, 12, 15, 18, 21]: %" PRId64 "\n", maxResult);

    maxResult = max(gArray, 5);
    printf("Max of [-17, -33, -92, -4, -57]: %" PRId64 "\n", maxResult);

    return 0;
}
