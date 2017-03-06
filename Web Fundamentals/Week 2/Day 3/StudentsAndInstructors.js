// var students = [
//  {first_name:  'Michael', last_name : 'Jordan'},
//  {first_name : 'John', last_name : 'Rosales'},
//  {first_name : 'Mark', last_name : 'Guillen'},
//  {first_name : 'KB', last_name : 'Tonel'}
// ]
//
//
// for(var i=0; i<students.length; i++){
//   console.log(students[i].first_name, students[i].last_name);
// }
// var dictionary = {'007': 'Bond, James Bond', 'a': 1, 'b': 2, 'c': 3, 'd': 4,  'e': 5, 'f': 6, 'g': 7, 'key': 'this is defined SON!!!!!!', 'this_cannot_be_a_var': 'get it dudes?!?!?!'};
// for (var key in dictionary) {
//   var value = dictionary[key];
//   console.log(key + " :: " + value);
// }


// var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// for (var index = 0 ; index < array.length ; index++) {
//   console.log("--> " + array[index]);
// }
// for (var index in array) {
//   console.log(array[index]);
// }

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

for (var key in users) {
  var array = users[key];
  console.log(key);
    for (var index in array){
      var d = array[index];
      console.log(index + " - " + d.first_name, d.last_name + " - " + d.length);
      // // console.log(index + " - " + d.first_name, d.last_name + " - " + index.first_name.length);
      // console.log(first_name.length);

    }
}



 // for(var i=0; i<'Students'.length; i++){
 //   console.log(users['Students'][i].first_name + users['Students'][i].last_name);
 // }



  //  console.log(i + " - " + users.Students[i].first_name + users.Students[i].last_name)+ " - " + Students[i].length;
