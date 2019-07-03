/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;

  for (i = 0; i < preferences.length; i++) {
    // Formula explanation
    // preferences[i] value is current Spichonee, let's call preferences[i] equals A
    // being in love triangle requires:
    // Spichonee A to love Spichonee on (A - 1) index of preferences array, let's call preferences[A - 1] equals B
    // In order to complete the love triangle,
    // Spichonee B is required to love Spichonee on (B - 1) index of preferences array
    // and preferences[B - 1] value must be equal to (i + 1) which is the position (not index) of Spichonee A
    // In general (i + 1) gives us lover of current Spichonee,
    // preferences[prefernces[i] - 1] gives us the Spichonee which is loved by current Spichonee

    if (preferences[preferences[preferences[i] - 1] - 1] === i + 1) {
      counter++;
    }
  }

  // Counter was divided by 3 as each love triangle occures three times on the loop
  return Math.floor(counter / 3);
};
