def firstFrost(daily_temps: list, drop: int) -> list:
    result = []

    # loop through the daily temperatures, getting the index and value
    for current_index, daily_temp in enumerate(daily_temps):
        # find the first instance where a daily temperature is `drop` amount
        # less than the current daily temperature, returning `0` if none is
        # found.
        days = next((compare_index for compare_index, compare_temp in enumerate(daily_temps[current_index:]) if compare_temp <= (daily_temp - drop)), 0)

        # append number of days to the result list
        result.append(days)
    
    return result

testValues = [
    ([70, 68, 72, 60, 65, 55], 5),
    ([50, 49, 48], 5),
    ([40, 30, 45, 20], 10),
    ([100, 97, 95, 94, 93, 90, 85], 10)
]

for testValue in testValues:
    print(f'firstFrost({testValue[0]}, {testValue[1]})\n{firstFrost(*testValue)}')
        