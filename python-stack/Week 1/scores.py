def scores():
    import random
    random_num = random.randint(60,100)
    if (random_num >= 90):
        grade = "A"
    elif (random_num >= 80):
        grade = "B"
    elif (random_num >=70):
            grade = "C"
    else:
        grade = "D"
    return "Score: " + str(random_num) + "; Your grade is " + grade

print(scores())
