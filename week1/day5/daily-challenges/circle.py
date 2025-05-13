import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None, name="Circle"):
        self.name = name
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"{self.name} with radius: {self.radius:.2f} and diameter: {self.diameter:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius, name=f"{self.name} + {other.name}")
        raise TypeError("Can only add another Circle.")

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        raise TypeError("Can only compare with another Circle.")

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        raise TypeError("Can only compare with another Circle.")

def draw_circle(circle, x_offset):
    t = turtle.Turtle()
    t.penup()
    t.goto(x_offset, -circle.radius)  
    t.pendown()
    t.circle(circle.radius) 
    t.penup()
    t.goto(x_offset, circle.radius + 25)  
    t.write(circle.name, align="center", font=("Arial", 16, "normal"))  
    t.hideturtle()


if __name__ == "__main__":
    circle1 = Circle(radius=50, name="Circle1")
    circle2 = Circle(diameter=100, name="Circle2")
    circle3 = Circle(radius=70, name="Circle3")

    print(circle1)  
    print(f"Area of circle1: {circle1.area:.2f}")

    circle4 = circle1 + circle3
    print(circle4)  

    print(circle1 > circle2)  
    print(circle1 == circle2) 

    circles = [circle1, circle2, circle3, circle4]
    circles.sort(key=lambda c: c.radius)
    print("Sorted circles by radius:", [str(circle) for circle in circles])

    # Draw sorted circles with spacing
    turtle.setup(width=1920, height=1080)
    x_offset = -450  # Initial x_offset for the first circle
    for circle in circles:
        draw_circle(circle, x_offset)
        x_offset += 250  # Increment x_offset for the next circle
    turtle.done()