def wordBreak(s, dict):
    result = False

    if len(s) == 0:
        return True
    
    for word in dict:
        if s.find(word) == 0:
            result = result or wordBreak(s[len(word):], dict)

    return result

testValues = [
    ('leetcode', ['leet', 'code']),
    ('codeleet', ['leet', 'code']),
    ('catsandog', ['cat', 'cats', 'and', 'sand', 'dog']),
    ('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']),
    ('a', ['aa', 'aaa']),
    ('a' * 2, ['aa', 'aaa']),
    ('a' * 3, ['aa', 'aaa']),
    ('a' * 4, ['aa', 'aaa']),
    ('a' * 5, ['aa', 'aaa']),
    ('a' * 8, ['aa', 'aaa']),
    ('a' * 10, ['aa', 'aaa'])
]

for testValue in testValues:
    s, dict = testValue
    print(f"wordBreak('{s}', [{dict}])")
    print(wordBreak(s, dict))
