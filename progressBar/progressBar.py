import math
import time

def printProgressBar(progress, update):
    progressInc = math.floor(progress / 5)
    progressBar = '#' * progressInc + ' ' * (20 - progressInc)
    spinnerState = update % 4
    spinner = ' '

    match spinnerState:
        case 0:
            spinner = '|'
        case 1:
            spinner = '/'
        case 2:
            spinner = '-'
        case 3:
            spinner = '\\'

    print(f'\rProgress: ({spinner}) [{progressBar}] {progress}%', end='')

progress = 0
update = 0

while progress <= 100:
    printProgressBar(progress, update)
    time.sleep(0.250)
    progress += 5
    update += 1

print('\nComplete')
