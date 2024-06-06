//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.//

let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends [3] = "Charlie"; // Correcting the error by accessing a valid index.


//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.//

let car = 'Hillux';

console.log("Is car == 'Hillux'? I predict True.");
console.log(car == 'Hillux'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False


//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.//

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True



