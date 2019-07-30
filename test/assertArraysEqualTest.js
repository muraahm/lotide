const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns [7, 2, 3] == [7, 2, 3]", () => {
    assert.deepEqual([7, 2, 3], [7, 2, 3])
  });
  it("returns [2, 2, 3] == [2, 2, 3]", () => {
    assert.deepEqual([2, 2, 3], [2, 2, 3])
  });
  it("returns [1, 0, 3] == [1, 0, 3]", () => {
    assert.deepEqual([1, 0, 4], [1, 0, 4])
  });
});




// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false