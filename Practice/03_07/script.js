/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
  capacity: 1000,
  material: "glass",
  lidMaterial: "aluminium",
  content: {
    state: "liquid",
    type: "water",
    quatity: 200,
  },
};

console.log("The bottle object:", bottle);
