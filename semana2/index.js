let person = {
  name: 'Juan',
  age: 25,
  isOlder: true,
};

// Operators in JS
let x = 15;
let y = 15;
// 1. Arithmetic + - * / %
// console.log(x % y);

// 2. Increment ++
// --x;
// y = y + 5;
// y += 5;
// x -= 2;
// x *= 2;
// console.log(x);

// const name = 'Juan';
// const lastName = 'Alfaro';
// console.log(name + ' ' + lastName);
// // Literal Template String
// console.log(`${name} ${lastName === 'Perez' ? 'Doe' : 'NONE'}`);

// 3. Comparison == != === !== > < >= <=
// Always returns boolean
// == vs ===
// == compare values
// console.log(x == y);
// // === compare values and types
// console.log(x === y);
// console.log(x >= y);

// Ternary operator
const isOlder = person.isOlder ? 'Yes' : 'No';

// Truthy and Falsy values
// Falsy => 0, false, null, undefined, NaN
// Truthy => 1, true, '', '0', [], {}

let myVar;

// if (!myVar) {
//   console.log('myVar does not exist');
// } else {
//   console.log('myVar does exist');
// }

// console.log(myVar ? 'myVar does not exist' : 'myVar does exist');

// Spread operator ==> JS objects and arrays

const { name, age } = person;

// console.log(name);
// console.log(age);

// const numbers = [1, 2, 3, 4, 5];
// const users = ['Paco', 'Juan', 'Pedro'];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);

// // rest operator
// console.log(rest);

// Hoisting
// myFunc('hola', 'mundo', 'como', 'estas');

// Functions -- Function Declaration
function myFunc(...elements) {
  elements.length;
  for (element of elements) {
    console.log(element);
  }
}

// Function expression
const myFunc2 = function (...elements) {
  elements.length;
  for (element of elements) {
    console.log(element);
  }
};
// myFunc2('hola', 'mundo', 'como', 'estas');

// Arrow functions
const greet = (name) => `Hola ${name}`;

const func3 = (name, age) => {
  return { name, age };
};

const greeting = greet('Juan');
const processed = func3('Pablo', 25);

// console.log(greeting);
// console.log(processed);

// arrays
const names = ['Juan', 'Pedro', 'Pablo', 'Juana', 'Marco'];

// function allStartsWithP(names) {
//   for (name of names) {
//     let isIncluded = false;
//     isIncluded = name.startsWith('P');
//   }
//   return isIncluded;
// }

const filtered = names.find((name) => name.startsWith('M'));

const numbers = [1, 2, 3, 4, 5];

for (number of numbers) {
  let total = 0;
  total += number;
}

console.log(numbers.reduce((total, number) => total + number));
