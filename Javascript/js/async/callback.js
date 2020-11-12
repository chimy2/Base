'use strict';

// Callback
// JavaScript is synchronous
// - 자바스크립트는 동기적이다
// Execute the code block in order after hoisting
// 호이스팅 후 작성한 순서대로 하나하나씩 동기적으로 실행된다
// Hoisting : var , function declaration
// 호이스팅 : 선언들이 자동으로 제일 위로 올라가는 것

console.log('1');
console.log('2');
console.log('3');
// synchronous : 동기적, 정해진 순서대로 코드가 실행된다
// asynchronous : 비동기적, 언제 코드가 실행될지 예측할 수 없다

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);
setTimeout(()=>console.log('4'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                id==='chimy' && password=='dreamming' ||
                id==='coder' && password==='best'
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user==='chimy'){
                onSuccess({name: 'chimy', role: 'admin'});
            }else{
                onerror(new Error('no access'));
            }
        }, 1000);
    }
}

// 먼저 해보기
const userId='chimy';
const userPassword='dreamming';
const userStorage=new UserStorage();
userStorage.loginUser(userId, userPassword, (id)=>{
    userStorage.getRoles(id, (info)=>{
        console.log(`name: ${info.name}, role: ${info.role}`);
    });
});

// 실습
const userStorage2=new UserStorage();
const id=prompt('enter your id');
const password=prompt('enter your password');
userStorage2.loginUser(
    id, 
    password, 
    user=>{
        userStorage2.getRoles(
            user, 
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>console.log(error)
        )},
    error=>console.log(error)
);










