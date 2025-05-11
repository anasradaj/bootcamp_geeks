import random

class Game:
    def __init__(self):
        self.player = None
        self.computer = None
        self.winner = None

    def get_user_item(self):
        print("\n1. Rock")
        print("2. Paper")
        print("3. Scissors")
        user_item = input("Enter your choice (1,2 or 3): ")
        if user_item == "1":
            user_item = "rock"
        elif user_item == "2":
            user_item = "paper"
        elif user_item == "3":
            user_item = "scissors"
        else:
            print("Invalid choice. Please try again.\n")
            return self.get_user_item()        
        return user_item
        

    def get_computer_item(self):
        computer_item = random.choice(["rock", "paper", "scissors"])
        return computer_item

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "It's a draw!"
        elif (user_item == "rock" and computer_item == "scissors") :
            return "You win!"
        elif (user_item == "paper" and computer_item == "rock") :
            return "You win!"
        elif (user_item == "scissors" and computer_item == "paper"):
            return "You win!"
        else:
            return "Computer wins!"

    def play(self):
        self.player = self.get_user_item()
        self.computer = self.get_computer_item()
        self.winner = self.get_game_result(self.player, self.computer)

        if self.winner == "You win!":
            print(f"You chose {self.player} and the computer chose {self.computer}. {self.winner}\n") 
            return 
        elif self.winner == "Computer wins!":
            print(f"You chose {self.player} and the computer chose {self.computer}. {self.winner}\n")
            return 
        elif self.winner == "It's a draw!":
            print(f"You chose {self.player} and the computer chose {self.computer}. {self.winner}\n")
            return 


        


