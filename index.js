const R = require("ramda");

const person = {
  id: 1,
  name: "Joe"
};

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}.png`;
const getUrlFromPerson = R.compose(
  generateUrl,
  R.propOr("default", "id")
);

const getUpdated = R.converge(R.assoc("avatar"), [
  getUrlFromPerson,
  R.identity
]);

const result = getUpdated(person);

console.log(result);
