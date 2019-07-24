const countOnly = function(allItems, itemsToCount) {
  const result = {}
 
 for (var item of allItems) {
  if(itemsToCount[item] === true) {
    if (result[item] !== undefined) result[item]++;
    else result[item] = 1;
    }
  }
  return result;
 };
 
 
 const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
 };
 
 // TEST CODE
 const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);