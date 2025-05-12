class TicTacToe:
    def __init__(self):
        self.reset_board()
        self.history = {"X wins": 0, "O wins": 0, "Ties": 0}
    
    def reset_board(self):
        self.board = [' '] * 9
        self.current_player = 'X'

    def display_board(self):
        print(f'''
         {self.board[0]} | {self.board[1]} | {self.board[2]} 
        ---+---+---
         {self.board[3]} | {self.board[4]} | {self.board[5]} 
        ---+---+---
         {self.board[6]} | {self.board[7]} | {self.board[8]} 
        ''')

    def player_input(self):
        while True:
            try:
                position = int(input(f"Player {self.current_player}, choose your position (1-9): ")) - 1
                if position in range(9) and self.board[position] == ' ':
                    self.board[position] = self.current_player
                    break
                else:
                    print("Invalid position. Try again.")
            except ValueError:
                print("Please enter a valid number.")

    def check_win(self):
        win_conditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
            [0, 4, 8], [2, 4, 6]             # Diagonals
        ]
        for condition in win_conditions:
            if self.board[condition[0]] == self.board[condition[1]] == self.board[condition[2]] != ' ':
                return True
        return False

    def check_tie(self):
        return ' ' not in self.board

    def switch_player(self):
        self.current_player = 'O' if self.current_player == 'X' else 'X'

    def play(self):
        print("Welcome to Tic-Tac-Toe!")
        self.reset_board()
        self.display_board()
        while True:
            self.player_input()
            self.display_board()
            if self.check_win():
                print(f"Player {self.current_player} wins!")
                self.save_history(f"{self.current_player} wins")
                break
            if self.check_tie():
                print("The game is a tie!")
                self.save_history("Ties")
                break
            self.switch_player()

    def save_history(self, result):
        if result in self.history:
            self.history[result] += 1
        else:
            self.history[result] = 1
    
    def display_history(self):
        print("Game History:")
        for key, value in self.history.items():
            print(f"{key}: {value}")
            
def main_menu():
    game = TicTacToe()
    while True:
        print("Main Menu:")
        print("1. Play Game")
        print("2. View History")
        print("3. Quit")

        choice = input("Choose an option: ")
        
        if choice == '1':
            game.play()
        elif choice == '2':
            game.display_history()
        elif choice == '3':
            print("Thank you for playing! Goodbye!")
            break
        else:
            print("Invalid choice. Please select 1, 2, or 3.")




if __name__ == "__main__":
    main_menu()