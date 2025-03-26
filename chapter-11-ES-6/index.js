function add(x=0,y=0) {
     const sum = x + y;
     return sum;
};
const result100 = add(4,5);
console.log(result100);
//1
function addition(x=0,y=0,z=0) {
     const num = x + y + z;
     return num;
};
const add1 = addition(1);
console.log(add1);
//2
function addMony(x=50,y=0) {
     const add = x + y;
     return add;
};
const result = addMony();
console.log(result);
//4

function income(monthIncome=0,name='anonymous') {
     return `Name: ${name} and ${monthIncome}`
};
const data = income(undefined,'kabliola');
console.log(data);
////5
function squire(x=1) {
     const result = x * x;
     return result;
};
const resultSquire = squire(4);
console.log(resultSquire);
//6
function product(productValue=1,productName='unknown product') {
     return `productName: ${productName} productValue: ${productValue}`;
};
const result1 = product(100);
console.log(result1);
//7
function Book(bookList=['JS book']) {
     return `${bookList}`;
};
const result2 = Book(['math', 'javascript', 'English', 'Bangla', 'general math']);
const result3 = Book();
 console.log(result2);
console.log(result3);
//8
 function totalPrice(object={price:10,quantity:1}) {
     return `${object.price} and ${object.quantity}`
};
const result4 = totalPrice({ price:200, quantity:4});
const result5 = totalPrice();
 console.log(result4);
console.log(result5);
////8
 function newArray(arr=[5,10,15]) {
      let data = [];
      for (const number of arr) {
           let array = 2 * number;
           data.push(array);
            
      };
      return data;

};
const result6 = newArray([1,2,3,4,5,6,7,8,9,10,11,12,13]);
const result7 = newArray();
 console.log(result6);
 console.log(result7);
////9
function simpleInterest(object={principal:1000,rate:5}) {
     const result = (object.principal * object.rate) / 100;
     return result;
};
const result8 = simpleInterest();
const result9 = simpleInterest({principal:2000, rate:20});
 console.log(result8);
console.log(result9);
////10
 
function taxHishab(object={salary:50000,tax:10}) {
     const myTax = (object.salary * object.tax) / 100;
     return myTax;
};
const result10 = taxHishab({salary:5000000,tax:50});
const result11 = taxHishab();
 console.log(result10);
 console.log(result11);
 