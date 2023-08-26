import random
import math

width = 750
height = 300
pheight = 54
pwidth = 12
pvel = 6
ballLength = 12
wallDistance = 3

velx = random.randint(2, 5)
vely = random.randint(2, 5)
if random.choice(["heads, tails"]) == "tails":
    vely = -vely

ball = {
    "x": int(width/2)-1,
    "y": int(height/2)-1,
    "velx": velx,
    "vely": vely
}
paddlesY = {
    "one": int(height/2)-1,
    "two": int(height/2)-1
}

playing = True
turn = "one"
while playing:
    print(",".join(list(map(str, [["one", "two"].index(turn), ball["x"], ball["y"], ball["velx"], ball["vely"], paddlesY["one"], paddlesY["two"]]))))
    movement = input()
    if movement == "up":
        paddlesY[turn] -= pvel
    elif movement == "down":
        paddlesY[turn] += pvel
    
    #paddle collision with top and bottom handling
    if paddlesY[turn] < 0:
        paddlesY[turn] = 0
    if paddlesY[turn] > height-pheight-1:
        paddlesY[turn] = height-pheight-1
    
    if turn == "two":
        ball["x"] += ball["velx"]
        ball["y"] += ball["vely"]
        
        #collision handling
        if ball["x"] <= pwidth+wallDistance-1:
            if ball["x"] <= 0:
                print("win two")
                playing = False
            elif paddlesY["one"]+pheight-1 >= ball["y"] >= paddlesY["one"]:
                ball["x"] = pwidth+wallDistance-1
                ball["velx"] = -ball["velx"]
        if ball["x"] >= width-pwidth-wallDistance-1:
            if ball["x"] >= width-1:
                print("win one")
                playing = False
            elif paddlesY["two"]+pheight-1 >= ball["y"] >= paddlesY["two"]:
                ball["x"] = width-pwidth-wallDistance-1
                ball["velx"] = -ball["velx"]
        if ball["y"] <= 0:
            ball["y"] = 0
            ball["vely"] = -ball["vely"]
        if ball["y"] >= height-1:
            ball["y"] = height-1
            ball["vely"] = -ball["vely"]
    
    turn = "two" if turn == "one" else "one"
    if playing:
        print("playing")
