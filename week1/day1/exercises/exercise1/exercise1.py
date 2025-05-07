# exercise 1 : Hello World
print("Hello World\n"* 4)

# Exercise 2 : Some Math
calcul=int(99**3)*8
print(calcul)

# Exercise 3 : What’s your name ?
name = input("What is your name ?")
my_name = "Anas"
if name == my_name:
    print("Hello Anas, Welcome to the multiverse !")
else:
    print("Hello " + name + ",Welcome to the Matrix !")

# Exercise 4 : Tall enough to ride a roller coaster
height = int(input("What is your height in cm ?"))
if height >= 145:
    print("You are tall enough to ride the roller coaster !") 
else:
    print("Sorry, you need to drink more milk to ride the roller coaster !")

# Exercise 5 : Favorite Numbers
my_favorite_numbers = [26, 14, 9, 46]
my_favorite_numbers.extend([7, 48])
my_favorite_numbers.pop(-1)
freinds_favorite_numbers = [3, 35, 65, 12]
our_favorite_numbers = my_favorite_numbers + freinds_favorite_numbers
print("our favorite numbres are :", our_favorite_numbers)

# Exercise 6: Tuple : Tuples are immutable lists, which means items can’t be changed.


# Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

# Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
for sandwich in sandwich_orders:
    if sandwich == "Pastrami sandwich":
            sandwich_orders.remove(sandwich)
finished_sandwiches = []
while sandwich_orders:
     current_sandwich = sandwich_orders.pop()
     finished_sandwiches.append(current_sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}.")
    