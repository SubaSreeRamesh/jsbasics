//  1) Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // all other even numbers are not prime

    // check for factors from 3 up to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    const firstElement = arr[0];

    if (typeof firstElement !== 'number') {
        return "First element is not a number.";
    }

    return isPrime(firstElement) ? `${firstElement} is a prime number.` : `${firstElement} is not a prime number.`;
}

// Example usage:
const arr = [17, 2, 3, 5, 7];
console.log(checkFirstElementPrime(arr)); // Output: "17 is a prime number."

//  2) Write a JavaScript program to find the most frequent item of an array

function findMostFrequent(arr) {
    if (arr.length === 0) return "Array is empty.";

    let frequencyMap = {};
    let mostFrequentItem = arr[0];
    let maxCount = 1;

    for (let item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        if (frequencyMap[item] > maxCount) {
            mostFrequentItem = item;
            maxCount = frequencyMap[item];
        }
    }

    return `The most frequent item is '${mostFrequentItem}' with a frequency of ${maxCount}.`;
}

// Example usage:
const arr = [1, 3, 2, 3, 3, 2, 4, 5, 3];
console.log(findMostFrequent(arr)); // Output: "The most frequent item is '3' with a frequency of 4."

//  3) Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// output: 
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even
// 11 is odd
// 12 is even
// 13 is odd
// 14 is even
// 15 is odd

// 4)Write a JavaScript program to find the sum of squares of the elements of an array

function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }

    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4];
console.log(sumOfSquares(numbers)); // Output: 30

