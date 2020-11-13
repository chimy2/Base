'use strict';
// Promise is a JavaScript object for asynchronous operation
// - 비동기적인 작업을 수행할 때 callback 대신 유용하게 쓸 수 있는 자바스크립트의 내장객체다
// state : pending(수행중) -> fulfilled(성공상태) or rejected(오류상태)
// Producer vs Consumer 

// 1. Producer
// when new Promise is created, the executor runs automatically
// Promise를 생성하는 순간 executor라는 callback 함수가 바로 실행된다
const promise=new Promise((resolve, reject)=>{
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('chimy');
        reject(new Error('no network'));
    }, 500);
}); 

// 2. Consumers : then, catch, finally
promise.then(value=>{
    console.log(value);
});
promise.then(value=>{
    console.log(value);
})
.catch(error=>{
    console.log(error);
}); // chaining : .으로 계속해서 함수를 호출하는 것
promise.then(value=>{
    console.log(value);
})
.catch(error=>{
    console.log(error);
}).finally(()=>{
    console.log('finally');
});

// Promise chaining
// then 에서는 값을 전달해도 되고 또 다른 비동기인 promise전달도 가능하다
const fetchNumber=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1), 1000);
});
fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1), 1000);
    })
})
.then(num=>console.log(num));

// 4. Error Handling
const getHen=()=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('🐓'),1000);
    });
let getEgg=hen=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${hen}=>🥚`),1000);
    });
const cook=(egg)=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg}=>🍳`),1000);
    });

getHen()
.then(getEgg) // callback함수를 전달할 때 받아온 값을 바로 하나의 함수에 호출하는 경우 생략가능
// . then(hen=>getEgg(hen))
.then(egg=>cook(egg))
.then(meal=>console.log(meal));

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log);

getEgg=hen=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>reject(new Error(`${hen}=>🥚`)),1000)
    });
    
getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log);

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);


getHen()
    .then(getEgg)
    .catch(error=>{
        return '🍞';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);


// callback에서 실습했던 callback hell promise를 이용하여 수정하기

// 원래 코드
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

const userStorage=new UserStorage();
const id='chimy';
const password='dreamming';
userStorage.loginUser(
    id, 
    password, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>console.log(error)
        )},
    error=>console.log(error)
);

// 수정 코드
class UserStorage2{
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(
                    id==='chimy' && password=='dreamming' ||
                    id==='coder' && password==='best'
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(user==='chimy'){
                    resolve({name: 'chimy', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}
const userStorage2=new UserStorage2();
const id2='chimy';
const password2='dreamming';
userStorage2.loginUser(id2, password2)
    .then(userStorage2.getRoles)
    .then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

