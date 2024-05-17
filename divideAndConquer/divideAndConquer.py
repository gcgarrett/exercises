# Solutions to the exercises from chapter 4 of Grokking Algorithms.

# 4.1 - Write out the code for the earlier `sum` function
# recursive method to sum the numbers in the given list.
#
# parameters
#   numberList (List): The list of numbers to sum
#
# returns
#   (Number):          The sum of the numbers in the list
def sum(numberList):
    if not numberList:
        return 0
    else:
        return numberList[0] + sum(numberList[1:])

print(f'Sum of [2,4,6]: {sum([2,4,6])}')
print(f'Sum of [3,6,9]: {sum([3,6,9])}')
print(f'Sum of [13,27,55]: {sum([13,27,55])}')
print(f'Sum of [3]: {sum([3])}')
print(f'Sum of []: {sum([])}')

# 4.2 - Write a recursive function to count the number of items in a list.
# recursive method to count the items in the given list.
#
# parameters
#   itemList (List): The list of items to count
#
# returns
#   (Number):        The count of items in the list
def count(itemList):
    if not itemList:
        return 0
    else:
        return 1 + count(itemList[1:])

print(f'Count of [2,4,6]: {count([2,4,6])}')
print(f'Count of [3,6,9,12,15,18,21]: {count([3,6,9,12,15,18,21])}')
print(f'Count of ["h","e","l","l","o"," ","w","o","r","l","d"]: {count(["h","e","l","l","o"," ","w","o","r","l","d"])}')
print(f'Count of []: {count([])}')

# 4.3 - Write a recursive function to find the maximum number in a list.
# recursive method to find the maximum number in the given list.
#
# parameters
#   numberList (List): The list of numbers to process
#
# returns
#   (Number|None):     The maximum number or None if given an empty list
def max(numberList):
    if not numberList:
        return None

    subMax = max(numberList[1:])

    if not subMax or numberList[0] > subMax:
        return numberList[0]
    else:
        return subMax

print(f'Max of [2,4,6]: {max([2,4,6])}')
print(f'Max of [3,9,6]: {max([3,9,6])}')
print(f'Max of [55,27,13]: {max([55,27,13])}')
print(f'Max of [17,2]: {max([17,2])}')
print(f'Max of [3]: {max([3])}')
print(f'Max of []: {max([])}')
