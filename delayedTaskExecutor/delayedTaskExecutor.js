'use strict';

// Timestamp string regular expression. Valid format is HH:mm(am|pm). The
// initial 0 of the hour is optional.
const timeStampRegex = /^([0-1]?[0-9]):([0-5][0-9])(am|pm)/i;

/**
 * Implementation of the Task interface. Implements the run() and timeStamp()
 * methods.
 */
class Task {
    /**
     * Constructor for a Task. Parses and validates the given timestamp string.
     * The value of the string is converted into a epoch timestamp number.
     * Throws an Error if the given string could not be parsed or if the hour
     * value is greater than 23 when converted into 24 hour format.
     * 
     * Due to the timestamp string format, Tasks can only be created to be run
     * today at the granularity of a minute.
     * 
     * @param {String} timeStampStr 
     */
    constructor(timeStampStr) {
        // Create a new Date object to update with the given hour and minute
        // values from the timestamp string
        const runTimeDate = new Date();
        // Run the regular expression on the given timestamp string
        const result = timeStampRegex.exec(timeStampStr);

        // If the timestamp string did not match the regular expression throw
        // an error
        if (result == null) {
            throw Error('Invalid timestamp string', {
                cause: `Could not parse timestamp string ${timeStampStr}`
            });
        }

        // Pull the hour, minute, and am/pm values from the timestamp string
        const [, hourStr, minuteStr, amPmStr] = result;

        // Parse the hour and minute values, converting them to integers
        let hour = Number.parseInt(hourStr);
        const minute = Number.parseInt(minuteStr);

        // If pm was specified in the timestamp string, add 12 to the hour
        // value (converting it to 24 hour format)
        if (amPmStr === 'pm') {
            hour += 12;
        }

        // If hour is now greater than 23 throw an error because the timestamp
        // will be for the next day
        if (hour > 23) {
            throw Error('Invalid timestamp string', {
                cause: `${hour} hour is greater than 23`
            });
        }

        // Update the Date object with the hour and minute, setting seconds and
        // milliseconds to 0
        runTimeDate.setHours(hour, minute, 0, 0);

        // Store epoch timestamp in runTime
        this.runTime = runTimeDate.valueOf();
    }

    /**
     * Method to log the the Task timestamp in the en-US locale format to the
     * console.
     */
    run() {
        let timeStampDate = new Date(this.runTime);
        console.log(`Task running at: ${timeStampDate.toLocaleString('en-US')}`);
    }

    /**
     * Getter method for the Task epoch timestamp.
     * 
     * @returns The task epoch timestamp
     */
    timeStamp() {
        return this.runTime;
    }
}

/**
 * Implementation of the DelayedTaskExecutor interface. Implements the exec()
 * method.
 */
class DelayedTaskExecutor {
    /**
     * Method to run the given Task at the Task's timestamp. Creates a Promise
     * that will sleep for the difference between the Task's timestamp and the
     * current time.
     * 
     * @param {Task} task 
     */
    exec(task) {
        // Calculate how long the Task needs to sleep for
        const sleepTime = task.timeStamp() - Date.now();
        // Create a Promise that will sleep for that amount of time before
        // running the Task
        const taskPromise = new Promise((resolve) => {
            setTimeout(() => {
                task.run();
                resolve();
            }, sleepTime);
        });
    }
}

const dte = new DelayedTaskExecutor();
dte.exec(new Task('06:47pm'));
dte.exec(new Task('06:48pm'));
dte.exec(new Task('06:12pm'));
