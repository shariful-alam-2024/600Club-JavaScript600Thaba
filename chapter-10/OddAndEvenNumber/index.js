function OddNumber(arr) {
     let num = [];
     for (const arrayNumber of arr) {
          if (arrayNumber % 2 === 1) {
               num.push(arrayNumber);
         }
          
     };
     let sum = 0;
     for (const sumArray of num) {
          sum = sumArray + sum;
         
     };
     let len = num.length
     let avg = sum / len;
     return avg;
     
     
};
const result = OddNumber([4,8,2,3]);
console.log(result);
//even number avg or sum


function evenNumber(arr) {
     let evenArray = [];
     for (const number of arr) {
          if (number % 2 === 0) {
               evenArray.push(number);
          }
     };
     let sum = 0;
     for (const numEven of evenArray) {
          sum = numEven + sum;
          
     
     };
     let even = evenArray.length;
     let evenAvg = sum / even;
     return evenAvg;
     
     
};
const result1 = evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
console.log(result1);
//2
function newOddNumber(arr) {
     let newArray = [];
     for (const number of arr) {
          let data = 2 * number;
          newArray.push(data);
          
     }
     return newArray;
     
};
const result2 = newOddNumber([1, 3,  5,  7,  9,  13, 11,17,15, 33]);
console.log(result2);
//3
function ifOddNumber(arr) {
   for (const number of arr) {
     if (number %2 ===1) {
          return 'Odd number found '
     } else {
          return 'No Odd number found';
     }
     
   }
     
};
const result3 = ifOddNumber([2, 4, 6, 8, 10, 12, 14, 122, 144, 166]);
console.log(result3);
//4
function OddNumberAvg(arr) {
     let newArray = [];
    for (const number of arr) {
         newArray.push(number);
     }
     let sum = 0;
     for (const AddNumber of newArray) {
          sum = AddNumber + sum;
     }
     let len = newArray.length;
     let avg = sum / len;
     let finalResult=avg.toFixed(2);
     let result5 =parseFloat(finalResult)
     return result5;
     
};
const result4 = OddNumberAvg([1, 3, 5, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22]);
console.log(result4);
//5
function subEvenNumber(arr) {
     let newArray = [];
     for (const number of arr) {
          if (number%2===1) {
               let sub = number - 1;
              newArray.push(sub);
          }
          
     
     };
   return newArray;
     
};
const result6 = subEvenNumber([1, 2, 3,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20,21, 22]);
console.log(result6);
