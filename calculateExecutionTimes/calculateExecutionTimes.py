class FunctionMetadata:
    name = None
    __startTime = None
    __endTime = None

    def __init__(self, name):
        self.name = name

    def addEvent(self, type, time):
        assert type in ['start', 'end'], 'Type value not one of "start" or "end"'

        if (type == 'start'):
            self.__startTime = time
        elif (type == 'end'):
            self.__endTime = time
    
    def getExecutionTime(self):
        assert not (self.__startTime is None), 'No start event found'
        assert not (self.__endTime is None), 'No end event found'

        return self.__endTime - self.__startTime

functionMetadataMap = {}

def processFunctionEvents(functionEvents):
    for functionEvent in functionEvents:
        name = functionEvent['name']
        functionMetadata = None

        if (name in functionMetadataMap):
            functionMetadata = functionMetadataMap[name]
        else:
            functionMetadata = FunctionMetadata(name)
            functionMetadataMap[name] = functionMetadata

        functionMetadata.addEvent(functionEvent['event'], functionEvent['time'])

def calculateExecutionTimes(functionEvents):
    processFunctionEvents(functionEvents)

    result = {}

    for functionMetadata in functionMetadataMap.values():
        result[functionMetadata.name] = functionMetadata.getExecutionTime()
    
    return result

tests = [
    [
        { 'name': 'main', 'time': 0, 'event': 'start' },
        { 'name': 'subTask1', 'time': 5, 'event': 'start' },
        { 'name': 'subTask1', 'time': 10, 'event': 'end' },
        { 'name': 'subTask2', 'time': 15, 'event': 'start' },
        { 'name': 'main', 'time': 25, 'event': 'end' }
    ],
    [
        { 'name': 'main', 'time': 0, 'event': 'start' },
        { 'name': 'subTask1', 'time': 5, 'event': 'start' },
        { 'name': 'subTask1', 'time': 10, 'event': 'stop' },
        { 'name': 'subTask2', 'time': 15, 'event': 'start' },
        { 'name': 'main', 'time': 25, 'event': 'end' }
    ],
    [
        { 'name': 'main', 'time': 0, 'event': 'start' },
        { 'name': 'subTask1', 'time': 5, 'event': 'start' },
        { 'name': 'subTask1', 'time': 10, 'event': 'end' },
        { 'name': 'subTask2', 'time': 15, 'event': 'start' },
        { 'name': 'subTask2', 'time': 20, 'event': 'end' },
        { 'name': 'main', 'time': 25, 'event': 'end' }
    ],
    [
        { 'name': 'subTask2', 'time': 15, 'event': 'start' },
        { 'name': 'subTask1', 'time': 10, 'event': 'end' },
        { 'name': 'subTask2', 'time': 20, 'event': 'end' },
        { 'name': 'subTask1', 'time': 5, 'event': 'start' },
        { 'name': 'main', 'time': 25, 'event': 'end' },
        { 'name': 'main', 'time': 0, 'event': 'start' }
    ]
]

for test in tests:
    print(f'calculateExecutionTimes(${test})')

    try:
        print(calculateExecutionTimes(test))
    except AssertionError as e:
        print(str(e))
