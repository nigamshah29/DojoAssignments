# def draw_stars(list):
#     counter = 0
#     for element in list:
#         while counter < element:
#             counter += 1
#         print '*' * counter
#
# x = [3,4,5,6]
# print draw_stars(x)


def draw_stars(list):
    counter = 0
    for element in list:
        while counter < element:
            counter += 1
            if type(element) is str:
                lower = element.lower()
                print lower[:1] * counter
            else:
                print '*' * counter
                

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
print draw_stars(x)
