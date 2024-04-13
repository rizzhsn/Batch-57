"use strict";
//1. Hello Variable
//Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello World";
console.log(greeting);
//2. Basic Math
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 4;
console.log("sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
//3. Swapping Values
//Instructions: Swap the values of two variables without using a third variable.
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("a:", a, "b:", b);
//4. Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message;
message = "Hello, TypeScript Community!";
// message = 8; // This will throw a an error because message is typed as string and canot be canged to number.
//5. Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers.
let num3 = 10;
let num4 = 4;
console.log("Remainder:", num3 % num4);
//6. Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0;
counter++;
counter += 1;
console.log("counter", counter);
//Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let bool1 = true, bool2 = false, bool3 = true;
console.log("AND Gate:", bool1 && bool2);
console.log("OR Gate:", bool1 || bool2);
console.log("NOT Gate for bool3:", !bool3);
// 8. Compound Assignment
//Instructions: Show examples of using compound assignment operators.
let num = 15;
num += 5;
console.log("+=:", num); // Output: 20
num -= 3;
console.log("-=:", num); // Output: 17
num *= 2;
console.log("*=:", num); // Output: 34
num /= 2;
console.log("/=:", num); // Output: 17
//9. Even or Odd
//Instructions: Write a program to check if a number is even or odd.
let num5 = 7;
if (num5 % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// 10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.
let Age = 18;
if (Age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}
// 11. Grading System
// Instructions: Assign a grade based on a numerical score.
let score = 85;
let grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Grade:", grade);
// 12. Max of Three
// Instructions: Find the maximum of three numbers.
let x = 5, y = 8, z = 3;
let max = Math.max(x, y, z);
console.log("Max:", max);
// 13. Leap Year Checker
// Instructions: Check if a given year is a leap year.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
}
else {
    console.log("Not a leap year");
}
// 14. Fahrenheit to Celsius Converter
// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 32;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Celsius:", celsius);
// 15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.
let number1 = -5;
if (number1 > 0) {
    console.log("Positive");
}
else if (number1 < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
// 16. Multiplication Table
// Instructions: Write a program that prints the multiplication table of a given number up to 10.
let number2 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number2} * ${i} = ${number2 * i}`);
}
