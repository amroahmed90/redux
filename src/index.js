import { produce } from "immer";

const book = {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$8.0", // change price to 10
    rating: 4.7, // change rating to 4.8
  },
};

// update using spread operator
const newBook = {
  ...book,
  book: {
    ...book.book,
    price: "$10",
    rating: 4.8,
  },
};

console.log(newBook);
/**
 {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$10.0",
    rating: 4.8,
  },
 }
 */

// update using immer's produce
const newBookImmer = produce(book, (draft) => {
  draft.book.price = "$10";
  draft.book.rating = 4.8;
});
console.log(newBookImmer);
/**
 {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$10.0",
    rating: 4.8,
  },
 }
 */

const arrayOfBooks = ["Book1", "Book2", "Book3"];

const newArrayOfBooks = arrayOfBooks.map((book) =>
  book === "Book2" ? "Book4" : book
);

console.log(arrayOfBooks);
console.log(newArrayOfBooks);
