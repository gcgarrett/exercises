import functools
import locale
import re

# Function to count the vowels in the given string.
#
# parameters 
#   str (String): The string to process
#
# returns
#   (Number): The number of vowels found in the string
def countVowels(str):
    return len(re.findall(r'[aeiouy]', str, re.I))

# Comparator function to sort strings. The string with the greater number of
# vowels will come first. If the strings have the same number of vowels, then
# the strings will be sorted alphabetically.
#
# parameters 
#   a (String): The first string to compare
#   b (String): The second string to compare
#
# returns
#   (Number):   A negative value if a has more vowels than b OR if a comes
#               before b alphabetically; a positive value if b has more vowels
#               than a OR if b comes before a alphabetically; 0 if a and b are
#               the same string
def nameCompare(a, b):
    aCount = countVowels(a)
    bCount = countVowels(b)

    if (aCount == bCount):
        # strcoll will compare two strings and return values that can be
        # used in a comparator function
        return locale.strcoll(a, b)
    
    return bCount - aCount

# Function that takes a list of names and returns the names sorted by the
# number of vowels in each name in descending order. If two names have the
# same number of vowels, then they are sorted alphabetically.
#
# parameters 
#   names (List): The list of names to sort
#
# returns
#   (List):       The sorted list of names
def sortNames(names):
    return sorted(names, key=functools.cmp_to_key(nameCompare))

print('sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])')
print(f'{sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])}')
print('sortNames(["Edward", "Alphonse", "Roy", "Winry"])')
print(f'{sortNames(["Edward", "Alphonse", "Roy", "Winry"])}')
print('sortNames(["Death Valley", "Nick", "Earth", "Colorado River", "Arizona", "Quartzsite", "Zzyzx"])')
print(f'{sortNames(["Death Valley", "Nick", "Earth", "Colorado River", "Arizona", "Quartzsite", "Zzyzx"])}')
