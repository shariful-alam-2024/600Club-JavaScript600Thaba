
const restaurant = [
     {id:1,name:"Piza Place",menu:[{name:"pepperoni piza",price:12}]},
     {id:2,name:"sushi house",menu:[{name:"salmon sushi",price:15}]}
];
const order = [];
const reviews = [];
const DiscountCode = { "SAVE10": 10, "WELCOME15": 15 };

function getFoodPrice(restaurantName, foodName) {
     const res = restaurant.find(p => p.name === restaurantName)
     if (!res) {
          console.log('restaurant not found');
          
     };
     const val = res.menu.find(item => item.name === foodName);
     const data = val ? val.name : "food item not found";
     return data;
}
console.log(getFoodPrice('sushi house','salmon sushi'));

