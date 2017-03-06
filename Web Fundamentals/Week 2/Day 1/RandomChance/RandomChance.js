function takesQuarters(quarters){
  var winAmount;
  var winChance;
  winAmount = Math.floor(51*Math.random()) + 50;
  winChance = Math.floor(100*Math.random()) + 1;
  while (quarters>0){
    quarters--;
    if (winChance!=11){ //random number that winChance lands on
      return quarters + winAmount;
    }
  }
  return 0;
}
console.log(takesQuarters(300));
