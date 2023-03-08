#!/usr/bin/node


 /**
     * @param {number} n - the number
     * Returns: - "Fizz" -if the number is multiple of 3
     *          - "Buzz" -if the number is the multiple of 5
     *          - "FizzBuzz" - if the number is divisible by both 3 and 5
     * 
     * Author: Yaekob Demisse - March 8 2023.
     */

const fizzBuzz = (n) => {
   if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz")
   } else if (n % 3 == 0) {
        console.log("Fizz")
   }
   else if (n % 5 == 0) {
        console.log("Buzz")
   }
}

export default fizzBuzz;