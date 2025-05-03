//practice problem ans:1
const Laptop = {
     brand: "dell",
     getBrand() {
          console.log(this.brand);
          
     }
}
const mobile = {
     brand:"samsang"
}
mobile.getBrand = Laptop.getBrand;
mobile.getBrand();
Laptop.getBrand()

//practice problem ans:2
/* "this" is primarily determined based on which object the function is being called from.
1.global context: here ,this  keywords  primarily determined based on  window object.
2.object method : here , this keywords  primarily determined based on object.
3.class :here ,this keyword  primarily determined based on new object.
4constructor function:here ,this keyword  primarily determined based on new object.
5.normal function: this ,keyword determined based on direct window or main object 
6.event listener: when you want that element tiger
7.arrow : here,this keyword  determined based on window or global .
8.use strict: here this keyword can not catch window.

*/
//practice problem ans:3
const manager = {
     assignWork() {
          task: [];
          console.log(this.task);//here this property ta task or empty array ke mean korse
          
     }
};
manager.assignWork()