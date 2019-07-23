// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const Pass = 'Assertion Passed: ${actual} === ${expected}';
  const Fail = 'Assertion Failed: ${actual} !== ${expected}';
  actual === expected ? console.log(Pass) : console.log(Fail);
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual(1, 2);