'use strict';
// Object 
// one of the Javascript's data type
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object= { key : value };

// 1. Literals and properties
const name='chimy';
const age=24;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}

const chimy={name:'chimy', age:24};
function print2(person){
    console.log(person.name);
    console.log(person.age);
}
print2(chimy);

const obj1={}; // 'object literal' syntax
const obj2=new Object(); // 'object constructor' syntax

// With JavaScript magic(dynamically typed language)
// can add properties later
chimy.hasJob=true;
console.log(chimy.hasJob);

// can delete properties later
delete chimy.hasJob;
console.log(chimy.hasJob);

// 2. Computed properties
// key should be always string
// 동적으로 키에 관련된 value를 가져올 때 사용
console.log(chimy.name);
console.log(chimy['name']);
chimy['hasJob']=true;
console.log(chimy.hasJob);

function printValue(obj, key){
    console.log(obj.key); // obj의 key라는 key값이 가진 value를 불러오는 것이기 때문에 undefined
    console.log(obj[key]);
}
printValue(chimy, 'name');
printValue(chimy, 'age');

// 3. Property value shorthand
const person1={name:'chimy', age:1};
const person2={name:'chimchim', age:2};
const person3={name:'JM', age:3};
const person4=makePerson('Jimin', 4);
console.log(person4);

function makePerson(name, age){
    return{
        // name: name,
        name,
        // age: age
        age
    };
}

// 4. Constructor function
const person5=new Person('Jimin', 5);
console.log(person5);
function Person(name, age){
    //this={};
    this.name=name;
    this.age=age;
    //return this;
}

// 5. in operator : property existence check(key in obj)
console.log('name' in chimy);
console.log('age' in chimy);
console.log('random' in chimy);
console.log(chimy.random);

// 6. for..in vs for..of
// for(key in obj)
for(const key in chimy){
    console.log(key);
}
// for(value of iterable)
const array=[1, 2, 4, 5];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
for(const value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user={name:'chimy', age:'24'};
const user2=user; // user2가 가리키는 reference와 같은
user.name='coder';
console.log(user);

// old way
const user3={};
for(const key in user){
    user3[key]=user[key];
}
console.log(user3);

const user4={};
Object.assign(user4, user);
console.log(user4);
const user5=Object.assign({}, user);
console.log(user5);

// another example
const fruit1={color:'red'};
const fruit2={color:'blue', size:'big'};
const mixed=Object.assign({}, fruit1, fruit2); // 앞에 동일한 key의 인자가 있다면 덮어쓰기된다
console.log(mixed.color);
console.log(mixed.size);

