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

    name = input('Enter your name: ')
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

