//practice problem ans:1
class Hotel {
     constructor(name,roomNumber,cost) {
          this.name = name;
          this.roomNumber = roomNumber;
          this.cost = cost;
     };
     getName() {
          return this.name;
     }
};
const hotel = new Hotel('padma', 500, 2000);
const val = hotel.getName();
console.log(val);
//practice problem ans:2
class Empoly {
     constructor(name,postName,salary) {
          this.name = name;
          this.postName = postName;
          this.salary = salary;
     };
     getSalary() {
          return this.salary;
     }
};
const empoly = new Empoly("zankar dada", 'CEO', 400000);
const don = empoly.getSalary();
console.log(don);
//practice problem ans:3
class Library {
     books = [];
     addBooks(book) {
          return this.books.push(book);
     }
     hasBook(book) {
          return this.books.includes(book);
     }
     
} 
const boss = new Library();
boss.addBooks("gora");
console.log(boss.hasBook("pother pachali"));

//practice problem ans:4
class ShoppingCard {
     products = [];
     totalPrice = 0;
     addToCard(productName,ProductPrice) {
          this.products.push(  productName,  ProductPrice );
          // this.products.push({ name: productName, productPrice: ProductPrice });
          this.totalPrice +=  ProductPrice;
     };
     getTotalPrice() {
          return this.totalPrice ;
     };
     // showProduct() {
     //      return this.products;
     // }
};

const val2 = new ShoppingCard();
val2.addToCard("t-shart", 500);
console.log(val2.getTotalPrice());
// console.log(val2.showProduct());

