import random

pheight = 54

zoo = True

while zoo:
    turn, x, y, dx, dy, py, py2 = map(int, input().split(","))
    
    if turn == 0:
        if y > (py+pheight)/2:
            print("down")
        elif y < (py+pheight)/2:
            print("up")
        else:
            print("stay")
    if turn == 1:
        if y > (py2+pheight)/2:
            print("down")
        elif y < (py2+pheight)/2:
            print("up")
        else:
            print("stay")
