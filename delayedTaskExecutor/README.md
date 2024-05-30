# delayedTaskExecutor

Exercise to implement the DelayedTaskExecutor and Task interfaces (see below). A DelayedTaskExecutor will run multiple Tasks at their given timestamp time. Implemented in vanilla JavaScript to be run in node.js. This implementation is blocking, so the program won't exit until all of the Tasks are completed. In the future I might see about forking processes to execute the Tasks so the program exits after all the Tasks are set up but not run.

```
interface Task {
    // a blocking run
    void run();

    // when the task should be executed
    long timeStamp(); 
}

interface DelayedTaskExecutor {
   // executes task.run() at the given timestamp
   void exec(Task task);
}

// usage
executor.exec(new Task(10:00am));
executor.exec(new Task(10:10am));
executor.exec(new Task(10:05am));
```

Exercise comes from [cassidoo's newsletter](https://cassidoo.co/newsletter/), [issue #354](https://buttondown.email/cassidoo/archive/when-people-talk-listen-completely-ernest/)

## running

Simply run `node delayedTaskExecutor.js`
