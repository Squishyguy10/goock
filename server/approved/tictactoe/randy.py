import random

while True:
    board = input()
    print(random.choice([i for i, char in enumerate(board) if char == " "]))
