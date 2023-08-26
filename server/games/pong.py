import random
import math

width = 750
height = 300
pheight = 54
pwidth = 12
ballLength = 12

velx = random.randint(2, 5)
vely = random.randint(2, 5)
if random.choice(["heads", "tails"]) == "tails":
    velx = -velx
if random.choice(["heads", "tails"]) == "tails":
    vely = -vely

ball = {
    x: int(width/2)-1,
    y: int(height/2)-1,
    velx: velx,
    vely: vely
}
paddlesY = {
    "one": int(height/2)-1,
    "two": int(height/2)-1
}

playing = True
turn = "one"
while playing:
    print(",".join(list(map(str, [ballX, ballY, paddlesY["one"], paddlesY["two"]]))))
    movement = input()
    paddlesY[turn] += 6 if movement == "up" else -6
    if turn == "two":
        pass
    turn = "two" if turn == "one" else "one"
    if playing:
        print("playing")
