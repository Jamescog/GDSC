#!/usr/bin/node


/**
     * A simple calculator tht performs arithmetic operations on two numbers
     * 
     * @param {number} num1 -  the first number for calculation
     * @param {number} num2 -  the second number for calculation
     * @param {string} operator - the operator of the calculation(the main guy)
     * @return {number} result  - returns the result of the operation
     *                          - based on given operator
     * 
     * Author: Yaekob Demisse - March 8 2023;
*/

const simpleCalculator = (num1, num2, operator) => {
    const validOperators = ["+", "-", "*", "/", "%"]
    if (!validOperators.includes(operator)) {
        throw new Error(`${operator} is not supported in this calculator`);
    }

    if (operator == "+") {
        return num1 + num2;
    }
    else if (operator ==="-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        if(num2 == 0) {
            throw new Error(`
            Zero Division Detected! you can't divide ${num1} by ${num2}
            `);
        }
        else {
            return num1 / num2;
        }
    } else {
        return num1 % num2;
    }
}

export default simpleCalculator;
