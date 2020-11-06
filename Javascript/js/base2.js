// 1. Use strict
// added in ES5
// use this for vanilla Javascript
'use strict';


// 2. Variable(변수)
// let (added in ES6)
// read, write
// only use let if variable needs to change
// ES6는 대부분의 브라우저에서 지원하므로 걱정없이 사용가능하지만
// 호환성이 중요한 경우 babel을 이용하여 ES6이상으로 개발하고 배포 시에 버전을 내려서 개발 

let name='치미';
console.log(name);
name='chimy';
console.log(name);
// Global scope
// Global scope에서 변수를 선언하면 어디서든 변수를 참조할 수 있다
// 어플리케이션이 실행되는 순간부터 항상 메모리에 적재되어있기 때문에
// 최소한으로 사용한다

{
    let name2='chimy block';
    console.log(name);
    console.log(name2);
}
console.log(name);
// console.log(name2); <= error block scope 안에서 선언한 변수는 밖에서 사용할 수 없다
// Block scope
// Block scope에서 변수를 선언하면 Block안에서만 변수를 사용할 수 있다

// var (don't ever use this)
// let이 나오기 전에 사용했던 변수
// 선언하기도 전에 사용할 수 있고(var hoisting) 블록 스코프가 없기 때문에 더이상 사용하지 않는다
// var hoisting (move declaration from bottom to top)
// 호이스팅 : 어디에 선언했는지와 상관없이 선언을 제일 위로 끌어올려 주는 것
// has no block scope
// 블록 스코프가 없다 : 블록을 무시한다, 블록 안에 선언하더라도 밖에서 사용가능하다

// var hoisting
console.log(age);
age=4;
console.log(age);
var age;

// var과 달리 let은 선언 전에 사용하려고 하면 에러가 발생한다
// console.log(age2);
// let age2;

//no block scope
{
    age3=5;
    var age3;
}
console.log(age3);


// 3. Constant(상수)
// read only
// favor immutable data type always for a few reasons
// (1) security : 해커의 공격으로 인한 값의 변경을 막는다
// (2) thread safety : thread들이 동시에 값을 참조할 때 동시에 값을 변경하다면 위험할 수 있다
// (3) reduce human mistakes
const dayInWeek=7;
const maxNumber=5;

// Note
// Immutable data type : primitibe type, frozen object (i.e. object.freeze())
// Mutable data type : all object by default are mutable in JS

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// primitive 타입은 value로 값이 저장됨
// object, box container
// object 타입은 object를 가리키는 reference가 값에 저장된다
// function, first-class function
const count=17; // integer
const size=17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// number - speical numeric values : infinity, -infinity, NaN
const infinity=1/0;
const negativeInfinity=-1/0;
const nan='not a number'/1;
console.log(infinity);
console.log(negativeInfinity);
console.log(nan);

// bigInt (fairly new, don't use it yet)
const bigInt=1234567890123456789012345678901234567890n; // over(-2^53 ~ 2^53)
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char='c';
const brendan='brendan';
const greeting='hello '+brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob=`hi ${brendan}!`; //template literals(String)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);
console.log('value : '+helloBob+', type : '+typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any orher value
const canRead=true;
const test=3<1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
// 값을 없다고 지정
let nothing=null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
// 값이 지정되지 않음
let x;
console.log(`value : ${x}, type : ${typeof x}`);
x=undefined;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
// 주어진 값이 동일하더라도 다른 symbol값을 만들어준다
// 동일한 symbol값을 만들어주고 싶다면 for을 이용한다
// symbol 출력 시 description 이용
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);
const sameSymbol1=Symbol.for('id');
const sameSymbol2=Symbol.for('id');
console.log(sameSymbol1===sameSymbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// object, real-life object, data structure
const chimy={name:'chimy', age:24};
console.log(chimy.age);
chimy.age=20;
console.log(chimy.age);
// const로 선언했기 때문에 chimy가 가리키는 메모리의 포인터는 다른 object로 변경이 불가능 하지만
// 그 안의 값들은 변경이 가능하다


// 5. Dynamic typing : dynamically typed language
let text='hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text=1;
console.log(`value : ${text}, type : ${typeof text}`);
text='7'+5;
console.log(`value : ${text}, type : ${typeof text}`);
text='8'/'2';
console.log(`value : ${text}, type : ${typeof text}`);
// console.log(text.charAt(0)); <= error 
// 현재 변수가 number 타입인데 string에서 사용할 수 있는 charAt을 사용했기 때문에 오류
