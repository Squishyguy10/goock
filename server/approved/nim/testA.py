while True:
    piles = list(map(int, input().split(",")))
    number = max(piles)
    pile = piles.index(number)
    print(str(pile) + "," + str(number))
