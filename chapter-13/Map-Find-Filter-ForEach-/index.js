//practice problem ans :1
const price = [30, 45, 20, 60, 10];
const addPrice = price.map(num => num + 13);
console.log(addPrice);
//practice problem ans :2

const NameList = ['Messi', 'Maradona', 'Pele', 'Zidani', 'Ronaldo'];
const sortList = NameList.filter(num => num.length > 5);
console.log(sortList);

//practice problem ans :3
const number = [10, 15, 20, 25, 30, 35];
const LargeNumber = number.filter(num => num > 20);
console.log(LargeNumber);

//practice problem ans :4
const number1 = [65, 70, 68, 72, 68, 73];
const hight = number1.filter(num => num > 69);
console.log(hight);
//practice problem ans :5
const number2 = [7, 10, 15, 20, 25, 30];
const divideNumber = number2.map(num => num / 3);
console.log(divideNumber);
//practice problem ans :6
const friend = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp'];
const nameThird = friend.map(num => num[2]);
console.log(nameThird);
//practice problem ans :7
const array = ['Tom', 'Harry', 'Sam', 'Jack'];
const array1 = array.find(num => num[0]==='H');
console.log(array1);
//practice problem ans :8
const array2 = [1, 2, 3, 4, 5];
const array3 = array2.forEach(n => console.log(n)
);
console.log(array3);
//practice problem ans :9
const array4 = ['cow', 'goat', 'sheep', 'horse'];
const array5 = array4.forEach(arr => console.log(arr));
 console.log(array5);