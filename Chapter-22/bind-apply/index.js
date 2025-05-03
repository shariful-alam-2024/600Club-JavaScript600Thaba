//practice problem ans:1

const team = {
     name: "bangladesh",
     players: 20,
     play() {
          console.log(`my team is ${this.name} and total players ${this.players}`);
          
     }
};

const tournament = {
     name: "cricket brand team",
     players: 11,
};
const result = team.play.bind(tournament);
result();
//practice problem ans:2
const car = {
     speed: '500kmh-1',
     price: 2000000,
     drive() {
          console.log(`my car speed is: ${this.speed} and  price is: ${this.price}`);
          
     }
};
const bike = {
     speed: '200kmh-1',
     price: 150000,
};
const truck = {
     speed: '350kmh-1',
     price:100000,
}

car.drive.call(bike);
car.drive.call(truck);
//practice problem ans:3
const employee = {
     name: 'shariful alam',
     role: '02560',
     details() {
          console.log(`the employee name is :${this.name} and his role is :${this.role}`);
          
     }
};
const manager = {
     name: "mahabub",
     role: '04523',
};
employee.details.apply(manager);
//practice problem ans:4
const classroom = {
     name: 'class-10',
     students: ['shariful alam', 'kamal', 'robin', 'rubel', 'manju'],
     attendance() {
          console.log(`the name is :  ${this.name}  and the students are :${this.students.join(",")}`);
          
     }
};
classroom.attendance();
const lab = {
     name: 'chemistry lab',
     students: ['minar', 'ksjol', 'tipu', 'komol', 'dipa', 'tina'],
};
const myResult = classroom.attendance.bind(lab);
myResult();