const R = require("ramda");

const person = {
  name: "Sally Jones"
};

// alternate getName - using propOr to avoid the error
// const getName = R.propOr('Default', 'name')

// watch out here: in Ramda 0.26 R.prop doesn't rise an error when undefined provided
// const getName = R.tryCatch(R.prop("name"), R.always("Default"));
const getName = R.prop("name");

const getUpperName = R.pipe(
  getName,
  R.tryCatch(R.toUpper, R.always("default value"))
);
const result = getUpperName(undefined);
console.log(result);
