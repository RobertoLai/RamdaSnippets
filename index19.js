const R = require("ramda");

const countries = [
  { cc: "GB", flag: "🇬🇧" },
  { cc: "US", flag: "🇺🇸" },
  { cc: "CA", flag: "🇨🇦" },
  { cc: "FR", flag: "🇫🇷" }
];

// const getCountry = (cc, list) => R.find(R.propEq('cc', cc), list)
const getCountry = R.useWith(R.find, [R.propEq("cc"), R.identity]);

let result = getCountry("FR", countries);
console.log(result);

result = R.useWith(Math.pow, [R.dec, R.inc])(3, 4);
console.log(result);

result = R.useWith(Math.pow, [R.dec, R.inc])(3)(4);
console.log(result);

result = R.converge(R.concat, [R.toUpper, R.toLower])("Hello World!");
console.log(result);
