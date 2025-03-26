function duplicateArray(arr) {
     let unique = [];
    for (const str of arr) {
         if (unique.includes(str) === false) {
          unique.push(str);
     }
    }
     return unique;
};
const result = duplicateArray(['kamal', 'sharif', 'tahun', 'harun', 'dbharun', 'sharif']);
console.log(result);
//1

function Duplicate(arr) {
     let unique = [];
     for (const number of arr) {
          if (unique.includes(number)===false) {
               unique.push(number);
          }
     }
     return unique;
};
const result9 = Duplicate([1, 5, 61, 5, 87, 7, 5, 81, 61]);
console.log(result9);
