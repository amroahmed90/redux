import { compose, pipe } from "lodash/fp";

const trim = (str) => str.trim();
const convertToUpperCase = (str) => str.toUpperCase();
const generateMessage = (str) => `Hello, ${str}! Good morning!`;

const resultWithChaining = generateMessage(
  convertToUpperCase(trim("   john   "))
); // hard to read
console.log(resultWithChaining);

// simple solution from loadash
// from right to left => compose
const resultWithCompose = compose(generateMessage, convertToUpperCase, trim);
// from left to right => pipe
const resultWithPipe = pipe(trim, convertToUpperCase, generateMessage);

console.log(resultWithCompose("   john   "));
console.log(resultWithPipe("   john   "));

/* Currying: transformation of a function with multiple arguments into a sequence of single-arument functions */
// suppose you want to customize the message
const generateMessageCurry = (greeting) => (name) =>
  `Hello, ${name}! ${greeting}!`;

const resultWithComposeCurry = pipe(trim, convertToUpperCase, generateMessageCurry("Good morning"));
console.log(resultWithComposeCurry("   john   "));
