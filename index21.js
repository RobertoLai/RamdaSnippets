const R = require("ramda");

const qs = `?page=2&pageSize=10&total=205`;
const log = R.tap(console.log);
const parseQs = R.compose(
  R.fromPairs,
  log,
  R.map(R.split("=")),
  log,
  R.split("&"),
  log,
  R.tail,
  log
);
let result = parseQs(qs);
console.log(result);
