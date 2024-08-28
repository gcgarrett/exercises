def squares(n):
    result = 0

    for i in range(1, n + 1):
        result = result + (i * i)
    
    return result

testValues = [2, 5, 10, 12, 25, 100, 1000, 65535]

for value in testValues:
    print(f'squares({value})\n{squares(value)}\n', end='')
