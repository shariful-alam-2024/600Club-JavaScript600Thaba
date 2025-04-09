////practice problem ans:1
let x = null;
x ??= 75;
console.log(x);

//practice problem ans:2
const val = 0;
const stock = {
     
};
const nul = val ?? stock;
console.log(nul);

//practice problem ans:3
const productDetails = {
     discount: false,
};
const res = 10 ?? productDetails.discount ;
console.log(res);

//practice problem ans:4
const vehicle = {
     name: "car",
     // engine:'v10'
};

const result = vehicle?.engine ?? "Engine Info Missing";
console.log(result);

//practice problem ans:5
const restaurant = {
     name: "Piza",
     price: 5000,
     
};
const rest = restaurant?.menu ?? "Menu is not available";
console.log(rest);
//practice problem ans:6
const profile = {
     social: {
          facebook: true,
          youtube: false,

     },

};
const data = profile.social?.twitter ?? "Twitter handel not available";
console.log(data);
