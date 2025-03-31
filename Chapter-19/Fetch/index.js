//practice problem ans:1
/*
The fetch() function is a built-in function of the browser API that requests data from the server and returns a Promise. It usually returns data in JSON, text, or some other format.
To access data from the server, it is basically converted into a javascript object by calling response.json().

*/
//practice problem ans:2
/* 
fetch is used in JavaScript to make HTTP requests, typically to get or send data from/to a server. It's a modern alternative to XMLHttpRequest and provides a cleaner, more readable way to work with asynchronous requests using Promises.
1.Simpler Syntax – Uses Promises, making code more readable and easier to manage.

2.Built-in JSON Parsing – You can easily parse JSON responses with .json().

3.Better Error Handling – Works well with try...catch and async/await.

4.Supports Modern Features – Works well with async/await and allows additional configurations like custom headers, request methods, and more
*/
// practice problem ans:3
/* 
1.promise:
    definition:  A promise is an object that represents the eventual completion or failure of an asynchronous operation. It has two distinct states: pending, fulfilled, and rejected.
    A mechanism to handle asynchronous operations
    Returns:	A Promise,
    Methods:     then(), catch(), finally(),
    Use Case :	Handling async tasks (timeouts, API calls, file reading, etc.)
    example:
//     let myPromise = new Promise((resolve, reject) => {
//      setTimeout(() => resolve("Promise resolved!"), 5000);
//     });

//     myPromise.then(response => console.log(response));


    2. fetch:
    definition:  fetch() is a JavaScript function that provides an interface for making HTTP requests. It is part of the Fetch API, which provides a JavaScript API for accessing and manipulating network requests.
    return: A Promise resolving to a Response object
    method: fetch(),
    Use Case :     Making HTTP requests to server and handling responses (GET, POST, PUT, DELETE, etc.)
    example:
//     fetch("")
//     .then(response => response.json()) // Convert response to JSON
//     .then(data => console.log(data)) // Handle the data
//     .catch(error => console.error("Error:", error));


*/

// practice problem ans:4
fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data=>console.log(data)
)
     .catch(error=>console.log('Error', error))
     
// practice problem ans:5
fetch('https://jsonplaceholder.typicode.com/users/1')
     .then(response => response.json())
     .then(data => console.log(data)
     )
     .catch(error => console.log('Error', error))
