const R = require("ramda");

//Don't use arrow functions, we need new and prototype and this
function carBrand(brandName) {
  this.brandName = brandName;
}
carBrand.prototype.isA = function() {
  return `This car is a ${this.brandName}`;
};

const cars = ["Mercedes", "Ferrari", "Lamborghini"];

const carConstructor = R.construct(carBrand);
const carIs = R.invoker(0, "isA");

const brandNames = R.compose(
  carIs,
  carConstructor
);
const result = R.map(brandNames, cars);
console.log(result);

//jQuery example
//const {invoker, compose, constructN} = R

// $('#sample')
//   .animate({left:'250px'})
//   .animate({left:'10px'})
//   .slideUp()
//
// const animate = invoker(1, 'animate')
// const slide = invoker(0, 'slideUp')
// const jq = constructN(1, $)
//
// const animateDiv = compose(
//   slide,
//   animate({left:'10px'}),
//   animate({left:'250px'}),
//   jq
//   )
//
// animateDiv('#sample')
// animateDiv('#sample2')
