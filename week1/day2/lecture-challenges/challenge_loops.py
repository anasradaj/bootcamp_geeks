my_dict = {}

while True:
    key = input('Enter a key : ')
    if key.lower() == 'quit' :
        break
    value = input('Enter a value : ')
    my_dict[key] = value
    print(f'Current dictionary: {my_dict}')
