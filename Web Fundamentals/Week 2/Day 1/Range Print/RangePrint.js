var start;
var end;
var skip;

function printRange(start,end,skip){
    while((start+skip)<end){
        start = start + skip;
        console.log(start);
    }
}
printRange(0,100,3);
