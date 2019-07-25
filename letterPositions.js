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

const letterPositions = function(sentance) {
  let results = {};

  sentance = sentance.toLowerCase();
  for(i = 0; i < sentance.length; i++) {
    if(sentance[i] !== " "){
      if(!results[sentance[i]]){
         results[sentance[i]] = [i];
       } else {
         results[sentance[i]].push(i);
       }
    }
  }
   return results
 }
 console.log(letterPositions("lighthouse in the house"));
 
 assertArraysEqual(letterPositions('hello'), {h:[0], e:[1], l:[2,3], o:[4]})