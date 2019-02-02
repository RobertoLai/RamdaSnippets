const R = require("ramda");

const acctDept = {
  name: "Accounts Payable",
  location: "14th floor",
  personnel: {
    manager: {
      fName: "Bill",
      lName: "Lumberg",
      title: "director of stuff and things",
      salary: 75000
    }
  }
};

const itDept = {
  name: "IT",
  location: "remote",
  personnel: {}
};

const result = R.pathOr("Nobody", ["personnel", "manager", "lName"]);
console.log(result(acctDept));
console.log(result(itDept));
