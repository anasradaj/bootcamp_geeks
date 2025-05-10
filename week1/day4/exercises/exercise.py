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

# smith_family = Family("Smith", members)
# smith_family.born(name='Emma', age=0, gender='Female', is_child=True)
# print(smith_family.is_18('Michael'))  
# print(smith_family.is_18('Emma'))     
# smith_family.family_presentation()

# Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if self.is_18(name):
                    print(f"{name}'s power is: {member['power']}")
                    return
                else:
                    raise Exception(f"{name} is not over 18 years old and cannot use their power.")
        print(f"Member {name} not found in the family.")

    def incredible_presentation(self):
        print("*Here is our powerful family **")
        super().family_presentation()


incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]
incredibles_family = TheIncredibles("Incredibles", incredible_members)


incredibles_family.incredible_presentation()
incredibles_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Baby Jack')
incredibles_family.incredible_presentation()
