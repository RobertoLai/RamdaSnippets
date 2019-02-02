const R = require("ramda");

const cars = [
  {
    name: "suv",
    doors: 4,
    mpg: 19
  },
  {
    name: "sedan",
    doors: 4,
    mpg: 30
  },
  {
    name: "hybrid",
    doors: 4,
    mpg: 37
  },
  {
    name: "compact",
    doors: 2,
    mpg: 32
  }
];

const fastCars = R.propSatisfies(R.lt(30), "mpg");
const sportCars = R.propSatisfies(R.lt(2), "doors");
const filter = R.allPass([fastCars, sportCars]);
const result = R.filter(filter, cars);
console.log(result);
