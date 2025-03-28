//practice problem ans:1
/*
Google has a powerful open source engine called v8 installed by default.Which runs JavaScript and web assemblies.Helps to run code written primarily in C++ quickly
The VIP engine first parses the JavaScript code, that is, it understands the structure of the code, and then reads the interpreter code first.Then the IT compiler will transfer some parts to the machine, which will then run faster.
*/
//practice problem ans:2
/*
JavaScript (JS) is a programming language that lets developers create interactive web pages. JavaScript is a lightweight, object-oriented programming language that is used by several websites for scripting webpages.

JavaScript is an interpreted language that executes code line by line, providing more flexibility. It is a single-threaded language that executes one task at a time. JavaScript builds upon other programming languages, updating them based on user interactions and other input.

*/
//practice problem ans:3
/*

Step-by-Step Flow of JIT Compilation
1 JavaScript Code is Parsed → The JavaScript engine reads the code and converts it into an Abstract Syntax Tree (AST).
2 AST is Converted to Bytecode → The Interpreter (Ignition) converts AST into bytecode for execution.
3 Profiling Starts → The Profiler monitors frequently executed functions (hot code).
4 Hot Code is Optimized → The JIT Compiler (TurboFan) compiles hot functions into machine code for faster execution.
5 Optimized Code is Used → The optimized machine code runs instead of bytecode.
6 Deoptimization (If Needed) → If assumptions about the optimized code change, the JIT compiler reverts back to bytecode.


*/

//practice problem ans:4
/*
1. Memory Allocation in JavaScript
When you create variables, objects, or functions in JavaScript, memory is allocated automatically. This memory stays allocated until it is no longer needed.

Types of Memory in JavaScript
Stack Memory: Used for storing primitive values (numbers, strings, booleans) and function calls.

Heap Memory: Used for storing objects, arrays, and functions. Objects are dynamically allocated in the heap.
// let x = 10; // Stored in stack
// let obj = { name: "Alice" }; // Stored in heap, reference stored in stack



Garbage Collection Strategies
JavaScript engines (like V8) use different algorithms to clean up memory:
*/ 