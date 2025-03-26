
//practice problem ans:1
function myFun(callback) {
     // const result = x;
     // callback(result)
};
function myDon(value) {
     console.log(value);
     
};
myFun(myDon);
//practice problem ans:2
function funArray(obj,callback) {
     const data = obj;
     callback(data);

};
function myCall(val) {
     console.log('this is obj:',val);
     
};
funArray({ name: 'shariful alam', age: 25, profession: 'teacher', department: 'CSE' }, myCall);
//practice problem ans:3

function numberProcessor(x,callback) {
     const data = x / 5;
     callback(data);
};
function dog(value) {
     console.log('the result is:',value);
     
};
numberProcessor(100, dog);

//practice problem ans:4
function greetingHandler(callback) {
     callback();
};

function greeting (value) {
     console.log(value);
     
};
greetingHandler(greeting);