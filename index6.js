const R = require("ramda");

const person = {
  firstName: "Hermann",
  lastName: "Hesse"
};

// const fLens = R.lens(R.prop("firstName"), R.assoc("firstName"));
const fLens = R.lensProp("firstName");
const person1 = R.set(fLens, "Zeus", person);

// const firstName = R.view(fLens, person);
// const upperName = R.toUpper(firstName);
// const result = R.set(fLens, upperName, person);

const result = R.over(fLens, R.toUpper, person);
console.log(result);
console.log("clone", person1);
console.log("not muted", person);
