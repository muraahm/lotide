function head(array) {
  let head;
  if (array && array.length) {
    head = array[0] ;
  }
  else {
    head = undefined;
  }
  return head;
}
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const Pass = `Assertion Passed: ${actual} === ${expected}`;
  const Fail = `Assertion Failed: ${actual} !== ${expected}`;
  actual === expected ? console.log(Pass) : console.log(Fail);
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual(1, 2);
