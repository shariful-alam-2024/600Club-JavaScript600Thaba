const restaurant = [
     { id: 1, name: "Piza Place", menu: [{ name: "pepperoni piza", price: 12 }] },
     { id: 2, name: "sushi house", menu: [{ name: "salmon sushi", price: 1500 }] }
];

const order = [];
const reviews = [];
const DiscountCode = { "SAVE10": 5, "WELCOME15": 15 };

function getFoodPrice(restaurantName, foodName) {
     const res = restaurant.find(p => p.name === restaurantName)
     if (!res) {
          console.log('restaurant not found');
          return;
     }
     const val = res.menu.find(item => item.name === foodName);
     const data = val ? val.name : "food item not found";
     return data;
}

function placeOrder(restaurantName, foodItem, discountCode, customer) {
     const foodRestaurant = restaurant.find(r => r.name.toLowerCase() === restaurantName.toLowerCase());
     if (!foodRestaurant) {
          console.log('restaurant not found');
          return;
     }

     const foodItem1 = foodRestaurant.menu.find(p => p.name.toLowerCase() === foodItem.toLowerCase());
     if (!foodItem1) {
          console.log('food not found');
          return;
     }

     let dist = foodItem1.price;

     if (discountCode) {
          const discount = DiscountCode[discountCode];  
          if (discount) {
               const discountAmount = (dist * discount) / 100;
               dist -= discountAmount;
               console.log(`Discount applied (${discountCode}): ${discount}% off`);
          } else {
               console.log('Invalid coupon code');
          }
     }

     console.log(`Final price for ${customer}: $${dist.toFixed(2)}`);
     return dist.toFixed(2);
}
console.log(placeOrder('sushi house', 'salmon sushi', 'SAVE10', 'Rahim'));



