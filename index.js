function manipulateArray(arr, mulBy4, add9){
    var x = mulBy4(arr);
    console.log("After multiplying each element by 4");
    console.log(x);
    var y = add9(arr);
    console.log("After adding 9 to each element");
    console.log(y);
}
function mulBy4(arr){
    var res = [];
    for(var i = 0 ; i < arr.length; i++){
        var x = arr[i] * 4; 
        res.push(x); 
      }
      return res;
}
function add9(arr){
    var res=[];
    for(var i = 0 ; i < arr.length; i++){
        var x = arr[i] + 9; 
        res.push(x);
      }
      return res;
}

var a= [5,6,7,8,2,1];
manipulateArray(a, mulBy4, add9);