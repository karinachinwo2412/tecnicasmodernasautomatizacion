// arrays
const names = ['Juan', 'Pedro', 'Pablo', 'Juana', 'Marco'];

const filtered = names.find((name) => name.startsWith('M'));

const numbers = [1, 2, 3, 4, 5];

for (number of numbers) {
  let total = 0;
  total += number;
}

console.log(numbers.reduce((total, number) => total + number));

const user = {
  namername: 'svergara@test.com',
  tenant: 10,
};

const person = {
  name: "Juan",
  age:30,
  country:"MX"
}

// Object Destructuring
const { name, age, country } = person;

// Spread Operator

const additionalInfo = {
  name: 'Sofia',
  lastName: 'Vergara',
  age: 25,
  country1: 'MX',
};

// for of ===> array
for (const name of names) {
}

// for in ===> object
// for (const key in child) {
//   person[key] = child[key];
// }

// Spread Operator **
const newPerson = { ...user, ...additionalInfo, children: ['Matt', 'Lilly'] };

// Exercise
// v1
function partsSums(numbers) {
  const totals = [];
  const totalIterations = numbers.length;
  for (let index = 0; index < totalIterations; index++) {
    console.log(totals);
    const total = numbers.reduce((accum, current) => accum + current);
    totals.push(total);
    numbers.shift();
  }
  totals.push(0);
  return totals;
}

// v2
function partsSums1(numbers, totals = []) {
  if (numbers.length > 0) {
    totals.push(numbers.reduce((accum, current) => accum + current));
    numbers.shift();
    return partsSums1(numbers, totals);
  }
  totals.push(0);
  return totals;
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

// Find Duplicates
const dups = animals.filter((element, index, array) => array.indexOf(element) !== array.lastIndexOf(element));
// A set is a collection of unique elements.
let uniques = new Set(dups);
// console.log([...uniques]);

// Javascript Promises
// Keep my promise =====> Resolved
// Waiting for promise =====> Pending
// Break my promise =====> Rejected

// Promise
let completed = true;
const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  completed ? resolve('Success') : reject('Error message');
  // }, 5000);
});

console.log('Before Promise');
// Receive promises and send promises
promise
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => resolve(result + ' 2'));
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => resolve(result + ' 3'));
  })
  .then((result) => {
    console.log(result);
  });

// Async / Await
(async function myTest() {
  try {
    const result = await promise;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.log(error);
  }
})();

console.log('After Promise');
console.log('another message');
console.log('another message2');
