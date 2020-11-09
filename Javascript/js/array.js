'use strict';
// Array
// 1. Declaration
const arr1=new Array();
const arr2=[1, 2];

// 2. Index position
// 🍀🍁🍓🍈🌺🍌🌰🍄🌸🍑🍎🍏 🌵🍉🌾🌱🌴🌽🌹🍒🍅🌷🍍🍇🌿🌻🌲🌳🍋🍐
const fruits=['🍒', '🍉', '🍓'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Loop over an array
// print all fruits
// a. for
for(let i=0;i<fruits.length;i++){
    console.log('a. for : '+fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log('b. for of : '+fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array){
    console.log('c. forEach : '+fruit, index, array);
});
fruits.forEach((fruit, index)=>console.log('c. forEach short : '+fruit, index));

// 4. Addition, deletion, copy
// push : add an item to the end 
fruits.push('🍇', '🍌');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍑', '🍋');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
// splice(index[, number of delete, data to add])
fruits.push('🍇', '🍋', '🍑');
console.log(fruits);
fruits.splice(4, 1);
console.log(fruits);
fruits.splice(3, 1, '🍎', '🍍');
console.log(fruits);

// combine two arrays
const fruits2=['🍇', '🍌'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.log(fruits);
console.log(fruits.indexOf('🍒'));
console.log(fruits.indexOf('🍎'));

// includes
console.log(fruits.includes('🍒'));
console.log(fruits.includes('🍋'));

// lastIndexOf
fruits.push('🍒');
console.log(fruits);
console.log(fruits.indexOf('🍒'));
console.log(fruits.lastIndexOf('🍒'));
