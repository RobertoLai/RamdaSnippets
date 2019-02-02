const R = require("ramda");

const product = {
  name: "widget",
  price: 10,
  shippingWheight: "2 lbs",
  shippingCost: 20
};

const getProps = R.pick(["name", "price", "category"]);
const getPropsAll = R.pickAll(["name", "price", "category"]);
const predicate = val => Number(val);
const predicate2 = (val, key) => R.includes("shipping", key);
const predicate3 = (val, key) => !R.includes("shipping", key);
//predicate3 is eq to omit
// const omit = R.omit(["shippingWheight", "shippingCost"]);
// const getPropsBy = omit;
const getPropsBy = R.pickBy(predicate3);


const result = getProps(product);
const result2 = getPropsAll(product);
const result3 = getPropsBy(product);

console.log(result);
console.log(result2);
console.log(result3);
