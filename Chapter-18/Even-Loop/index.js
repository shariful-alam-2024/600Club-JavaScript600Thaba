//practice problem ans:1

/*
The event loop is essentially a part of JavaScript's Concurrency Model, which works in conjunction with the Call Stack, Web APIs, Callback Queue, and Microtask Queue. It helps JavaScript execute asynchronous code despite being single-threaded.
The event loop works by following the steps below—
1. Call Stack
Since JavaScript is single-threaded, it can do one thing at a time. When a function is called, it is pushed onto the Call Stack and popped when execution is complete.
2. Web APIs
When JavaScript runs in a browser, it uses the browser's Web APIs to handle setTimeout, fetch, DOM Events, etc. These tasks are moved out of the Call Stack and into the Web APIs, and are sent to the Callback Queue after a certain amount of time.
3. Callback Queue
Functions that are returned from Web APIs (such as setTimeout, Event Listeners) are added to the Callback Queue. The event loop then executes the callback functions from this Queue by sending them to the Call Stack.
example:
// console.log("Start");  

// setTimeout(() => {
//     console.log("Timeout Callback");
// }, 0);  

// Promise.resolve().then(() => {
//     console.log("Promise Callback");
// });  

// console.log("End");



*/

//practice problem ans:2

/* 
call stack:
1.It is a stack data structure that keeps track of function execution in JavaScript.
2.LIFO (Last In, First Out)
3.Stores currently executing functions and function calls.
4.Synchronous and asynchronous function execution.
5.Executes functions immediately if the stack is empty.
6.JavaScript engine.
7.Function calls, recursion, synchronous operations.
callback queue:
1.It is a queue where asynchronous callbacks (like setTimeout, event listeners) wait before execution.
2.FIFO (First In, First Out)
3.Holds pending asynchronous callbacks waiting for execution.
4.Only used for asynchronous operations like setTimeout, setInterval, and events.
5.Callbacks execute only when the Call Stack is empty.
6.Event Loop.
7.Callbacks from setTimeout, setInterval, fetch, DOM events.
*/




//practice problem ans:3

/* 
JavaScript is single-threaded, meaning it can execute only one task at a time in the Call Stack. However, it efficiently handles asynchronous operations using the Event Loop, Web APIs, and Task Queues, making it non-blocking and responsive.
// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Callback");
// });

// console.log("End");


*/