# waysToScore

Exercise to implement the `waysToScore` function that takes an integer `totalPoints` representing the total points a team wants to score in an American football game and determines the number of unique ways the team can score exactly `totalPoints` points using any combination of touchdowns (6 points), field goals (3 points), or safeties (2 points).

The scoring has been simplified, since each touchdown in American football includes an opportunity to score either 1 or 2 additional points. That could be handled by expanding the possible points to include 7 (touchdown and a field goal) and 8 (touchdown and a two-point conversion), but I kept with the possible points from the exercise.

This exercise is in the same class of problems as figuring out how many combinations of coins one can use to make change for some amount. I used a recursive function with the following algorithm:
* Base cases:
    * if `totalPoints` is less than `0` or there are no possible points to select from, return `0`
    * if `totalPoints` is `0`, then return `1` (since there is only 1 way to score `0` points)
* General case:
    * call the function two ways and return the sum of the results:
        * call with `totalPoints` minus the highest possible point to calculate the number of ways the team can score after already scoring with the highest possible point value (e.g. if `totalPoints` is `14`, how many ways can the team score `8` points with touchdowns, fields goals, or safeties)
        * call with all possible points except the highest to calculate the number ways to score `totalPoints` with the lower possible point values (e.g. if `totalPoints` is `14`, how many ways can the team score `14` points with only field goals or safeties)

Exercise comes from [cassidoo's newsletter](https://cassidoo.co/newsletter/), [issue #370](https://buttondown.com/cassidoo/archive/no-matter-what-happens-in-life-be-good-to-people/)

## compiling
* Go: Run `go build` in the directory

## running
* Go:     `./waysToScore`
* NodeJS: `node waysToScore.js`
* Python: `python3 waysToScore.py`

## output
Prints results from various inputs to the command line
