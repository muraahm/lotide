// assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false