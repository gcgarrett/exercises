# dailyTemperatures

Exercise to implement the `dailyTemperatures` function that takes an array of daily high temperatures and returns an array where each element is the number of days you would have to wait for a warmer high temperature. If there is no future day for which this is possible then 0 will be put down for that day.

Exercise comes from [cassidoo's newsletter](https://cassidoo.co/newsletter/), [issue #358](https://buttondown.email/cassidoo/archive/dont-let-the-past-steal-your-present-cherrie/)

## considerations
As this is implemented, I believe this solution is very inefficient. The algorithm is at best O(n^2), since for each item in the array we loop through most of the array again to compare the item to subsequent items. I am also performing a shallow copy of the remainder of the array on each iteration, because JavaScript doesn't support a start index for the `findIndex` method.

## usage
* NodeJS: `node dailyTemperatures.js`

## output
Logs solutions to various arrays of daily high temperatures to the console.
