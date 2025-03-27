//practice problem ans:1
const arr = [1, 2, 2, 3, 4, 4, 5];
const uni = [...new Set(arr)];
console.log(uni);
//practice problem ans:2
const num = new Set([10, 20, 10, 30]);
const result = [...num].reduce((acc, x) => acc + x, 0);

console.log(result);
//practice problem ans:3
const data2 = new Set([10, 20, 30]);
data2.delete(10);
console.log(data2);
//practice problem ans:4
const ar = [1, 2, 3, 4, 2, 1, 5, 5];
const val = [...new Set(ar)];

console.log(val);

