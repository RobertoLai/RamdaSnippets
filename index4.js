const R = require("ramda");

const products = [
  { name: "Jeans", price: 80, category: "clothes" },
  { name: "Hoodie", price: 60, category: "clothes" },
  { name: "Jacket", price: 120, category: "clothes" },
  { name: "Cards", price: 35, category: "games" },
  { name: "iPhone", price: 649, category: "electronics" },
  { name: "Sauce Pan", price: 100, category: "housewares" }
];

const pLens = R.lensProp("price");
console.log("Prices", R.map(R.view(pLens), products));

const applyDiscount = R.curry((perc, amt) => amt - amt * (perc / 100));

// const adjustPrice = R.over(pLens, applyDiscount(50));

// const adjustPrice = R.ifElse(
//   R.propEq("category", "clothes"),
//   R.over(pLens, applyDiscount(20)),
//   R.identity
// );

//R.unless for the inverse
// const adjustPrice = R.when(
//   R.propEq("category", "clothes"),
//   R.over(pLens, applyDiscount(20))
// );

const adjustPrice = R.cond([
  [R.propEq("category", "clothes"), R.over(pLens, applyDiscount(20))],
  [R.propEq("category", "electronics"), R.over(pLens, applyDiscount(50))],
  [R.T, R.identity]
]);

const result = R.map(adjustPrice, products);
console.log(result);
