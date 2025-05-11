import game

start_game = game.Game()
results = { "win": 0, "loss": 0, "draw": 0 }

def get_user_menu_choice():
    while True:
        print("\nMenu:\n")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        user_choice = input("Enter your choice (1,2 or 3): ")
        if user_choice not in ["1", "2", "3"]:
            print("Invalid choice. Please try again.")
        else: 
            return user_choice
    

def print_results(results):
    print("\nTotal Games Played: ", results["win"] + results["loss"] + results["draw"])
    print("Game Results:")
    print(f"Wins: {results['win']}")
    print(f"Lost: {results['loss']}")
    print(f"Draws: {results['draw']}")
    

def play_again():
    while True:
        choice = input("Do you want to play again? (y/n): ").lower()
        if choice == 'y':
            print(f"Game number: {results['win'] + results['loss'] + results['draw'] + 1}")
            start_game.play()
            if start_game.winner == "You win!":
                results["win"] += 1                
            elif start_game.winner == "Computer wins!":
                results["loss"] += 1                
            elif start_game.winner == "It's a draw!":
                results["draw"] += 1
        elif choice == 'n':
            break
        else:
            print("Invalid choice. Please enter 'y' or 'n'.\n")
            

def main():
    print("Welcome to Rock, Paper, Scissors!")
    while True :
        user_choice = get_user_menu_choice()
        if user_choice == "1":
            print(f"Game number: {results['win'] + results['loss'] + results['draw'] + 1}")
            start_game.play()
            if start_game.winner == "You win!":
                results["win"] += 1                
            elif start_game.winner == "Computer wins!":
                results["loss"] += 1                
            elif start_game.winner == "It's a draw!":
                results["draw"] += 1
            play_again()
                            
        elif user_choice == "2":
            print_results(results)
        elif user_choice == "3":
            print("\nThank you for playing!")
            print_results(results)
            break

main()


    
    