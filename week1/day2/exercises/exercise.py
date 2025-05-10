# Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)  

# Exercise 2 : Cinemax 2
family = {}
total_price = 0

print('Welcome to the family ticket price calculator!')
print('To exit the program, type "quit" when prompted for your name.')

while True:

    name = input('Enter your name or "quit" to exit : ')
    if name.lower() == 'quit':
        print('Exiting the program...')
        break    
    age = int(input('Enter your age: '))
    family[name] = age
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_price += price

    print(f"{name}, your ticket price is ${price}.")
    print(f"The total price ${total_price}")
    
#  Exercise 3: Zara
brand = {
    "name": "Zara" ,
    "creation_date": 1975 , 
    "creator_name": "Amancio Ortega Gaona" ,
    "type_of_clothes": ["men", "women", "children", "home"] ,
    "international_competitors": ["Gap", "H&M", "Benetton"], 
    "number_stores": 7000 ,
    "major_color": {
    "France": "blue", 
    "Spain": "red", 
    "US": ["pink", "green"]
    },
}

brand["number_stores"] = 2
print("Zara client:",brand["type_of_clothes"])
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print("The last international competitor is:", brand["international_competitors"][-1])
print("The major colors are:", brand["major_color"]["US"])
print("The number of key-value pairs in the brand dictionary is:", len(brand))
print("The keys of the brand dictionary are:", brand.keys())
more_on_zara = {
    "creation_date" : 1975,
    "number_stores": 10,
}
brand.update(more_on_zara)
print("The updated brand dictionary is:", brand["number_stores"])

# Exercise 4 : Some Geography
def describe_city(city, country = "Morocco"):
    print(f"{city} is in {country}.")

describe_city("Cassablanca")   


# Exercise 5 : Random
import random
print("Welcome to the Guess the Number game!")

def guess_number():
    while True:         
        number = random.randint(1, 100)
        user_guess = int(input("Enter your guess (1-100) or 0 to quit: "))
        if user_guess < 0 or user_guess > 100:
            print("Please,i said guess a number between 1 and 100.")
        elif user_guess == 0:
            print("You have chosen to quit the game.")
            break
        elif user_guess == number:
            print(f"Correct! You guessed the number : {number}.")  
            break      
        else:
            print(f"Incorrect! The correct number was {number} and your guess was {user_guess}.")
            
guess_number()


#  Exercise 6 : Let’s create some personalized shirts !
def make_shirt(size, text) : 
    print(f"Thes size of the shirt is {size} and text is {text}.")
make_shirt("small", "Geeks in the hood")

def make_shirt(size= "large",text= "I love Python"):
    print(f"Thes size of the shirt is {size} and text is {text}.")

make_shirt()
make_shirt(size= "medium")
make_shirt("Extra large", "Yes it's a Extra large shirt")

make_shirt(text= "learning paython.", size= "extra small")


# Exercise 7 : Temperature Advice
import random

def get_random_temp():
    if season.lower() == 'winter':
        lower_limit = -10  
        upper_limit = 16
    elif season.lower() in 'autumn':
        lower_limit = 15
        upper_limit = 28
    elif season.lower() == 'spring':
        lower_limit = 18
        upper_limit = 30
    elif season.lower() == 'summer':
        lower_limit = 25
        upper_limit = 40
    else:
        print("Invalid season entered.")
        return None

    return random.uniform(lower_limit, upper_limit)

def get_season(month):
        if 1<= month <= 2 or month == 12:
            return 'winter'
        elif 3 <= month <= 5:   
            return 'spring'
        elif 6 <= month <= 8:
            return 'summer'
        elif 9 <= month <= 11:
            return 'autumn'
        else:
            print("Invalid month entered.")
            return None

def main():
    user_input = input("Enter 'season' to get a random temperature or 'month' to enter a month: ").lower()
    
    if user_input == 'season':
        user_season = input("Enter the season (winter, spring, summer, autumn): ").lower()
        temperature = get_random_temp(user_season)
        if temperature is not None:
            print(f"The random temperature for {user_season} is: {temperature:.2f}°C")
           
    elif user_input == 'month' :
        month = int(input("Enter the month (1-12): "))
        season = get_season(month)
        if season is not None:
            temperature = get_random_temp()
            if temperature is not None:
                print(f"The random temperature for {season} is: {temperature:.2f}°C")
    else:
        print("Invalid input. Please enter 'season' or 'month'.")
   

main()

    

