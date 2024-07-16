def increasingSubsequence(nums):
    longestSubsequence = 0

    if (len(nums) == 0):
        return longestSubsequence

    currentSubsequence = 1

    for i in range(1, len(nums)):
        if (nums[i] > nums[i - 1]):
            currentSubsequence += 1
        else:
            if (currentSubsequence > longestSubsequence):
                longestSubsequence = currentSubsequence
            currentSubsequence = 1

    if (currentSubsequence > longestSubsequence):
        longestSubsequence = currentSubsequence

    return longestSubsequence

testArrays = [
    [],
    [1],
    [1, 1],
    [1, 2, 3, 4, 5],
    [10, 9, 2, 3, 7, 101, 18],
    [4, 4, 4, 4, 3],
    [9, 8, 7, 4, 5, 6],
    [10, 12, 14, 7, 8, 9, 10, 1, 2],
    [99, 98, 97, 96, 95, 94, 93, 92, 91]
]

for testArray in testArrays:
    print(f'increasingSubsequence({testArray})')
    print(increasingSubsequence(testArray))
