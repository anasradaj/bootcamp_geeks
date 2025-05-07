#Challenge 1 :
number= int(input("Enter a number: "))
length= int(input("Enter a length of the number: "))
multiples= [number * i for i in range(1, length + 1)]
print(f"Given {number} and {length}, the multiples are: {multiples}")


#Challenge 2:
word = input("Enter a word: ")
word2 = ""

for i in range(len(word)):
    if i > 0 and word[i] == word[i-1]:
        word2 += ""
    else: 
        word2 += word[i]

print(word2)





       