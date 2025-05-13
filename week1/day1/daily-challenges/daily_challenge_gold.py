import datetime

def is_leap_year(year):
    return (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0))


def print_cake(candles):
    print("     " + "_" * 5 + "iiiii" + "_" * 5)
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")


def main():
    date_str = input("Enter your birthdate (DD/MM/YYYY): ")
    
    try:
        birthdate = datetime.datetime.strptime(date_str, "%d/%m/%Y")
    except ValueError:
        print("Invalid date format. Please use DD/MM/YYYY.")
        return
    today = datetime.datetime.now()
    age = today.year - birthdate.year
    if (today.month, today.day) < (birthdate.month, birthdate.day):
        age -= 1
    candles = age % 10
    if is_leap_year(birthdate.year):
        print("It's a leap year! You get two cakes!")
        print_cake(candles)
        print()
        print_cake(candles)
    else:
        print_cake(candles)
if __name__ == "__main__":
    main()