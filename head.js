// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');
let head = function(array) {
  let head;
  if (array && array.length) {
    head = array[0];
  } else {
    head = undefined;
  }
  return head;
};

// TEST CODE
module.exports = head;