def waysToScorePoints(totalPoints, possiblePoints):
    if totalPoints < 0 or len(possiblePoints) == 0:
        return 0
    elif totalPoints == 0:
        return 1

    currentPoints = possiblePoints[0]

    return waysToScorePoints(totalPoints - currentPoints, possiblePoints) + \
            waysToScorePoints(totalPoints, possiblePoints[1:])

def waysToScore(totalPoints):
    return waysToScorePoints(totalPoints, [6, 3, 2])

testValues = [5, 12, 6, 11, 59, 24]

for testValue in testValues:
    print(f'waysToScore({testValue})\n{waysToScore(testValue)}\n', end='')
