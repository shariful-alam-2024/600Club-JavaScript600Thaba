//practice problem ans:
const array = [
     {
          id: 1,
          name: "mukta",
          address: "mirpur",
     },
];
console.log(array[0].address);
// //practice problem ans:
const library = {
     name: "city library",
     books: [
          {
               id: 1,
               title: "javascriptbasic",
               price: 300,
          }, {
               id: 2, title: "python essential",
               price: 500,
          },
     ],
};
console.log(library.books[1].price);
//practice problem ans:3
const school = {
     name: "green high",
     student: [
          {
               id: 1,
               name: 'samiha',
               
          },
          {
               id: 2,
               name: 'kamal'
          },
     ],
};
console.log(school.student[0].name);

//practice problem ans:4
const shop = {
     item: [
          {
               name: 'pen',
               stock: 100,
          },
          {
               name: 'notebook',
               stock: 50,
          },
     ],
};
console.log(shop.item[1].stock);
//practice problem ans:5
const moves = {
     title: 'inception',
     director: {
          name: "nolan",
          age: 50,
          
     },
     rating: 8.8,
};
console.log(moves.director.name);
//practice problem ans:6
const game = {
     name: 'football',
     players: [
          {
               id: 1,
               name: "lionel messi",
               
          },
          {
               id: 2,
               name: "cristano ronaldo"
          },
     ],
};
console.log(game.players[0].name);
//practice problem ans:7
const vehicle = {
     type: 'car',
     feature: {
          color: 'red',
          brand: {
               name: 'toyota',
               model: 'corolla'
          },
     },
};
console.log(vehicle.feature.brand.name);
