//practice problem ans:1
const product = {
     name: 'Laptop',
     price: 50000,
     brand: 'Dell',
};
const { name, ...newObj } = product;
console.log(newObj);
//practice problem ans:2
const project = {
     id: 101,
     title: 'Web App',
     budget: 3000,
     client: 'Tech Corp'
};
const { title, ...myProject } = project;
console.log(myProject);
//practice problem ans:3
const programmer = {
     Name2: "Sophia",
     language: 'javascript',
     experience: 5,
     specialty: 'FornTend',
     tools: 'react'
};
const { language, specialty, ...details } = programmer;
console.log(details);
//practice problem ans:4
const array = [10, 20, 3, 30, 300, 3000];
const [fast, second, ...newNumber] = array;
console.log(newNumber);
// //practice problem ans:5
function Rest(a, b,c,d,e,f,g,h,i,j, ...arg) {
     let item = [];
     for (const number of arg) {
          item.push(number);
     }
     
     let sum= 0;
     for (const number1 of item) {
          sum=sum + number1;
     }
    return sum;
};

const result=Rest(1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
console.log(result);
//practice problem ans:5



function funPara(...arg) {
     let dom=[];
     for (const num of arg) {
         dom.push(num);
     
     };
     let mob = 0;
     for (const done of dom) {
          mob=done+mob;
     }
     const ton = dom.length;
     const mon = mob / ton;
     return mon;
};
const result9 = funPara(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(result9);
