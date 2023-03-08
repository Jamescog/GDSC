#!/usr/bin/node

/**
 * Returns a string message based on the given number.
 *
 * @param {number} n - the number to evaluate
 * @return {string} - "Fizz" if the number is divisible by 3,
 *                    "Buzz" if the number is divisible by 5,
 *                    "FizzBuzz" if the number is divisible by both 3 and 5,
 *                    the number itself as a string otherwise
 *
 * Author: Yaekob Demisse - March 8 2023;
 */

const fizzBuzz = (n) => {
    if (!Number.isInteger(n)) {
        throw new Error("Parameter must be an integer type")
    } else {

        if (n % 3 == 0 && n % 5 == 0) {
            return "FizzBuzz";
        } else if (n % 3 == 0) {
            return "Fizz";
        } else if (n % 5 == 0) {
            return "Buzz";
        } else {
            return n.toString();
        }
    }
}

export default fizzBuzz;

// Example usage:
// console.log(fizzBuzz(3)); // Output: "Fizz"
// console.log(fizzBuzz(5)); // Output: "Buzz"
// console.log(fizzBuzz(15)); // Output: "FizzBuzz"
// console.log(fizzBuzz(7)); // Output: "7"
