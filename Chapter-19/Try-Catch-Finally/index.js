//practice problem ans:1
let serverData = '{"product":"date","price":450}'
// let serverData='Data corrupted'
try {
     const result = JSON.parse(serverData);
     console.log(result);
     
} catch (error) {
     console.log('invalid json format');
     
}
//practice problem ans:2
function validateInput(Email) {
     let email = "test@example.com";
     try {
          if (!Email.includes('@')) {
               throw new Error("Invalid Email Address");
               
          }
          const result = Email === email;
          console.log(result);
          
     } catch (error) {
          console.error(error.message)
          

     }
};
validateInput("test@example.com");
//practice problem :3
try {
     const val = "{role:'CEO',weaklyHours:1000}";
     const res = JSON.parse(val);
     console.log(res);
     
} catch (error) {
     console.log("weak is over");
     
}
//practice problem :4
function stringOnlyParse(str) {
     if (str === null|| str === ''|| str === undefined) {
          return "input must be a string";
     }
     if (typeof str!=='string') {
          return "input must be a string";

     }
     return `${str}`
};

console.log(stringOnlyParse('hello'));
console.log(stringOnlyParse(''));
console.log(stringOnlyParse(null));
//practice problem ans:5
function deletingAccount(simulation=false) {
   
     try {
          console.log("deleting account");
          if (simulation) {
               throw new Error("somting went worng");
               
          }
          console.log("deleting account successfully");
          
          
     } catch (error) {
          console.log("failed to delete account");
          
     } finally {
          console.log("Account deletion attempt finished");
     }
};
deletingAccount(false);
