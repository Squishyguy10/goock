while True:
    piles = list(map(int, input().split(",")))
    number = min([p for p in piles if p != 0])
    pile = piles.index(number)
    number = 1
    print(str(pile) + "," + str(number))
