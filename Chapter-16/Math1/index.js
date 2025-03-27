//practice problem ans:1
const num = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(num);
//practice problem ans:2
const large = Math.max(21, 35, 67);

console.log(large);
//practice problem ans:3
const near = Math.round(7.6);
const near1 = Math.round(7.6);
console.log(near, near1);
//practice problem ans:4
const small = Math.floor(9.8);
const small1 = Math.floor(9.8);

console.log(small, small1);
//practice problem ans:5
const big = Math.ceil(3.1);
const big1 = Math.ceil(3.1);
console.log(big, big1);
//practice problem ans:6
const Abs = Math.abs(-34);
console.log(Abs);
//practice problem ans:7
function Decimal(x) {
     const Ran = Math.round(x);
     const Fol = Math.floor(x);
     const Ceil = Math.ceil(x);
     return `Round:${Ran}, Floor:${Fol}, Ceil:${Ceil}`;
};

console.log(Decimal(3.8));