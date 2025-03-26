//practice problem ans :1
const arr = [20, 30, 40, 50, 60, 70, 80, 90, 100, 101,];
const result = arr.some(num => num > 100);
console.log(result);
//practice problem ans :2
const arr1 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 23, 24, 25, 26, 27, 28];
const arr2 = arr1.every(num => num / 5);
console.log(arr2);

//practice problem ans :3
const words = ['hello', 'world', 'taly', 'mobile'];
const arr3 = words.some(nam => nam === 'hello');
console.log(arr3);
//practice problem ans :4
const age = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
const age1 = age.every(Age => Age > 18);
console.log(age1);
