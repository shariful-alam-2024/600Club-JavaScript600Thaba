//practice problem ans:1
function myValidation(x) {
     if (typeof (x) ==='string') {
          return x[0];
     } else {
          return "argument should be a string"
     }
};
console.log(myValidation('013'));
//practice problem ans:2
function myArr(arr) {
     if (typeof arr!=='array') {
          return arr[5];
     } else {
          return "please return array"
     }
};
console.log(myArr([1,2,3,4,5,6]));
//practice problem ans:2
function gateArea(length,width) {
     if (typeof length !=='number'|| typeof width !=='number' ) {
          return "please provide a number";
     }
     const mul = length * width;
     return mul;
};
console.log(gateArea(20,20));
