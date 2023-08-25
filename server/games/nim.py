piles = [1, 3, 5, 7]
playing = True
turn = "one"
while playing:
    print(",".join(list(map(str, piles))))
    pile, number = map(int, input().split(","))
    piles[int(pile)] -= int(number)
    if sum(piles) == 0:
        print("win one" if turn == "one" else "win two")
        playing = False
    turn = "two" if turn == "one" else "one"
    if playing:
        print("playing")
print(",".join(list(map(str, piles))))
