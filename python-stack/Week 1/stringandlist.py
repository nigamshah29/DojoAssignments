str = "If monkeys like bananas, then I must be a monkey!"
print str.find("monkey")
print str.replace("monkey","alligator")

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

y = ["hello",2,54,-2,7,12,98,"world"]
print y[0]
print y[(len(y)-1)]
z = []
z.append(y[0])
z.append(y[(len(y)-1)])
print z

v = [19,2,54,-2,7,12,98,32,10,-3,6]
v.sort()
print v
first_half = v[:((len(v))/2)]
print first_half
second_half = v[((len(v))/2):]
print second_half
second_half.insert(0,first_half)
print second_half
