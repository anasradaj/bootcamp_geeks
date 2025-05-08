class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Angel", 3)
cat2 = Cat("callie", 5)
cat3 = Cat("Luna", 1)


def the_oldest_cat(cats):
    oldest_cat = cats[0]
    for cat in cats :
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

my_cats = [cat1, cat2, cat3]    

oldest = the_oldest_cat(my_cats)
print(f"The oldest cat is {oldest.name} and is {oldest.age} years old.")

#  Exercise 2 : Dogs

class Dog: 
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        x = self.height * 2 
        print(f"{self.name} jumps {x} cm high!")

davids_dog = Dog("Rex", 50)
print(f"{davids_dog.name} and {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"{sarahs_dog.name} and {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same height.")


# Exercise 3 : Who’s the song producer?

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for element in self.lyrics:
          print(element)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} add successfully")
        else : 
            print(f"{new_animal} already exists")
    
    def get_animal(self):
            print(f"current animals of the zoo : {self.animals}")
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} deleted successfully.")
        else :
            print(f"{animal_sold} does not exists in the zoo.")
    
    def sort_animals(self):
        sorted_animals = sorted(self.animals)  
        grouped_animals = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()  
            if first_letter in grouped_animals:
                grouped_animals[first_letter].append(animal)
            else:
                grouped_animals[first_letter] = [animal]
        self.grouped_animals = grouped_animals
        return grouped_animals
    
    def get_groups(self):
        for letter, animals in self.grouped_animals.items():
            print(f"{letter}: {', '.join(animals)}")

# new_york_zoo = Zoo("New York Zoo")
# new_york_zoo.add_animal("Giraffe")
# new_york_zoo.add_animal("Lion")
# new_york_zoo.add_animal("Elephant")
# new_york_zoo.get_animal()
# new_york_zoo.sell_animal("Lion")
# new_york_zoo.get_animal()
# new_york_zoo.add_animal("Eagle")
# new_york_zoo.add_animal("Bear")
# new_york_zoo.sort_animals()
# new_york_zoo.get_groups()


def main():
    zoo = Zoo("New York Zoo")
    print(f"Welcome to the {zoo.name} management system!")
    while True:
        print("Actions:")
        print("1. Add an animal")
        print("2. Sell an animal")
        print("3. Show all animals")
        print("4. Show sorted animals")
        print("5. Show grouped animals")
        print("6. Exit")
        user_input = input("Enter your choice (1-6): ")
        print("You have selected option", user_input)

        if user_input == "1":
            animal_name = input("Enter the name of the animal to add: ")
            zoo.add_animal(animal_name)
        elif user_input == "2":
            animal_sold = input("Enter the name of the animal to sell: ")
            zoo.sell_animal(animal_sold)
        elif user_input == "3":
            zoo.get_animal()
        elif user_input == "4":
            print(zoo.sort_animals())
            print("Animals sorted successfully.")
        elif user_input == "5":
            zoo.get_groups()
        elif user_input == "6":
            print("Exiting the program,Have a nice day!")
            break
        else:
            print("Invalid choice. Please try again.")

main()












