while True:
    xor_sum = 0
    piles = list(map(int, input().split(',')))
    n = len(piles)
    for stones in piles:
        xor_sum ^= stones
    
    idx = 0
    for i in range(n):
        if (xor_sum ^ piles[i]) < piles[i]:
            idx = i
    b = xor_sum ^ piles[idx]

    # if it's losing then just take all of a random pile ig
    if idx == piles[idx] - b == 0:
        for i in range(n):
            if piles[i]:
                print(i, piles[i], sep=',')
                break
    else:
        print(idx, (piles[idx] - b), sep=',')
    xor_sum ^= piles[idx] ^ b

    

