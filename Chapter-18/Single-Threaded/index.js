//practice problem ans:1
/*
1 Function Execution Starts → The function is invoked and execution moves inside the function body.

2 Local Execution Context is Created → A new execution context is added to the Call Stack.

3 Function Code Executes Line by Line → The function runs synchronously, meaning each statement is executed sequentially.

4 If Another Function is Called → A new execution context is created and pushed onto the Call Stack.

5 Function Returns a Value (if any) → Once execution is complete, the function returns a value to the caller.

6 Execution Context is Removed from the Stack → The function's execution context is popped from the Call Stack.

7 Control Returns to the Caller → The program resumes execution from where the function was called.


//example:
// function greet() {
//     console.log("Hello");
// }
// console.log("Start");
// greet();
// console.log("End");

*/


//practice problem ans:2
/*
Yes, JavaScript is Single-Threaded! 
JavaScript is single-threaded, meaning it executes one operation at a time in a single call stack.
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");


*/