//practice problem ans:1
const data1= "I brought an orange";
const text = data1.replace(/orange/g, "grap");
console.log(text);
//practice problem ans:2
const text1 = "I like to have apple and banana";
const text2 = /ana/;
console.log(text2.test(text1));
//practice problem ans:3
const str = "I am eating apple.apple is good.apple help me a lot";
const result = str.replace(/apple/g, "JavaScript");
console.log(result);
