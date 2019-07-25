// TEST/ASSERTION FUNCTIONS // needs some modifications will do on weekend :)

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true
 };
 
let assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
 };

 // ACTUAL FUNCTION

 const middle = function(input) {
  let result = [];
  if (input.length === 0 || input.length === 1 || input.length === 2) {
    return result;
  } else if (input.length % 2 === 1) {
    let midIndex = Math.floor(input.length / 2);
    //console.log(input[midIndex]);
    return input[midIndex];
  } else {
    let secondArr = (input.length / 2);
    let firstArr = (input.length / 2) - 1;
    result.push(input[firstArr], input[secondArr]);
    return result;
  }
 };
 
 
 console.log(middle([1])); // => []
 console.log(middle([1, 2])); // => []
 
 console.log(middle([1, 2, 3])); // => [2]
 console.log(middle([1, 2, 3, 4, 5])); // => [3]
 
 console.log(middle([1, 2, 3, 4])); // => [2, 3]
 console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// TEST CODE

 assertArraysEqual(middle([1], [])) // => []
 assertArraysEqual(middle([1, 2], [])) // => []
 assertArraysEqual(middle([1, 2, 3], [2])) // => [2]
 assertArraysEqual(middle([1, 2, 3, 4, 5], [3])) // => [3]
 assertArraysEqual(middle([1, 2, 3, 4], [2, 3])) // => [2, 3]
 assertArraysEqual(middle([1, 2, 3, 4, 5, 6], [3, 4])) // => [3, 4];