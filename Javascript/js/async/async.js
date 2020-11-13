'use strict';
// async & await
// clear style of using promise
// Promise만 써도 코드가 간결한 경우도 있고 async나 await으로 대체해야 깔끔한 경우도 있다

// 1. async
function fetchUser(){
    // do network request in 10 secs...
    return 'chimy';
}
const user=fetchUser();
console.log(user);

function fetchUser2() {
    return new Promise((resolve, reject)=>{
        // do network request in 10 secs...
        return 'chimy';
    });
}
const user2=fetchUser2();
console.log(user2);

// async 키워드를 이용하면 기본 함수가  Promise로 자동으로 변환된다
function getName(){
    return new Promise((resolve, reject)=>{
        resolve('chimy');
    });
}
async function getName2() {
    return 'chimy';
}
console.log(getName());
console.log(getName2());

// 2. await
// async 함수 안에서만 사용 가능
function delay(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}
async function getApple(){
    await delay(1000);
    return '🍎';
}
async function getBanana() {
    await delay(1000);
    return '🍌';
}
function getBanana2() {
    return delay(1000)
    .then(()=>'🍌');
}
function pickFruits() {
    return getApple().then(apple=>{
        return getBanana().then(banana=>`${apple} + ${banana}`);
    });
}
pickFruits().then(console.log);

async function pickFruits2(){
    const apple=await getApple(); 
    const banana=await getBanana(); 
    return `순서대로 기다렸다가 다운 ${apple} + ${banana}`;
}
pickFruits2().then(console.log);

async function pickFruits3(){
    const applePromise=getApple();
    const bananaPromise=getBanana();
    const apple=await applePromise; 
    const banana=await bananaPromise; 
    return `병렬적으로 다운 ${apple} + ${banana}`;
}
pickFruits3().then(console.log);

// 3. Useful Promise APIs
// 서로 연관되지 않아 병렬적, 동시다발적 다운이 가능할 때 사용
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits=>fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

//