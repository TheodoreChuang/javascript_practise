"use strict";
// -------------------------------------------------
// Morning Nov 19
// -------------------------------------------------
// Write a JavaScript function named objectMatches to compare two objects to determine if the first object
// contains equivalent property values to the second one.

objectMatches(
  { age: 25, hair: "long", beard: true },
  { hair: "long", beard: true }
);
//true

objectMatches(
  { hair: "long", beard: true },
  { age: 25, hair: "long", beard: true }
);
//false

objectMatches({ hair: "long", beard: true }, { hair: "short", beard: true });
//false

function objectMatches(object1, object2) {
  let doesMatch = true;

  Object.keys(object2).forEach(function(key) {
    if (object1[key] === undefined || object2[key] !== object1[key]) {
      doesMatch = false;
    }
  });

  return doesMatch;
}

// -------------------------------------------------
//
// -------------------------------------------------
