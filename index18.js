const R = require("ramda");

const sample = [
  { name: "Sally", age: 29, height: 65 },
  { name: "Zac", age: 29, height: 72 },
  { name: "Johnny", age: 32, height: 63 },
  { name: "Johnny", age: 31, height: 63 },
  { name: "Lisa", age: 28, height: 63 },
  { name: "Bob", age: 29, height: 66 },
  { name: "Allen", age: 29, height: 66 }
];

const result = R.sortWith(
  [
    R.ascend(R.prop("name")),
    R.ascend(R.prop("age")),
    R.ascend(R.prop("height")),

  ],
  sample
);

console.log(result);
