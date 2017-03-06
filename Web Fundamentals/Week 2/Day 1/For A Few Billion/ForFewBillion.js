var reward = 0.01;

for (var days=1; days<31; days++){
    reward = reward * 2;
}
console.log(reward);
// The reward was $10,737,418.24.

var count = 1;
for (reward=0.01; reward<=10000; reward=reward*2){
    count++;
}
console.log(count);
// It would take the servant 21 days to make $10,000


// var Infinitydays = 1;
// for (reward=0.01; reward=Infinity; reward=reward*2){
//     Infinitydays++;
// }
// console.log(Infinitydays);
// It would take the servant [this crashed my browser] days to make Infinity
