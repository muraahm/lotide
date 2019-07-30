const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns [4, 2, 3] == [4, 2, 3]", () => {
    assert.deepEqual([4, 2, 3], [4, 2, 3])
  });
  it("returns [2, 2, 3] == [2, 2, 3]", () => {
    assert.deepEqual([2, 2, 3], [2, 2, 3])
  });
  it("returns [1, 2, 3] == [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 4], [1, 2, 4])
  });
});

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false