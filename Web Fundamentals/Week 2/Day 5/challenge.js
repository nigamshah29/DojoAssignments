function removeDups(arr){
  var start_stop = true;
  while(start_stop){
    for(var i=0; i<arr.length; i++){
      if (arr[i]==arr[i+1]){
          for (var j=0; j<arr.length;j++){
            if ((arr[j+1]>arr[j])&&(arr[j]==arr[j-1])){
              arr[j] = arr[j+1];
              arr.length = arr.length - 1;
            }
            else {
              start_stop = false;
            }
          }
        }
      }
    }
var ans = removeDups([1,1,1,2,2,3,3,3]);
console.log(ans);
