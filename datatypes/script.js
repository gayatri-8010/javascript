
// Data types in js

// 1. number eg. 1,2,3,4, 4.1233, 3.143, 1.2, 0

console.log(typeof 1);  //number

console.log(typeof 10.11);

let age = 29;

console.log(typeof age);  //number

// 2. bigint

let mathsMarks = 98n;

console.log(typeof mathsMarks); //bigint

// 3. boolean --> true, false

let canVote = false;

console.log(typeof true); //boolean

console.log(typeof canVote); //boolean

// 4. string --> single quotes, double quotes, backticks (string template)

let firstName = "salman";

let lastName = "shaikh";

let city = `pune`;

console.log(typeof city); //string

// 5. undefined , undefined is value as well as a data type

let college;

console.log(college); // undefined

// 6. null,  null is value as well as a data type

let address = null;

console.log(typeof null); // object

// 7. symbol --> to generate unique values

let uniqueValue = Symbol("description");

console.log(typeof uniqueValue);  //symbol

// 8. object (non-primitive)

let person = {
  name: "Salman",
  age: 55,
};

console.log(typeof person);  // object
