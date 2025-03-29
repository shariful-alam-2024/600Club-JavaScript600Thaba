//practice problem ans:1
/*
 Differences Between JavaScript Object and JSON:
 JavaScript Object:
1.Key-value pairs in memory
2.	Can be strings or symbols
3.Any data type (incl. functions)
4.Used within JS code
JSON String:
1.String format
2.Must be strings (in quotes)
3.Strings, numbers, booleans, arrays, objects (no functions)
4.Used for data exchange (APIs, files)

*/
//practice problem ans:2
const user = {
     name: 'shariful alam',
     email: 'sharifullinkdin2024@gmail.com',
     address: {
          street: 'Barishal',
          city: 'Dhaka',
          country: 'Bangladesh'
     },
     orderhistory: [
          { product: 'Laptop', price: 4000, quality: 1 },
          { product: 'Mobile', price: 2000, quality: 2 },
          { product: 'Shirt', price: 150, quality: 3 }
     
     ]
};
const jsonString = JSON.stringify(user,null,2);
console.log(jsonString);
//practice problem ans:3
const shoppingCart = {
     products: [
          { id: 1, name: "Laptop", price: 1200, quantity: 1 },
          { id: 2, name: "Phone", price: 800, quantity: 2 }
     ],
     totalPrice: 2800, // (1200 + 800 * 2)
     userDetails: {
          name: "shariful alam",
          id: "U12345",
          contact: "01829197321"
     }
};

// Convert the object to a JSON string
const jsonString2 = JSON.stringify(shoppingCart, null, 2);

console.log(jsonString2);
//practice problem ans:4

const weather = {
     city: 'DHAKA',
     temperature: 30,
     humidity: 60,
     forecast: [
     
          {
               day: 'Saturday',
               temperature: 55,
          },
          {
               day: 'sunday',
               temperature: 60,
          },
          {
               day: 'Monday',
               temperature: 50,
          },
          {
               day: 'Tuesday',
               temperature: 40,
          },
          {
               day: 'Wednesday',
               temperature: 45,
          },
          {
               day: 'Thursday',
               temperature: 40,
          },
          {
               day: 'Friday',
               temperature: 50,
          },
     ]
};
const force = JSON.stringify(weather, null, 2);

console.log(force);
//practice problem ans:5
const move = {
     title: 'ora 11 jon',
     releaseyear: 2027,
     actor: ['korim', 'tupa', 'jorina', 'nabil', 'kabila', 'jontu', 'tisha'],
     rating: 5

};
const myMove = JSON.stringify(move);
// console.log(myMove);
const myParse = JSON.parse(myMove);
console.log(myParse);
//practice problem ans:6
const projectManagementSystem = {
     projects: [
          {
               name: "Website Redesign",
               description: "Revamp the company website with a modern design.",
               teamMembers: ["Alice", "Bob", "Charlie"],
               deadline: "2025-06-01",
               tasks: [
                    { title: "Design Mockups", assignee: "Alice", status: "In Progress" },
                    { title: "Frontend Development", assignee: "Bob", status: "Pending" },
                    { title: "Backend Integration", assignee: "Charlie", status: "Not Started" }
               ]
          },
          {
               name: "Mobile App Development",
               description: "Develop a mobile application for our services.",
               teamMembers: ["David", "Emma", "Frank"],
               deadline: "2025-09-15",
               tasks: [
                    { title: "UI Design", assignee: "Emma", status: "Completed" },
                    { title: "API Development", assignee: "David", status: "In Progress" },
                    { title: "Testing", assignee: "Frank", status: "Not Started" }
               ]
          }
     ]
};


const result = JSON.stringify(projectManagementSystem, null, 2);

console.log(result);
//practice problem ans:7
const learningPlatform = {
     courses: [
          {
               name: "HTML & CSS",
               duration: "6 months",
               instructor: "Dr. John Doe",
               lesson: [
                    { name: 'chapter-1', duration: '3 hours', difficultyLabel: ['beginner','intermediate','advanced'] }
               ]
          },
          {
               name: "JavaScript",
               duration: "8 months",
               instructor: "Mr. Jane Smith",
               lesson: [
                    { name: 'chapter-1', duration: '3 hours', difficultyLabel: ['beginner', 'intermediate', 'advanced'] }
               ]
          },
          {
               name: "React.js",
               duration: "5 months",
               instructor: "Ms. Alice Johnson",
               prerequisites: ["JavaScript"],
               lesson: [
                    { name: 'chapter-1', duration: '4 hours', difficultyLabel: ['beginner', 'intermediate', 'advanced'] }
               ]
          }
     ]
};
const learningPlatform1 = JSON.stringify(learningPlatform)
console.log(learningPlatform1);


//practice problem ans:8
const productReview = {
     productName: 'mobile',
     reviewer: {
          name: 'shariful alam',
          email: 'sharifullinkdin2024@gmail.com',
          
     },
     rating: 5,
     text: 'This product is very good. I love it.'
};

const productReviewJson = JSON.stringify(productReview, null, 2);

console.log(productReviewJson);