const R = require("ramda");

const teams = [
  { name: "Lions", score: 5 },
  { name: "Tigers", score: 4 },
  { name: "Bears", score: 6 },
  { name: "Monkeys", score: 2 }
];

const sortByScoreDesc = R.sort((a, b) => b.score - a.score);
const getName = R.prop("name");
const getHead = R.head;
// const sorted = R.sort((a, b) => b.score - a.score, teams);
// const topTeam = R.head(sorted);
// const topName = R.prop("name", topTeam);

const getTopName = teams =>
  R.compose(
    getName,
    getHead,
    sortByScoreDesc
  )(teams);

const getTopName2 = teams =>
  R.pipe(
    sortByScoreDesc,
    getHead,
    getName
  )(teams);

const result = getTopName(teams);
const result2 = getTopName2(teams);
console.log(result);
console.log(result2);
