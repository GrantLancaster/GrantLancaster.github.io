file = open("teleport.in", "r")
file = file.read()
a, b, x, y = map(int, file.split())

def direct(a, b, x, y):
    directLength = abs(b - a)
    return directLength

def longest(a, b, x, y):
    longestLength = (abs(y - a)) + (abs(b - x))
    return longestLength

def shortest(a, b, x, y):
    shortestLength = (abs(x - a)) + (abs(b - y))
    return shortestLength

def compare(a, b, x, y):
    distances = [
    direct(a, b, x, y),
    longest(a, b, x, y),
    shortest(a, b, x, y)
    ]
    smallDistance = min(distances)
    return smallDistance

answer = compare(a, b, x, y)

out = open("teleport.out","w")
out.write(str(answer))
out.close()