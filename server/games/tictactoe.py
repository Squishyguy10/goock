board = [" "]*9
linePositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
playing = True
turn = "X"
while playing:
    print("".join(board))
    position = input()
    board[int(position)] = turn
    for lp in linePositions:
        line = "".join(board[pos] for pos in lp)
        if line == turn*3:
            print("win one" if turn == "X" else "win two")
            playing = False
            break
    turn = "O" if turn == "X" else "X"
    if " " not in board and playing:
        print("draw")
        playing = False
    if playing:
        print("playing")
print("".join(board))
