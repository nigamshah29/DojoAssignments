def nameSpitter(arg):
    for element in arg:
        print element['first_name'], element['last_name']
        # for val in element.itervalues():
        #     print val
    return

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

print nameSpitter(students)


def dictionary_reader(dict):
    for key, data in dict.items():
        print key
        counter = 0
        for  element in  data:
            counter += 1
            print str(counter) + " - " + element['first_name'] + " " + element['last_name'] + " - " + str((len(element['first_name']) + len(element['last_name'])))
    return


users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

print dictionary_reader(users)
