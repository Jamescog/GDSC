#!/usr/bin/node

/**
     * Returns a string representation of a triangle with
     *          height n and building symbol building.
     * @param {number} n - the height of the triangle
     * @param {string} building - the building symbol of the triangle
     * @return {string}
     * 
     * Author: Yaekob Demisse - March 8 2023;
 */

const triangleLoop = (n, building) => {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += building.repeat(i) + '\n';
  }
  return result;
}

export default triangleLoop;
// Example usage
console.log(triangleLoop(7, '#'));
