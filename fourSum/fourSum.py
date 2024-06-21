# Generic solution that returns all unique combitions for the given number of
# integers to sum that match the target sum. With this you can do quintuplets,
# quadruplets, triplets, etc. Returns a list of lists, where each sub-list is
# of length of the number of integers to sum.
#
# parameters
#   integers (List):      The list of integers
#   sum (Number):         The target sum
#   numberToSum (Number): The number of integers to sum
#
# returns
#   (List):               The list of all unique combinations
def sumHelper(integers, sum, numberToSum):
    results = []

    # loop through the list of integers until the index is greater than or
    # equal to the length of the list minus the number of integers to sum
    # minus 1. e.g. if the list length is 7 and the number of integers to
    # sum is 4, then we want to stop the loop when there are less than 4
    # numbers left to process in the list

    for i in range(0, len(integers) - (numberToSum - 1)):
        integer = integers[i]

        # if the number of integers to sum is greater than one, run this
        # function recursively on the remainder of the list. if the number
        # of integers to sum is 1, then we return all integers that are equal
        # to the sum
        if numberToSum > 1:
            subResults = sumHelper(integers[(i + 1):], sum - integer, numberToSum - 1)

            if subResults:
                # map the sub-results to add the integer to the front, then
                # sort them
                for subResult in subResults:
                    subResult.insert(0, integer)
                    subResult.sort()
                    results.append(subResult)
        elif integer == sum:
            results.append([integer])

    return results


# Takes an list of integers and a target sum and returns all unique
# quadruplets `[a, b, c, d]` in the list such that `a + b + c + d = target`.
# If there are no possible combinations then an empty list is returned.
#
# parameters
#   integers (List): The list of integers
#   sum (Number):    The target sum
#
# returns
#   (List):          An list of all unique quadruplets
def fourSum(integers, sum):
    return sumHelper(integers, sum, 4)

print('fourSum([1, 0, -1, 0, -2, 2], 0)')
print(f'{fourSum([1, 0, -1, 0, -2, 2], 0)}')
print('fourSum([], 0)')
print(f'{fourSum([], 0)}')
print('fourSum([13, -13], 0)')
print(f'{fourSum([13, -13], 0)}')
print('fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)')
print(f'{fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)}')
print('fourSum([1, 2, 3, 4], 10)');
print(f'{fourSum([1, 2, 3, 4], 10)}')
