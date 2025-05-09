# Exercise 3 : Dogs Domesticated
import random
from exercise import Dog
class Petdog(Dog):
    def __init__(self, name, age, weight, trained):
        super().__init__(name, age, weight)
        self.trained = False
    def train(self):
        print(f"{self.bark()}")
        self.trained = True
    def play(self, *args):
        dog_name = ", ".join([dog.name for dog in args])
        print(f"{dog_name} all play together")
    def do_a_trick(self):
        if self.trained is True:
            tricks = ["does a barrel roll", "play dead", "stand on his back legs", "shakes your hand"]
            print(f"{self.name} can {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet")
    

dog1 = Petdog("Dog", 5, 20, True)
dog2 = Petdog("Dog2", 3, 25, False)
dog3 = Petdog("Dog3", 4, 30, True)
dog1.train()
dog1.do_a_trick()
dog1.do_a_trick()
dog2.do_a_trick()
dog2.play(dog1, dog2, dog3)
