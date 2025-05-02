//practice problem ans:
/*  Inheritance in JavaScript means that one class (child class or subclass) inherits properties and methods from another class (parent class or superclass).

Inheritance in JavaScript is mainly implemented using the class and extends keywords.

how it work:
1.parent class: where store common and uncommon property.
2.child class: the parent class of every thing get form extends.
3.super() — It is used to call the constructor of the parent class inside the constructor of the child class.
example:
class animal {
     constructor(name, leg, color) {
          this.name = name;
          this.leg = leg;
          this.color = color;
     }
}
class Dog extends animal {
     constructor(name, leg, color, weight) {
          super(name, leg, color);
          this.weight = weight;
     }


}
const myDog = new Dog('tom', 4, 'red', 44);
console.log(myDog);

*/

