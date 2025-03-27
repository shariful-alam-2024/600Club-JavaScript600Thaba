//practice problem ans:1
/* 
Due to Automatic Semicolon Insertion (ASI) in JavaScript, in most cases, not including a semicolon (;) at the end of a line will not result in an error. However, in some special cases, syntax errors or unintended behavior may occur.
In this case, there will be no problem if you do not include the semicolon.
// console.log("Hello")
// console.log("World")

The cases where problems arise if a semicolon is not used are discussed below.
1.When two statements are written on one line
// console.log("Hello") console.log("World")  
2.When a newline is given in the return statement
// function test() {
//   return  
//   {
//     value: 10
//   }
// }
// console.log(test())  // Output: undefined
3.When problems arise with the arrow function:

// const func = () => {}  
// (function() {
//   console.log("Hello")
// })()
 at last we can say that It is always best to use semicolons to avoid these unwanted problems.
*/




//practice problem ans:2
/*ReferenceError in JavaScript occurs when you try to access a variable or function that has not been declared or is not allowed to be accessed.
1. Using variables without declaring them
// console.log(a)  // ReferenceError: a is not defined

2. Trying to call a function before it has been defined
// myFunction()  // ReferenceError: myFunction is not defined

3. Trying to access an undeclared variable in an object

*/



//practice problem ans:3
/*
// SyntaxError
1,When the syntax of JavaScript code is incorrect.
2.No (the browser or engine will not allow the code to run directly)
3.console.log("Hello" (parentheses not closed)
4if (true { console.log("Hi") } (parentheses are wrong)
5.Code Parsing Time

//Type error
1.When an operation is performed on a variable or object of the wrong type.
2.Yes (execution starts, but an error occurs at runtime)
3.null.toUpperCase() (method called on null)
4.let num = 5; num.toUpperCase() (string method used on number)
5.During runtime
*/