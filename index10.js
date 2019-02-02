const R = require("ramda");

const add = (a, b) => a + b;
const addC = R.curry(add);
const addCN = R.curryN(2, add);
// const add = a => b => a + b;
const inc = addC(1);

const mult = a => b => a * b;

let result = inc(5);
console.log(result);

result = mult(2)(3);
console.log(result);

const multiply = R.uncurryN(2, mult);
result = multiply(2, 3);
console.log(result);
