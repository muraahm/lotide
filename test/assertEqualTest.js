const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#assertEqual", () => {
  it("returns 1 == 1", () => {
    assert.deepEqual([1], [1])
  });
  it("returns test == test", () => {
    assert.deepEqual(['test'], ['test'])
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("test", "test");
// assertEqual(1, 2);