const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');





assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false