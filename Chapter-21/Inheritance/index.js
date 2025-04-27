//practice problem ans:1
/* In javascript ,inheritance is a concept that allows one object (or class) to reuse properties and methods of another object or class .it is  a way to create a new class or object  based on existing one ,helping to write  cleaner,reuseable,and organized code 
1:reusability:you do not write the same code again and again. you can define common functionality once and reuse it in child classes.
2.organization: help to keeps your code structured by building a clear hierarchy.
3.extensibility:you can extend  existing functionality without modifying the original  code ,making it easer to maintain and scale.
*/
////practice problem ans:2

/* In JavaScript, creating a relationship between parent and child classes is done using the extends keyword. This sets up inheritance, meaning the child class can access and use properties and methods from the parent class
1.extends:to create a link from child and parent class.
2.super():call the constructor of the parent class.
3.inheritance:Allows child to use parent’s methods and properties
*/
//practice problem ans:2
const bus = {
     brand: "BRTC",
     color: "red",
     hasAc: true,
     capacity: 60,
     foulType: "diesel"
};
const truck = {
     brand: "Tata",
     color: "green",
     capacity: '3000 kg',
     hasTrailer: true,
     foulType: 'diesel'
};
const bike = {
     brand: "hero hunda",
     capacity: 4,
     foulType: "PETROL",
     color: "black",
     hasCarrier: false,
};

class Vehicle {
     constructor(brand,capacity,color,foulType) {
          this.brand = brand;
          this.capacity = capacity;
          this.color = color;
          this.foulType = foulType;
     }
};
class bus1 extends Vehicle{
     constructor(brand, capacity, color, foulType, hasAc) {
          super(brand, capacity, color, foulType);
          this.hasAc = hasAc;
          
     };
     BusDisplay() {
          return this.hasAc;
     }
};
class truck1 extends Vehicle {
     constructor(brand, capacity, color, foulType, hasTrailer ) {
          super(brand, capacity, color, foulType);
          this.hasTrailer = hasTrailer;

     };
     TruckDisplay() {
          return this.hasTrailer;
     }
};
class bike1 extends Vehicle {
     constructor(brand, capacity, color, foulType, hasCarrier) {
          super(brand, capacity, color, foulType);
          this.hasCarrier = hasCarrier;

     };
     TruckDisplay() {
          return this.hasCarrier;
     }
};
const myBike = new bike1("hero hunda",2,'red','petrol',false);
const myTruck = new truck1("Tata", "3000 kg", "green", "diesel", true);
const myBus = new bus1("BRTC", "red", 60, "diesel", true);

console.log(myBike);
console.log(myTruck);
console.log(myBus);

//practice problem ans:3
const animal = {
     name: 'Elephant',
     legs: 4,
     diet: "harbour",
     habited: "Savannah",
     lifeSpan: "60-70"
};
const bird = {
     name: "Eagle",
     wingspan: '2-4 km',
     diet: "Carnivore",
     can_fly: true,
     habitat: "Mountains"
};
const fish = {
     name: 'clownfish',
     fins: 7,
     diet: "Omnivore",
     habitat: 'Coral reefs',
     water_type:'salt-water'
}
class Animal {
     constructor(name,diet,habitat) {
          this.name = name;
          this.diet = diet;
          this.habitat = habitat;
     }
};
class Animal1 extends Animal{
     constructor(name, diet, habitat, legs, lifeSpan) {
          super(name, diet, habitat);
          this.legs = legs;
          this.lifeSpan = lifeSpan;
     }

};
class Bird1 extends Animal {
     constructor(name, diet, habitat, wingspan, can_fly) {
          super(name, diet, habitat);
          this.wingspan = wingspan;
          this.can_fly = can_fly;
     }

};
class Fish1 extends Animal {
     constructor(name, diet, habitat, wingspan, can_fly) {
          super(name, diet, habitat);
          this.wingspan = wingspan;
          this.can_fly = can_fly;
     }

};
const myAnimal = new Animal1('Elephant', "harbour", 'Savannah', 4, "60-70");
const myBird = new Bird1("Eagle", "Carnivore", "Mountains", '2-4 km',true);
const myFish = new Fish1('clownfish', 'Omnivore', 'Coral reefs', 'salt-water',7);
console.log(myAnimal);
console.log(myBird);
console.log(myFish);
