import getopt
import sys

# initialize the global list storing the found prime numbers
PRIMES = []

# helper method to test if the given number is prime.
#
# parameters
#   number (Integer): The integer number to test
#
# returns
#   (Boolean):        True if number is prime, False otherwise
def isPrime(number):
    # test the number against the found primes
    for prime in PRIMES:
        # get quotient and remainder of the number divided by the next found
        # prime
        q, r = divmod(number, prime)
        # if remainder is 0, the number is not a prime
        if r == 0:
            return False
        # if quotient is less than the prime number, the number being tested
        # is prime (putting my trust in Donald Knuth on this one)
        elif q <= prime:
            return True

# helper method to generate a list of the first given number of primes.
#
# parameters
#   numberOfPrimes (Integer): The integer number of primes to find
def findPrimes(numberOfPrimes):
    # add the first and only even prime number to the global list
    PRIMES.append(2)

    # initialize the number of primes found to 1
    primesFound = 1
    # initialize the next possible number to test for primeness to 3 (the first
    # odd number after 2)
    number = 3

    # look for the number of desired primes
    while primesFound < numberOfPrimes:
        # if the number is prime, add it to the global list and increment the
        # number of primes found by 1
        if isPrime(number):
            PRIMES.append(number)
            primesFound += 1
        # test the next odd number
        number += 2

# default to finding the first 500 prime numbers
NUMBER_OF_PRIMES = 500

# users can specify a number of primes to find using the -n or --number option
# when calling this program
opts, args = getopt.getopt(sys.argv[1:], 'n:', ['number='])

try:
    for opt, arg in opts:
        if opt in ('-n', '--number'):
            NUMBER_OF_PRIMES = int(arg)
except ValueError:
    sys.exit('Invalid input value for the number of primes')

# if the number of primes to find is less than 1, then exit with an error message
if NUMBER_OF_PRIMES < 1:
    sys.exit('Invalid number of primes')

# find the number of desired primes
findPrimes(NUMBER_OF_PRIMES)

# print the title
print(f'FIRST {NUMBER_OF_PRIMES} PRIMES')

# print the results in rows of 10 columns
for i in range(0, NUMBER_OF_PRIMES, 10):
    print('    ', end='')
    j = i
    while j < i + 10 and j < NUMBER_OF_PRIMES:
        print(f' {PRIMES[j]:04d}', end='')
        j += 1
    print()
