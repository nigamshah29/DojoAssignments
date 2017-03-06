# def odd_even():
#     for count in range(1,2000):
#         if (count%2 == 1):
#             num = "odd"
#         else:
#             num = "even"
#         print "Number is " + str(count) + ". This is an " + num + " number."
# print odd_even()

def multiply(list,multiplier):
    newlist = []
    for element in list:
        b = element * multiplier
        newlist.append(b)
    return newlist

def layered_multiples(arr):
    new_array = []
    big_array = []
    count = 1  #[6,12,15]
    for element in arr:
        while count <= element:
            new_array.append(1)
            count += 1
            print new_array

        big_array.append(new_array)
        # print big_array

x = layered_multiples(multiply([2,4,5],3))
print x
