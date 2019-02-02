const R = require("ramda");

const getName = () => Promise.resolve("Hermann");
const getHobbies = () =>
  new Promise((res, rej) => {
    setTimeout(res(["Philosophy", "Astronomy", "Nathematics"]), 500);
  });

Promise.all([getName(), getHobbies()])
  // .then(([name, hobbies]) => ({ name, hobbies }))
  // .then(R.zip(["name", "hobbies"]))
  // .then(R.fromPairs)
  // .then(
  //   R.pipe(
  //     R.zip(["name", "hobbies"]),
  //     R.fromPairs
  //   )
  // )

  .then(R.zipObj(["name", "hobbies"]))
  .then(console.log);
