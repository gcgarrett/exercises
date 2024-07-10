class NoSpaceError(Exception): pass

def spaceAvailable(flowers, index):
    if flowers[index] != 1:
        leftIndex = index - 1
        rightIndex = index + 1
        leftEmpty = True
        rightEmpty = True

        if leftIndex >= 0 and flowers[leftIndex] == 1:
            leftEmpty = False
        
        if rightIndex < len(flowers) and flowers[rightIndex] == 1:
            rightEmpty = False
        
        return leftEmpty and rightEmpty

    return False

def findNextSpace(flowers):
    for index, value in enumerate(flowers):
        if spaceAvailable(flowers, index):
            return index

    return -1


def plantFlower(flowers):
    plantIndex = findNextSpace(flowers)

    if plantIndex > -1:
        flowers[plantIndex] = 1
    else:
        raise NoSpaceError

    return flowers

def canPlantFlowers(flowers, additionalCount):
    try:
        while(additionalCount > 0):
            plantFlower(flowers)
            additionalCount -= 1
    except NoSpaceError:
        return False

    return True

testTuples = [
    ([1, 0, 0, 0, 1], 1),
    ([1, 0, 0, 0, 1], 2),
    ([0, 0, 0, 0, 0], 3),
    ([1, 0, 1, 0, 1], 1),
    ([0], 1),
    ([1], 1),
    ([0, 0], 1),
    ([0, 1], 1),
    ([1, 0], 1),
    ([0, 0], 2),
    ([0, 0, 0], 1),
    ([0, 0, 0], 2),
    ([0, 0, 1], 1),
    ([0, 1, 0], 1),
    ([1, 0, 0], 1),
    ([], 0),
    ([1, 0, 0, 0, 0, 0, 0, 0, 1], 3)
]

for testTuple in testTuples:
    flowers, additionalCount = testTuple
    print(f'canPlantFlowers([{flowers}], {additionalCount})')
    print(canPlantFlowers(flowers, additionalCount))
