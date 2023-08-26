import random

pheight = 54

zoo = True

while zoo:
    turn, x, y, dx, dy, py, py2 = map(int, input().split(","))
    
    if turn == 0:
        centre = py+(pheight/2)
    if turn == 1:
        centre = py2+(pheight/2)
        
    if y > centre:
        print("down")
    elif y < centre:
        print("up")
    else:
        print("stay")
