# Introduction to JS Assignments

## Problem 1 - FizzBuzz

```
Write a program that prints the numbers from 1 to 50 and for multiples of '3' print “Fizz” instead of the number
and for the multiples of '5' print “Buzz”.
If the number is divisible by both 3 and 5 print “FizzBuzz”.
```
<img src="terminal-fill.svg" width="50" height="50">

```
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$ cat 1-test.js
#!/usr/bin/node
/* test for problem 1*/

const fizzBuzz = require('./problem-1').fizzBuzz;
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$ ./1-test.js
Fizz
Buzz
FizzBuzz
7
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$
```
---

## Problem 2 - Simple Calculator

```
Write a program that Accepts two numbers and
operator (+, -, *, /, %) and prints the result.

```
<img src="terminal-fill.svg" width="50" height="50">

```
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$ cat 2-test.js
#!/usr/bin/node
/* test for problem 2*/

const cal = require('./problem-2').simpleCalculator;
console.log(cal(5, 3, "+"));
console.log(cal(5, 3, "*"));
console.log(cal(5, 3, "%"));
console.log(cal(5, 3, "?"));
console.log(cal(5, 0, "/"));
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$ ./2-test.js
13
15
2
? is not supported in this calculator
Zero Division Detected! you can't divide 5 by 0
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$
```
---

## Problem 3 - Looping Triangle

```
Write a loop that outputs the following triangle.
#
##
###
####
#####
######
#######
```

<img src="terminal-fill.svg" width="50" height="50">

```
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$ cat 3-test.js
#!/usr/bin/node
/* test for problem 3*/

const triangle = require('./problem-3').triangleLoop;
console.log(triangle(7, "#"));
console.log(`--------`);
console.log(triangle(3, "*"));
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$ ./3-test.js
#
##
###
####
#####
######
#######
--------
*
**
***
~/Desktop/GDSC/GDSC/Introduction_to_JS_assignments$
```
---
