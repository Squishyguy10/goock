import random

zoo = True

while zoo:
    turn, x, y, dx, dy, py, py2 = map(int, input().split(","))

    if y > py and dy > 0:
        print('up')
    elif y < py and dy < 0:
        print('down')
    else:
        print('up' if random.randint(0, 1) else 'down')
