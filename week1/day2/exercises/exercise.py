# Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)  

# Exercise 2 : Cinemax 2
family = {}
while True:
    key = input('Enter your name: ')
    if key.lower() == 'quit' :
        break
    value = int(input('Enter your age : '))
    family[key] = value
    if value < 3:
        print('Your ticket is free')
    elif 3 <= value <= 12:
        print('Your ticket is 10$')
    elif value > 12:
        print('Your ticket is 15$')
        
    
    