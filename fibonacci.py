# Solution for exercise 1.2.8.3 from The Art of Computer Programming Volume 1
# Instead of using the typical Fn+2 = Fn+1 + Fn approach, I wanted to try out
# formula 15, Fn = 𝜙^n / √5. This approach gives us a 209 digit value with a
# leading digit of 4 for F1000, which matches Prof. Knuth's description from
# the given solution for exercise 1.2.8.2.
#
# However, it is incorrect!
#
# This could be because the constants for the golden ratio and square root of
# 5 are given with only 40 decimal place precision or something else about
# Python I do not yet understand. Checking Wolfram Alpha and using the
# traditional formula of Fn+2 = Fn+1 + Fn give a different value.
#
# I am happy to learn however that Python can handle very large integers, since
# this number should require 87 bytes to store it ((209 / log10 2) / 8)

# use the golden ratio (𝜙) given in appendix a, table 1
GOLDEN_RATIO = 1.6180339887498948482045868343656381177203
# use the square root of 5 given in appendix a, table 1
SQRT_FIVE =    2.2360679774997896964091736687312762354406

# begin with F1
n = 1
# initialize the numerator to be the golden ratio
numerator = GOLDEN_RATIO

# initialize a to F-1
# if you didn't do the exercises in the book and also believed, as I did, that
# the Fibonacci numbers start at 0, it turns out that you can find negative
# Fibonacci numbers by working backwards and when you do you discover that
# F-n = Fn * (-1)^(n+1), which allows us to initialize F-1 without having to
# include a couple of if statements to handle F0 and F1.
a = 1
# initialize b to F0
b = 0

# calculate up to F1000
while (n <= 1000):
    # use formula 1.2.8.15:
    #    Fn = 𝜙^n / √5, rounded to nearest integer
    f = round(numerator / SQRT_FIVE)
    print(f'Formula 15  - {n}: {f}')
    # use traditional formula 1.2.8.2:
    #    Fn+2 = Fn+1 + Fn
    c = b + a
    print(f'Traditional - {n}: {c}')
    # increment n
    n = n + 1
    # multiply the numerator by 𝜙 to given 𝜙^n
    numerator = numerator * GOLDEN_RATIO
    # set a to b (current Fn+1 becomes Fn on next iteration)
    a = b
    # set b to c (current Fn+2 becomes Fn+1 on next iteration)
    b = c
