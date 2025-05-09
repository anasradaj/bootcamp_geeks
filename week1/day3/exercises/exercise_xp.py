# Exercise 1 : Geometry
import math
class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius
    def circumference(self):
        self.circumference = 2 * math.pi * self.radius
        return self.circumference
    def area(self):
        self.area = math.pi * (self.radius ** 2)
        return self.area
    def define_circle(self):
        print("A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the center.")

circle1 = Circle(5)
print("Circumference of the circle:", circle1.circumference())
print("Area of the circle:", circle1.area())        
circle1.define_circle()

# Exercise 2 : Custom List Class

class Mylist:
    def __init__(self, letters_list):
        self.letters_list = []
    def add(self, letter):
        self.letters_list.append(letter)
        print(f"{letter} added successfully")
    def reverse_list(self):
        return list(reverse(self.letters_list))
    def sorted_list(self):
        return sorted(self.letters_list)    

def main():
    def user_input():
        print("Welcome to the custom list program!")
        print("You can add letters to the list and perform operations.")
        while True:
            letter = input("Enter a letter (or 'done' to finish): ")
            if letter.lower() == 'done':
                break
            elif len(letter) == 1:
                my_list.add(letter)
                return letters_list
            else:
                print("Please enter a single letter.")


main()        

