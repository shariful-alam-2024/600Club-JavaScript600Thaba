// //practice problem ans:1
// const book = {
//      bookName: 'javasceipt',
//      price: 750,
//      poetries: 'jonker mahabub'
// };
// console.log(Object.keys(book));

// //practice problem ans:2
// const article = {
//      title: 'Learning Js',
//      catagory: 'proramming'
// };
// const myArticle = Object.keys(article);
// console.log(myArticle);
// const myData = myArticle.includes('author');
// console.log(myData);

// //practice problem ans:3 
// const laptop = {
//      brand: 'Dell',
//      model: 'inspiron',
//      price: 45000,
// };
// for (const key in laptop) {
//      const value = laptop[key];
//      console.log(key, value);

// };
// //practice problem ans:4
// const phone = { brand: 'samsung', model: 'glexy-21', price: 85000 };
// const keys = Object.keys(phone);
// for (const data1 of keys) {

//      console.log(data1, phone[data1]);


// }
// //practice problem ans:5
// const bike = { brand: 'Hero', price: 45000, Model: 'splendor' };
// const data2 = Object.values(bike);
// console.log(data2);



// //practice problem ans:6
// const books = { book1: 'Harry potter', book2: 'the Hobit', book: 'game the thrones' };
// for (const key in books) {
//      const value = books[key];
//      console.log(value);

// };
// //practice problem ans:7
// const numbers = {
//      a: 10,
//      b: 20,
//      c: 30,
//      d: 40,
//      // price: {
//      //      pep:100,
//      // }
// };
// const add = numbers.a + numbers.b + numbers.c + numbers.d;
// console.log(add);

// //practice problem ans:8
// const player = {
//      name: 'messi',
//      team: 'argentina',
//      goals: 91,
// };
// const obj = Object.values(player)
// console.log(obj);

// //practice problem ans:9
// const building = {
//      floors: 10,
//      address: {
//           street: 'main Road',
//           city: 'dhaka',

//      },
//      type: 'Commercial',
// };
// for (const key in building) {
//      if (Object.prototype.hasOwnProperty.call(building, key)) {
//           const element = building[key];
//           console.log(key, ':', element);


//      }
// }