'use strict';

const { exit } = require('node:process');
const sqlite3 = require('sqlite3').verbose();

/**
 * Opens a connection to a SQLite database. For this exercise the database will
 * run in memory, but one could configure it to save to a file.
 * 
 * @returns A promise with an instance of the SQLite database
 */
async function openDatabase() {
    let db = null;

    // Returns a promise that resolves if the database connection is opened
    // successfully or rejects if an error occurs
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(':memory:', (err) => {
            if (err) {
                console.error('Error opening database', err);
                reject('Error opening fruit stand');
            }

            resolve(db);
        });
    });
}

class FruitStand {
    #db = null;

    /**
     * Asynchronous method to open the fruit stand. This connects to the
     * database and creates the `fruit` table if it does not exist.
     * 
     * @returns A promise that resolves with nothing
     */
    async open() {
        // if fruit stand is already opened, resolve immediately
        if (this.#db) {
            return Promise.resolve();
        }

        this.#db = await openDatabase();
        
        return new Promise((resolve, reject) => {
            this.#db.run(`
                CREATE TABLE IF NOT EXISTS fruit (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL UNIQUE,
                    quantity INTEGER NOT NULL,
                    price REAL NOT NULL
                )
            `, [], (err) => {
                if (err) {
                    console.error('Error creating table', err);
                    reject('Error setting up fruit stand');
                }

                console.info('Opened stand');

                resolve();
            });
        });
    }

    /**
     * Asynchronous method to close the fruit stand. This disconnects from
     * the database.
     * 
     * @returns A promise that resolves with nothing
     */
    async close() {
        return new Promise((resolve, reject) => {
            if (this.#db) {
                this.#db.close((err) => {
                    if (err) {
                        console.error('Error closing database', err);
                    }
        
                    console.info('Closed stand');

                    resolve();
                });
            }
            else {
                console.trace('Attempted to close stand that was not opened');
            }
        });
    }

    /**
     * Asynchronous, private method to find a fruit by name.
     * 
     * @param {String} name The name of the fruit to look up
     * @returns A promise with a row object, or `undefined` if no fruit found
     */
    async #findFruit(name) {
        return new Promise((resolve, reject) => {
            if (this.#db) {
                this.#db.get(`
                    SELECT id, name, quantity, price
                    FROM fruit
                    WHERE name = $name
                `, {
                    $name: name
                }, (err, row) => {
                    if (err) {
                        console.error('Error querying database', err);
                        reject(`Error finding fruit "${name}"`);
                    }

                    resolve(row);
                });
            }
            else {
                reject('Fruit stand not opened');
            }
        });
    }

    /**
     * Asynchronous method to add a fruit to the stand. If the fruit is already
     * in the stand nothing is done but a warning is logged to the console.
     * 
     * @param {String} name     The name of the fruit
     * @param {Number} quantity The integer quantity of the fruit
     * @param {Number} price    The real price of the fruit
     * @returns A promise that resolves with nothing
     */
    async addFruit(name, quantity, price) {
        let fruit = await this.#findFruit(name);

        if (!fruit) {
            return new Promise((resolve, reject) => {
                if (this.#db) {
                    this.#db.run(`
                        INSERT INTO fruit (name, quantity, price)
                        VALUES ($name, $quantity, $price)
                    `, {
                        $name: name,
                        $quantity: quantity,
                        $price: price
                    }, (err) => {
                        if (err) {
                            console.error('Error inserting data into database', err);
                            reject(`Error adding fruit "${name}" to stand`);
                        }

                        resolve();
                    });
                }
                else {
                    reject('Fruit stand not opened');
                }
            });
        }
        else {
            // log that this fruit is already in the stand
            console.warn(`Fruit "${name}" is already in the stand`);
            return Promise.resolve();
        }
    }

    /**
     * Asynchronous method to update the quantity of a fruit on the stand. If
     * the fruit is not in the stand nothing is done but a warning is logged to
     * the console.
     * 
     * @param {String} name     The name of the fruit
     * @param {Number} quantity The integer quantity of fruit
     * @returns A promise that resolves with nothing
     */
    async updateQuantity(name, quantity) {
        const fruit = await this.#findFruit(name);

        if (fruit) {
            return new Promise((resolve, reject) => {
                if (this.#db) {
                    this.#db.run(`
                        UPDATE fruit SET quantity = $quantity WHERE id = $id
                    `, {
                        $id: fruit.id,
                        $quantity: quantity
                    }, (err) => {
                        if (err) {
                            console.error('Error updating quantity in database', err);
                            reject('Error updating fruit quantity');
                        }

                        resolve();
                    });
                }
                else {
                    reject('Fruit stand not opened');
                }
            });
        }
        else {
            // log that this fruit is not in the stand
            console.warn(`Fruit "${name}" is not in the stand`);
            return Promise.resolve();
        }
    }

    /**
     * Asynchronous method to calculate the total value of fruit in the stand.
     * 
     * @returns A promise that resolves with a dollar value formatted string
     */
    async totalValue() {
        return new Promise((resolve, reject) => {
            if (this.#db) {
                this.#db.all('SELECT quantity, price FROM fruit', [], (err, rows) => {
                    if (err) {
                        console.error('Error querying all rows in database', err);
                        reject('Error calculating total value');
                    }

                    const totalValue = rows.reduce((value, row) => {
                        const { quantity, price } = row;
                        return value + (quantity * price);
                    }, 0);

                    resolve(`$${totalValue.toFixed(2)}`);
                });
            }
            else {
                reject('Fruit stand not opened');
            }
        });
    }
}

// await can only be used in an async function, so wrap all of the test code
// into a top-level async function.
(async function() {
    try {
        const stand = new FruitStand();

        await stand.open();

        console.log(await stand.totalValue());

        await stand.addFruit('apple', 10, 0.5);
        await stand.addFruit('banana', 5, 0.2);
        await stand.addFruit('cherry', 10, 0.1);

        console.log(await stand.totalValue());

        await stand.updateQuantity('durian', 14);
        await stand.updateQuantity('banana', 10);

        console.log(await stand.totalValue());

        await stand.addFruit('cherry', 1000, 0.11);
        await stand.addFruit('durian', 4, 0.99);

        console.log(await stand.totalValue());

        stand.close();
        exit(0);
    }
    catch (err) {
        console.error(`Error running program: ${err}`);
        exit(1);
    }
})();
