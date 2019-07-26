// To check object
const eqObjects = function(obj1, obj2) {
  const obj1Entries = Object.entries(obj1);
  const length1 = obj1Entries.length;
  const length2 = Object.keys(obj2).length;

  if (length1 !== length2) {
    return false;
  }

  for (let [key, value] of obj1Entries) {
    if (value !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// Actual function

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  console.log(`Example label: ${inspect(expected)}`);
  eqObjects(actual, expected) ? console.log("The arrays match.") : console.log("The arrays do not match.");
};
 
// VALIDATION
 
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual(ab, ba); // true
 
const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, abc); // false
 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
 
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);