const R = require("ramda");

const pets = [
  { name: "Spike", type: "dog" },
  { name: "Mittens", type: "cat" },
  { name: "Rover", type: "dog" },
  { name: "Fluffy", type: "cat" },
  { name: "Fido", type: "dog" }
];

const dogCheck = pet => pet.type === "dog";
const catCheck = pet => pet.type === "cat";

const result = R.filter(dogCheck, pets);
const result2 = R.reject(dogCheck, pets);
const result3 = R.partition(dogCheck, pets);

console.log("dogs: ", result);
console.log("cats: ", result2);
console.log("partitioned: ", result3);
