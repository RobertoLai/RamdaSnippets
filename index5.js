const R = require("ramda");

const products = [
  { name: "Jeans", price: 80, category: "clothes" },
  { name: "Hoodie", price: 60, category: "clothes" },
  { name: "Jacket", price: 120, category: "clothes" },
  { name: "Cards", price: 35, category: "games" },
  { name: "iPhone", price: 649, category: "electronics" },
  { name: "Sauce Pan", price: 100, category: "housewares" }
];

// const predicate = R.T;
// const predicate = prod => prod.category === "games";
const predicate = R.where({
  category: R.equals("clothes"),
  price: R.lt(R.__, 90)
});
const getResults = R.pipe(
  R.filter(predicate),
  R.pluck("name")
);
const result = getResults(products);

console.log(result);
