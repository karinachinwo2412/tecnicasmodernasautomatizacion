// // Ecma6
// let name = 'Juan';
// const tax = 0.21;

// console.log(typeof name);

// name = 25.0;

// console.log(typeof name);

// /**
//  * *** Types ***
//  * Number
//  * String
//  * Boolean
//  * Object
//  * Array
//  * Function
//  * Undefined
//  * Null
//  */

// let isOlder = true;
// console.log(!isOlder);
// console.log(isOlder);

// Objects
let person = {
  name: 'Juan',
  age: 25,
  isOlder: true,
};

// JS Objects Dot Notation
// console.log(person.name);

// JS Objects Bracket Notation
// console.log(person['name']);

for (let key in person) {
  console.log(person[key]);
}
