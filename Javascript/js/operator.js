'use strict';
// 1. String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);
console.log(`c
h
i
m
y`);
// + 기호를 이용하여 새로운 문자열을 만들 수 있다
// `(Backtick)을 이용하면 간단하게 문자열을 연속적으로 표현할 수 있다

// 2. Numeric operator
console.log(4+2); // 더하기 add
console.log(4-2); // 빼기 subtract
console.log(4*2); // 곱하기 multiply
console.log(4/2); // 나누기 divide
console.log(7%4); // 나머지 remainder
console.log(2**3); // 거듭제곱 exponentiation 

// 3. Increment and decrement operator (++, --)
let counter=2;
const preIncrement=++counter;
// counter=counter+1;
// preIncrement=counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement=counter++;
// postIncrement=counter;
// counter=counter+1;
console.log(`postincrement : ${postIncrement}, counter : ${counter}`);

// 4. Assignment operator
let x=3;
let y=6;
x+=y; // x=x+y;
console.log(x);
x-=y; // x=x-y;
console.log(x);
x*=y; // x=x*y;
console.log(x);
x/=y; // x=x/y;
console.log(x);

// 5. Comparison operator
console.log(10<6); // less than
console.log(10<=6); // less than or equal
console.log(10>6); // greater than
console.log(10>=6); // greater than or equal

// 6. Logical operator : ||(or), &&(and), !(not)
// 연산이 많은 함수나 expression은 무거운 순서대로 뒤에 배치하는 것이 효율적이다
const value1=false;
const value2=4<2;

// ||(or)
console.log(`or : ${value1||value2||check()}`);

// &&(and)
console.log(`and : ${value1&&value2&&check()}`);
// 긴 if문 표현을 간단하게 표현할 때도 사용한다
// nullableObject && nullableObject.something
let nullableObject=null;
if(nullableObject!=null){
    nullableObject.something;
}

// !(not)
console.log(`not : ${!value1}`);

function check(){
    for(let i=0;i<10;i++){
        //wasting time
        console.log(`\'^\'`);
    }
    return true;
}

// 7.Equality
const stringFive='5';
const numberFive=5;

// == loose equality, with type conversion
console.log(stringFive==numberFive);
console.log(stringFive!=numberFive);

// === strict equality, no type conversion
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

// object equality by reference
const chimy1={name:'chimy'};
const chimy2={name:'chimy'};
const chimy3=chimy1;
console.log(chimy1==chimy2); // false
console.log(chimy1===chimy2); // false
console.log(chimy1==chimy3); // true

// equality - puzzler 
console.log(0==false) // true
console.log(0===false) // false
console.log(''==false) // true
console.log(''===false) // false
console.log(null==undefined) // true
console.log(null===undefined) // false

// 8. Conditional operator : if(if, else if, else)
const name='chimy';
if(name==='chimy'){
    console.log('Welcome, Chimy!');
}else if(name==='coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name==='chimy'?'yes':'no');
// 삼항 연산자를 겹쳐쓸 경우 가독성이 떨어지기 떄문에 if문이나 switch문을 쓰는 것이 바람직하다

// 10. Switch statement
// use for multiple if checks, enum-like value check, multiple type checks in TS
const browser='IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
}

// 11. Loop
// while loop, while the condition is truth
// body code is executed
let i=3;
while(i>0){
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do{
    console.log(`do while : ${i}`);
    i++;
}while(i<3);

// for loop, for(begin; condition; step), for(초기값;조건;증가값)
for(i=3;i>0;i--){
    console.log(`for : ${i}`);
}
for(let j=3;j>0;j-=2){
    //inline variable declaration
    console.log(`inline variable for : ${j}`);
}

// nested loop
for(let x=0;x<10;x++){
    for(let y=0;y<10;y++){
        console.log(`x : ${x}, y : ${y}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(i=0;i<=10;i++){
    if(i%2==1) continue;
    console.log(i);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(i=0;i<=10;i++){
    console.log(i);
    if(i==8) break;
}
