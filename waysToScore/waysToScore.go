package main

import "fmt"

func waysToScorePoints(totalPoints int, possiblePoints []int) int {
    if totalPoints < 0 || len(possiblePoints) == 0 {
        return 0
    } else if totalPoints == 0 {
        return 1
    }

    currentPoints := possiblePoints[0]

    return waysToScorePoints(totalPoints - currentPoints, possiblePoints) +
            waysToScorePoints(totalPoints, possiblePoints[1:])
}

func waysToScore(totalPoints int) int {
    possiblePoints := []int{6, 3, 2}

    return waysToScorePoints(totalPoints, possiblePoints)
}

func main() {
    testValues := [6]int{5, 12, 6, 11, 59, 24}

    for _, testValue := range testValues {
        fmt.Printf("waysToScore(%d)\n%d\n", testValue, waysToScore(testValue))
    }
}
