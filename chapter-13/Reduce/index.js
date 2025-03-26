//practice problem ans :1

const arr = [5, 10, 15, 20, 25];
const result = arr.reduce((num, val) => num + val, 0);
console.log(result);
//practice problem ans :2
const object = [
     { name: 'shampoo', price: 100 },
     { name: 'soap', price: 50 },
     { name: 'toothpaste', price: 75 }
];

const result1 = object.reduce((acc, item) => acc + item.price, 0);
console.log(result1);

//practice problem ans :3
const product = [
     {
          name: 'pen',
          price: 5,
     }, {
          name: 'Book',
          price: 50,
     }, {
          name: 'Bag',
          price: 100,
     }
];
const product1 = product.reduce((num, val) => num + val.price, 0);

console.log(product1);
//practice problem ans :4
const arr2 = [1, 2, 3, 4, 5];
const data = arr2.reduce((num, val) => num + val, 0);
console.log(data);
//practice problem ans :5
const arr3 = [10, 20, 30, 40, 50];

const maxNumber = arr3.reduce((max, current) => (current > max ? current : max), arr3[0]);

console.log(maxNumber);
//practice problem ans :6
const arr4 = [100, 200, 300, 400];
const arr5 = arr4.reduce((acc, val) => acc + val, 50);

console.log(arr5);