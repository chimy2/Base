'use strict';
// Function
// - fundamental building black in the program
// - subprogram can be used multiple items
// - performs a task or calculates a value

// 1. Function declaration
// function name(parameter1, parameter2) {body [return;]}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// funtion is object in JS
function printHello(){
    console.log('Hello');
    // [return undefined;]
}
printHello();

function log(message){
    console.log(message);
}
log('Hello2');
log(1234);

// 2. Parameter
// premitive parameter : passed by value
// object parameter : passed by reference
function changeName(obj){
    obj.name='coder';
}
const chimy={name:'chimy'};
changeName(chimy);
console.log(chimy);

// 3. Default parameter (added in ES6)
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameter (added in ES6) - ...
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
}
printAll('dreaming', 'coder', 'chimy');

// 5. Local scope
let globalMessage='global'; // global variable
function printMessage(){
    let message='hello'; // local variable
    console.log(message);
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a+b;
}
const result=sum(1, 2);
console.log(`sum : ${sum(1, 2)}, result : ${result}`);

// Early return, early exit
// bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// (1) Function expression
// a function declaration can be called earlier than it is defined(hoisted)
// a function expression is created when the execution reaches it
const print=function(){ // 익명 함수 anonymous function
    console.log('print');
}
print();
const printAgain=print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1, 3));

// (2) Callback function using fuction expression
function randomQuiz(answer, printYes, printNo){
    if(answer==='love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes=function(){
    console.log('yse!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo=function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous function
const simplePrint=function(){
    console.log('simplePrint!');
};
const simplePrint2=()=>console.log('simplePrint!');
const add=(a,b)=>a+b;
const simpleMultiply=(a,b)=>{
    // do something more
    return a*b;
};

// IIFE(Immediately Invoked Function Expression)
(function hello(){
    console.log('IIFE');
})();


// Fun Quiz time ~'^'~
// function calculate(command, a, b)
// command : add, subtract, multiply, divide, remainder
function calculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'subtract':
            return a-b;
        case 'multiply':
            return a*b;
        case 'divide':
            return a/b;
        case 'remainder':
            return a%b;
        default:
            return 'Wrong command';        
    }
}
console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 5, 3));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 5, 3));
console.log(calculate('remainder', 5, 3));
console.log(calculate('wrong', 5, 3));