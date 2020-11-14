// Don't give up

// 1. 함수 선언 & 함수 호출
// 함수의 핵심은 함수의 선언과 호출

// 함수 선언
function doSomething(){
    console.log('hello');
}

// 함수 호출
doSomething();

// 2. 값을 리턴하는 함수
// 함수는 특정한 기능을 수행하는 함수와 특정 계산을 수행 후 값을 리턴하는 함수가 있다
function add(a, b) {
    const sum=a+b;
    return sum;
}
const result=add(1, 2);
console.log(result);

// 3. Javascript 언어 공부 방법
/*
    자바스크립트는 html과 달리 UI적인 요소가 없기 때문에 console을 이용하여 
    값을 확인하며 공부하는 것이 좋다
*/

// 4. 함수를 인자로 전달
function doSomething2(add){
    console.log(add);
}
doSomething2(add);
// 함수를 호출없이 전달만 한 것
doSomething2(add()); 
// 함수를 그냥 인자로 전달한 것이 아니라  add를 실행하고 그 리턴 값을 받아와 doSomething 실행

function doSomething3(add) {
    console.log(add);
    const result=add(2, 3);
    console.log(result);
}
doSomething3(add);

const addFun=add;
console.log(add);
console.log(addFun(1, 2));