// //practice problem ans:1
// let str = 0;

// setTimeout(() => {
//      str++;  // Increment after 3 seconds
//      console.log("");
//      console.log("Updated str:", str);  // Log the updated value of str
// }, 1000);


// //practice problem ans:2
// let num = 131;
// setInterval(() => {
//      num=num+2;
//      console.log(num);
     
// }, 2000);

//practice problem ans:3
let count = 0;

const interval = setInterval(() => {
     console.log("I Eat Rice");
     count++;

     // Stop after 6 prints
     if (count === 6) {
          clearInterval(interval);
     }
}, 2000);  // 2000ms = 2 seconds
//practice problem ans:4

/*   
Default Delay: If the delay parameter is omitted, it defaults to 0 milliseconds.

*/