 
# Define the playable spaces on the tic-tac-toe board
board=['0','1','2','3','4','5','6','7','8']
empty = [0,1,2,3,4,5,6,7,8]

#Print's the tic-tac-toe board
def print_board():
  print('       |   |   ')
  print('     '+board[0]+' | '+board[1]+' | '+board[2])
  print('       |   |   ')
  print('     ---------')
  print('       |   |   ')
  print('     '+board[3]+' | '+board[4]+' | '+board[5])
  print('       |   |   ')
  print('     ---------')
  print('       |   |   ')
  print('     '+board[6]+' | '+board[7]+' | '+board[8])
  print('       |   |   ')
  
    
#Input from player
#Allows the player to pick a position on the board (0-8) 
#to place either a X or an O
def player_input(player):
  player_letter = ['X','O']
  valid_input = True
  
#Number input to postion on board
  position = int(input("Player {playerNo}'s turn! Choose a spot to fill in {symbol}: " .format(playerNo = player +1, symbol = player_letter[player])))
  
  if board[position] == 'X' or board[position] == 'O':
    valid_input = False
  
  if not valid_input:
    print("Position already filled")
    player_input(player)
  else:
    empty.remove(position)
    board[position] = player_letter[player] 
    return 1

    
#Checks for winning combintations of Xs and Os
def win_check():
  player_letter= ['O','X']
  win_combo =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  for check in win_combo:
    first_letter = board[check[0]]
    if first_letter != ' ':
      won = True
      for point in check:
        if board[point] !=  first_letter:
          won = False
          break
      if won:
        print_board()
        if first_letter == player_letter[0]:
          print('Player 2 Won!')
        else:
          print('Player 1 Won!')
        break
    else:
      won = False

  if won:
    return 0
  else:
    return 1

#Start the game
def start():
  print('Welcome to Tic Tac Toe')
  player = 0
  while empty and win_check():    
    print_board()
    player_input(player)
    player = int(not player)
  if not empty:
    print("No Winner!")

#driver code
if __name__ == '__main__':
  start()
