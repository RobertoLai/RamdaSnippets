const R = require("ramda");

const product = {
  name: "cog",
  price: 100,
  details: {
    shippingInfo: {
      weight: 7,
      method: "ups"
    }
  }
};

let adjustProduct = p => R.merge(p, { name: R.toUpper(p.name) });
let result = adjustProduct(product);
console.log(result);

adjustProduct = R.evolve({
  name: R.toUpper,
  price: R.multiply(2),
  details: {
    shippingInfo: { weight: R.multiply(3) }
  }
});
result = adjustProduct(product);
console.log(result);
