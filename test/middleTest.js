const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [1} ==> []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [2, 2, 3] ==> [2]", () => {
    assert.deepEqual(middle([2, 2, 3]), 2);
  });
  it("returns [1, 2, 3, 4, 5, 6] == [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
});

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);


// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);