//PRACTICE PROBLEM ANS 1:
/* 
class:
1.definition: A blueprint to create object.
2.purpose:defines properties and method.
3.creation:created using the class keyword.
4.syntax: class Dom{
    constructor(parameter){
     }
   }
5.reusability:to create a multiple object.

object:
1. definition:an instance create using a class
2.purpose:Holds actual data and can use defined methods
3.creation:Created using {} or the new keyword
4.syntax:const person1 = new Person("Alice"); or const person2 = {name: "Bob"};
5.reusability:Individual object is specific and not reusable as a blueprint
*/
//PRACTICE PROBLEM ANS 2:

/*
In JavaScript, a class instance refers to an object that is created from a class using the new keyword. Think of a class as a blueprint, and the instance as a real thing built from that blueprint.
//example:
// class Worker {
//      constructor(id,name,hoursWorked) {
//           this.id = id;
//           this.name = name;
//           this.hoursWorked = hoursWorked;

//      }
// };
// const worker = new Worker(101, 'Tom Cruise', 40);
// console.log(worker);
*/
//PRACTICE PROBLEM ANS 3:
class Vehicle {
     constructor(brand,model,price,) {
          this.brand = brand;
          this.model = model;
          this.price = price;
          
     }
};
const BMW = new Vehicle('BMW', 'X5', 12000000);
const BMW1 = new Vehicle('Tesla', 'model 3', 40000);
console.log(BMW,BMW1);
//PRACTICE PROBLEM ANS 4
class Worker {
     constructor(id,name,hoursWorked) {
          this.id = id;
          this.name = name;
          this.hoursWorked = hoursWorked;

     }
};
const worker = new Worker(101, 'Tom Cruise', 40);
console.log(worker);
//PRACTICE PROBLEM ANS 5
class Library {
     constructor(name,books,location) {
          this.name = name;
          this.books = books;
          this.location = location;

     }
};
const library = new Library('Central Library', 10000, 'Dhaka');
console.log(library instanceof Library );
//PRACTICE PROBLEM ANS 6
class Classroom {
     student = [];
     constructor(section,teacher) {
          this.section = section;
          this.teacher = teacher;
     }
}
const classroom = new Classroom('A', 'MR.Plumber');
console.log(classroom);
//PRACTICE PROBLEM ANS 7
class Product {
     constructor(name, category, stock) {
          this.name = name;
          this.category = category;
          this.stock = stock;


     }
};
const mob = new Product('Mobile', "Electronic", 50);
console.log(mob);

//PRACTICE PROBLEM ANS 8
class Product1 {
     constructor(name, category, stock=0) {
          this.name = name;
          this.category = category;
          this.stock = stock;
     }
}
const mob1 = new Product1('Mobile', "Electronic", );
console.log(mob1);