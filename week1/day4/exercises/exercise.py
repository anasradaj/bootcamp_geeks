#  Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [Bengal("Bengal", 2), Chartreux("Chartreux", 3), Siamese("Siamese", 4)]
sara_pets = Pets(all_cats)

sara_pets.walk()

# Exercise 2 : Dogs
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        return (self.weight / self.age) * 10
    def fight(self, other_dog):
        power_fight = self.weight * self.run_speed()
        other_dog_power = other_dog.weight * other_dog.run_speed()

        if power_fight > other_dog_power:
            return f"{self.name} is the winner"
        elif power_fight < other_dog_power:
            return f"{other_dog.name} is the winner"
        else:
            return "It's a draw"
        
dog1 = Dog("Dog1", 5, 20)
dog2 = Dog("Dog2", 3, 25)   
dog3 = Dog("Dog3", 4, 30)

print(dog1.bark())
print(dog2.bark())
print(f"{dog2.name}, {dog2.run_speed():2f} runing speed")
print(dog1.fight(dog2))
print(dog2.fight(dog3))

# Exercise 4 : Family
class Family:
    def __init__(self, last_name, members):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! A new member, {kwargs.get('name', 'unknown')}, has been born into the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        print("Family Members:")
        for member in self.members:
            print(f"  Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

smith_family = Family(last_name="Smith", members=members)


smith_family.born(name='Emma', age=0, gender='Female', is_child=True)

print(smith_family.is_18('Michael'))  # True
print(smith_family.is_18('Emma'))     # False

smith_family.family_presentation()