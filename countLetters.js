let assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
 };

 //worked with Devon
 const countLetters = function(string) {
  let letterCountObject = {};
  string = string.replace(/\s/g, '').toLowerCase();
  for(i = 0; i < string.length; i++) {
    if(!letterCountObject[string[i]]){
      letterCountObject[string[i]] = 1;
    } else {
      letterCountObject[string[i]] += 1;
    }
  }
   return letterCountObject
 }
 console.log(countLetters("lighthouse in the house"));
 