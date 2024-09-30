def generateLoadKey(clothingItem):
    color = clothingItem[0]

    if ("delicate" in clothingItem):
        return f'{color}-delicate'
    else:
        return f'{color}-mixed'

def minLaundryLoads(laundryList):
    loads = set()

    for clothingItem in laundryList:
        itemKey = generateLoadKey(clothingItem)
        loads.add(itemKey)

    return len(loads)

testValues = [
    [
        ("red", "normal"),
        ("blue", "normal"),
        ("red", "delicate"),
        ("blue", "heavy")
    ],
    [
        ("white", "normal"),
        ("white", "delicate"),
        ("white", "normal"),
        ("white", "heavy")
    ],
    [
        ("purple", "delicate"),
        ("purple", "heavy"),
        ("pink", "heavy"),
        ("pink", "delicate"),
        ("tan", "delicate"),
        ("tan", "heavy")
    ],
    [
        ("black", "normal"),
        ("black", "heavy"),
        ("black", "heavy"),
        ("black", "normal"),
        ("black", "normal"),
        ("black", "heavy")
    ]
]

for testValue in testValues:
    print(f'minLaundryLoads({testValue})\n{minLaundryLoads(testValue)}\n', end='')
