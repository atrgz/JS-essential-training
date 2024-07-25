/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bottle from "./Bottle.js";

const desktopBottle = new Bottle(
  1000,
  "glass",
  "aluminium",
  "liquid",
  "water",
  650
);

console.log("The desktop bottle object:", desktopBottle);
console.log("The quantity value:", desktopBottle.content.quantity);

desktopBottle.drinkFromBottle(150);

console.log("The quantity value:", desktopBottle.content.quantity);
