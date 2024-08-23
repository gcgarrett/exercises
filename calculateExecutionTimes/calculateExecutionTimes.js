'use strict';

const assert = require('node:assert');

class FunctionMetadata {
    name;
    #startTime = undefined;
    #endTime = undefined;

    constructor(name) {
        this.name = name;
    }

    addEvent(type, time) {
        assert.match(type, /start|end/, 'Type value not one of "start" or "end"');

        if (type === 'start') {
            this.#startTime = time;
        }
        else if (type === 'end') {
            this.#endTime = time;
        }
    }

    getExecutionTime() {
        assert.notEqual(this.#startTime, undefined, 'No start event found');
        assert.notEqual(this.#endTime, undefined, 'No end event found');

        return this.#endTime - this.#startTime;
    }
}

const functionMetadataMap = new Map();

function processFunctionEvents(functionEvents) {
    functionEvents.forEach((functionEvent) => {
        const { name, time, event: type } = functionEvent;
        let functionMetadata;

        if (functionMetadataMap.has(name)) {
            functionMetadata = functionMetadataMap.get(name);
        }
        else {
            functionMetadata = new FunctionMetadata(name);
            functionMetadataMap.set(name, functionMetadata);
        }

        functionMetadata.addEvent(type, time);
    });
}

function calculateExecutionTimes(functionEvents) {
    processFunctionEvents(functionEvents);

    const result = {};

    functionMetadataMap.forEach((functionMetadata) => {
        result[functionMetadata.name] = functionMetadata.getExecutionTime();
    });

    return result;
}

const tests = [
    [
        { name: 'main', time: 0, event: 'start' },
        { name: 'subTask1', time: 5, event: 'start' },
        { name: 'subTask1', time: 10, event: 'end' },
        { name: 'subTask2', time: 15, event: 'start' },
        { name: 'main', time: 25, event: 'end' }
    ],
    [
        { name: 'main', time: 0, event: 'start' },
        { name: 'subTask1', time: 5, event: 'start' },
        { name: 'subTask1', time: 10, event: 'stop' },
        { name: 'subTask2', time: 15, event: 'start' },
        { name: 'main', time: 25, event: 'end' }
    ],
    [
        { name: 'main', time: 0, event: 'start' },
        { name: 'subTask1', time: 5, event: 'start' },
        { name: 'subTask1', time: 10, event: 'end' },
        { name: 'subTask2', time: 15, event: 'start' },
        { name: 'subTask2', time: 20, event: 'end' },
        { name: 'main', time: 25, event: 'end' }
    ],
    [
        { name: 'subTask2', time: 15, event: 'start' },
        { name: 'subTask1', time: 10, event: 'end' },
        { name: 'subTask2', time: 20, event: 'end' },
        { name: 'subTask1', time: 5, event: 'start' },
        { name: 'main', time: 25, event: 'end' },
        { name: 'main', time: 0, event: 'start' }
    ]
];

tests.forEach((test) => {
    console.log(`calculateExecutionTimes(${JSON.stringify(test)});`);

    try {
        console.log(calculateExecutionTimes(test));
    }
    catch (e) {
        console.error(e.message);
    }
});
