let product = [
     { id: 1, name: "smartphone", price: 30000, stock: 20 },
     { id: 2, name: "laptop", price: 50000, stock: 10 },
     { id: 3, name: "laptop1", price: 500, stock: 10 },
     { id: 4, name: "laptop2", price: 5000, stock: 10 },
     { id: 5, name: "laptop3", price: 50, stock: 10 },
     { id: 6, name: "laptop4", price: 500000, stock: 10 },
     { id: 7, name: "laptop5", price: 5000000, stock: 10 },
     { id: 8, name: "laptop6", price: 10000, stock: 10 },
     { id: 9, name: "laptop7", price: 20000, stock: 10 },
     { id: 10, name: "laptop8", price: 40000, stock: 10 }
];
let Cart = [];
let orders = [];

function AddToCart(ProductId,Quantity) {
     const SelectProduct = product.find(p => p.id === ProductId);
     if (!SelectProduct) {
          return "product not found ";
     };
     if (SelectProduct.stock < Quantity) {
          return " product not enough "
     };
     SelectProduct.stock -= Quantity;
     const CartItem = {
          ProductId: SelectProduct.id,
          Quantity: Quantity,
          Price: SelectProduct.price,
     };
     Cart.push(CartItem);
     return ` ${SelectProduct.name} added to cart. Quantity: ${Quantity}`


};


function viewCart() {
     if (Cart.length===0) {
          console.log('cart is empty ');
          
     } else {
          console.log('cart content');
          Cart.forEach(item => {
               const productDetails = product.find(p => p.id === item.ProductId);
               console.log(`ID: ${item.ProductId}, Name: ${productDetails.name}, Quantity: ${item.Quantity}, Price: ${item.Price}`);
               
          })
          
     }
};


function PlaceOrder(params) {
     if (Cart.length === 0) {
          return('your cart is empty');

          
     };
     let totalPrice = 0;
     Cart.forEach(item => {
          totalPrice += item.Price * item.Quantity;
     });

     const order = {
          totalPrice:totalPrice,
     }
     orders.push(order);
     Cart = []; 

     return "Order placed";

}
console.log(AddToCart(1, 10)); 
console.log(AddToCart(2, 1)); 
viewCart(); 
console.log(PlaceOrder()); 
console.log(orders); 

