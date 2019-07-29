const assertEqual = require('./assertEqual');

const tail = function(inputArray) {//removes fist item from array
  let outputArray = [''];
  for (let i = 1; i < inputArray.length; i++) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
};
// Test Case: Check the original array

module.exports = tail;