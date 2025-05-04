//practice problem ans:1
let mobile="Apple"

switch (mobile) {
     case 'Apple':
          console.log('the brand come from Usa');
          break;
     case 'Samsung':
          console.log('the brand come form korea');
          break;
     case 'xiaomi':
          console.log('the brand come from china');
        break  

     default:
          console.log('Unknown Source');
          
          break;
};
//practice problem ans:2
// const browser = 'chrome';
// if (browser ==="chrome") {
//      console.log('best for developers');
     
// }
// else if (browser === "Brave") {
//      console.log('Privecy focused');
     
// }
// else if (browser==="Safari") {
//      console.log('Apple users choice');
     
//      }

// else {
//      console.log('unsupported browser');
     
// }
//switch case
let browser ="safari"
switch (browser) {
     case 'chrome':
          console.log('best for developers');
          
          break;
     case 'Brave':
          console.log('privacy focused');
          break;
     case 'safari':
          console.log('Apple users choice');
          break;
     

     default:
          console.log('unsupported browser');
          
          break;
};


//practice problem ans:3
let paymentMethod = 'cash'
switch (paymentMethod) {
     case 'cash':
          console.log('pay with cash');
          
          break;
     case credit:
          console.log('pay with credit card');
          
          break;
     case debit:
          console.log('pay with debit card');
          

          break;

     default:
          console.log('invalid payment method');
          
          break;
};
//practice problem ans:4
let membership = 'free';
if (membership==='free') {
     console.log('Access limited content');
     
} else if (membership==='silver'){
     console.log('Access most content');
     
} else if (membership==='gold') {
     console.log('Access premium content ');
     
} else if (membership==='platinum') {
     console.log('Full access');
     
};
//practice problem ans:5
let orderStatus = 'cancelled';
if (orderStatus === 'pending') {
     console.log('your order iis being processed');
     
} else if (orderStatus==='shipped'){
     console.log('your order is on the way');
     
} else if (orderStatus === 'delivered'  ) {
     console.log('your order has been delivered');
     
} else if (orderStatus === 'cancelled') {
     console.log('your order was cancelled');
     
};
//practice problem ans:6
const grade = 'A';
switch (grade) {
     case 'A':
          console.log('Excellent');
          
          break;
     case 'B':
          console.log('good');
          
          break;
     case 'C':
          console.log('Average');
          
          break;
     case 'D':
          console.log('Poor');
          
          break;
     case 'F':
          console.log('Fail');
          
          break;
          

     default:
          break;
}