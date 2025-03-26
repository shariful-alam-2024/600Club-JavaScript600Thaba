//practice problem ans:1
const arr1 = ['variable'];
const arr2 = ['condition', 'array', 'loop'];
const arr3 = [...arr2];
const arr4 = [...arr1, ...arr3];
console.log(arr4);
//practice problem ans:2

const fruits = ['Apple', 'Banana', 'Mango'];

const newFruits = [...fruits, 'Papaya', 'orange'];
console.log(newFruits);
//practice problem ans:3
const frontEnd = ['JavaScript'];
const backEnd = ['NodeJS'];
const database = ['MongoDB'];

const newStack = [...frontEnd, ...backEnd, ...database];

console.log(newStack);
//practice problem ans:4
const website = { name: 'mysite', type: 'e - commers', status: 'active' };

const updatedWebsite = { ...website, theme: 'dark' };

console.log(updatedWebsite);
//practice problem ans:5
const young = { name: 'Arif', age: 30, country: 'B-bariya' };
const { country, ...young1 } = young

console.log(young1);
//practice problem ans:6
const car = { make: 'toyota', model: 'corolla', year: 2020 };
const data = { ...car, year: 2032 };

console.log(data);