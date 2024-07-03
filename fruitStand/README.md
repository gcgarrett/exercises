# fruitStand
Exercise to implement the FruitStand class that allows you to add different types of fruits with their quantities and prices, update them, and calculate the total value of all the fruits in the stand.

The following methods are implemented:
* `addFruit(name, quantity, price)`
* `updateQuantity(name, quantity)`
* `totalValue()`

I originally implemented this by adding the fruit to an array, but decided to store them in a SQLite database instead to get some practice working with working with databases again. The library I picked for working with SQLite, [sqlite3](https://github.com/TryGhost/node-sqlite3), uses callback functions for its API, so I wrapped all calls in promises so I could make use of the async/await syntax. The database is configured to run in memory since this is just an exercise. In production I would make it configurable (and probably not use SQLite, but who knows?).

Exercise comes from [cassidoo's newsletter](https://cassidoo.co/newsletter/), [issue #359](https://buttondown.email/cassidoo/archive/the-days-you-work-are-the-best-days-georgia/)

## installation
* Run `npm install`

## running
* Run `node fruitStand.js`
