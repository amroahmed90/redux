import { compose, pipe } from "lodash/fp";

const trim = (str) => str.trim();
const convertToUpperCase = (str) => str.toUpperCase();
const generateMessage = (str) => `Hello, ${str}! Good morning!`;

const resultWithChaining = generateMessage(
  convertToUpperCase(trim("   john   "))
); // hard to read
// console.log(resultWithChaining);

// simple solution from loadash
// from right to left => compose
const resultWithCompose = compose(generateMessage, convertToUpperCase, trim);
// from left to right => pipe
const resultWithPipe = pipe(trim, convertToUpperCase, generateMessage);

// console.log(resultWithCompose("   john   "));
// console.log(resultWithPipe("   john   "));

/*Lesson - Currying: transformation of a function with multiple arguments into a sequence of single-arument functions */
// suppose you want to customize the message
const generateMessageCurry = (greeting) => (name) =>
  `Hello, ${name}! ${greeting}!`;

const resultWithComposeCurry = pipe(trim, convertToUpperCase, generateMessageCurry("Good morning"));
// console.log(resultWithComposeCurry("   john   "));


/* Lesson - immutability */
// inside redux, data should be immutable.
// Mutability in Objects - recap
// Objects are copied by reference
// which mean that when creating a copy of an object, both new variables will point to the same memory location
// changing one variable will affect the other
const personMutable = { name: "John", age: 22 }
const updatedMutable = personMutable;
// const updated = Object.assign({}, person, { name: "Bill" });
console.log("Mutable", personMutable); // { name: "John", age: 22 }
console.log("Mutable", updatedMutable); // { name: "John", age: 22 } => notice that the original object is unchanged
personMutable.name = "Zack";
console.log("Mutable", personMutable); // { name: "Zack", age: 22 } => name is changed
console.log("Mutable", updatedMutable); // { name: "Zack", age: 22 } => name is unchanged

// Immutability in Objects
// 1. Object.assign
const personImmutable = { name: "John", age: 22 }
const updatedImmutable = Object.assign({}, personImmutable, { name: "Bill" });
console.log("Immutable - assign", personImmutable); // { name: "John", age: 22 }
console.log("Immutable - assign", updatedImmutable); // { name: "Bill", age: 22 } => notice the changed value of the new object
personImmutable.name = "Zack";
console.log("Immutable - assign", personImmutable); // { name: "Zack", age: 22 } => name is changed
console.log("Immutable - assign", updatedImmutable); // { name: "Bill", age: 22 } => name is unchanged

// 2. Spread operator
const personImmutableSpread = { name: "John", age: 22 }
const updatedImmutableSpread = { ...personImmutableSpread, name: "Bill" };
console.log("Immutable - spread", personImmutableSpread); // { name: "John", age: 22 }
console.log("Immutable - spread", updatedImmutableSpread); // { name: "Bill", age: 22 } => notice the changed value of the new object
personImmutableSpread.name = "Zack";
console.log("Immutable - spread", personImmutableSpread); // { name: "Zack", age: 22 } => name is changed
console.log("Immutable - spread", updatedImmutableSpread); // { name: "Bill", age: 22 } => name is unchanged

