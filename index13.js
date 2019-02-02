const R = require("ramda");

const throughNByOne = R.curry((N, n) => (n > N ? false : [n, n + 1]));
const throughNByBaseTwo = R.curry((N, n) => (n > N ? false : [n, n * 2]));
let result = R.unfold(throughNByOne(10), 1);
console.log(result);
result = R.unfold(throughNByBaseTwo(1024), 1);
console.log(result);

const iterator = n => (n > 10 ? false : [-n, n + 1]);
result = R.unfold(iterator, 1);
console.log(result);

[...Array(10).keys()].forEach(val => console.log(val));
