def cointoss():
    print "Starting the program..."
    heads = 0
    tails = 0
    import random
    for count in range(1, 5001):
        num = random.randint(1,100)
        if num <= 51:
            heads += 1
            side = "head"
        else:
            tails += 1
            side = "tail"
        print "Attempt #" + str(count) + ": Throwing a coin... It's a " + str(side) + "! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
    print "Ending the program, thank you!"

print cointoss()
