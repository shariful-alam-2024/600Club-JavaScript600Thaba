//practice problem ans:1
const fastIndex = (arr) => {
     return arr[0];

};
console.log(fastIndex([1,2,3,4,5,6,7,8,9,10]));
//practice problem ans:2
const threeNumber = (a, b, c) => {
     return a * b * c;

};
console.log(threeNumber(12, 24, 25));
//practice problem ans:3
const unknown = () => {
     return undefined;

};
console.log(unknown());
//practice problem ans:4
const object = {
     name: 'kabila',
     taka: 100,
};
const amount = () => {
     return (object.taka) / 5;

};
console.log(amount());
//practice problem ans:5
const lastIndex = (arr) => {
     return  arr.length - 1;
 

};

const arrLast = lastIndex([1, 2, 3, 4, 5]);

console.log(arrLast);

const sum1 = (arr) => {
     const sum2 = arr[0] + arr[arr.length - 1];
     return sum2;

};

console.log(sum1([1, 2, 3, 4, 5, 6])); //undefined
//practice problem ans:6
const addNumber = (x = 10, y = 5) => {
     return x + y;

};

console.log(addNumber()); 
console.log(addNumber(100,200)); 