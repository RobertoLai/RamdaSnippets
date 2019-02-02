const R = require("ramda");

const qsObj = {
  page: "2",
  pageSize: "10",
  total: "205",
  param4: "value4",
  param5: "value5"
};

const createQs = R.pipe(
  R.toPairs,
  R.map(R.join("=")),
  R.join("&"),
  R.concat("?")
);

const result = createQs(qsObj);
console.log(result);
