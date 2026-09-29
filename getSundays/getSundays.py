import datetime

def isSunday(year: int, month: int, day: int) -> bool:
    return datetime.date(year, month, day).weekday() == 6

def findFirstSunday(year: int, month: int) -> int:
    return next(day for day in range(1, 7) if isSunday(year, month, day))

def getSundays(year: int, month: int) -> list:
    day = findFirstSunday(year, month)

    result = []

    while(True):
        try:
            result.append(datetime.date(year, month, day).isoformat())
            day = day + 7
        except ValueError:
            break

    return result

testValues = [
    (2026, 9),
    (2026, 8),
    (2024, 2),
    (2020, 3),
    (2015, 12),
    (2011, 6),
    (2000, 8)
]

for testValue in testValues:
    print(f'getSundays({testValue[0]}, {testValue[1]})\n{getSundays(*testValue)}')
