/* Task 1 : 
Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh" */


function reversedFunction(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

let inputStr = "hello world";

let reversedString = reversedFunction(inputStr);
console.log("Reversed string is:", reversedString);





/* Task 2 : 
Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19 */


function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

let randomNumbers = [2, -5, 10, -3, 7];

let sumResult = sumOfPositiveNumbers(randomNumbers);
console.log("Sum of positive numbers:", sumResult);





/* Task 3: 
Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 */


function findMostFrequentElement(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null; // to handle empty or non-array input
  }

  const frequency = {};
  let maxFrequency = 0;
  let mostFrequentElement = arr[0];

  // Count the frequency of each element in the array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // Access the current frequency of the 'element' from the 'frequency' object
    let currentFrequency = frequency[element];

    // checking the current elements frequency. By default is t is set as 0. if any element is found again from the loop, it will increase the frequency number with 1 each time.
    currentFrequency = (frequency[element] || 0) + 1;

    if (currentFrequency > maxFrequency) {
      maxFrequency = currentFrequency;
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const sampleArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

let frequentElement = findMostFrequentElement(sampleArray);
console.log("Most frequent element is:", frequentElement);





/*  Task 4: 
Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */


function calculator(num1, num2, operator) {
  // console.log(operator);
  let result

  if (operator == "+") {
    return result = num1 + num2;
  }
  else if (operator == "-") {
    return result = num1 - num2;
  }
  else if
    (operator == "*") {
    return result = num1 * num2;
  }
  else if
    (operator == "/") {
    return result = num1 / num2;
  }
  else {
    return "Please provide a valid operator!!"
  }
}

let calculatedResult = calculator(6,2,'*')
console.log("Calculated result is:", calculatedResult);





/* Task 5: 
Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */


function generateRandomPassword(length) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%&*?';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    //   console.log(allChars.length);
    //   console.log(randomIndex);
    //   console.log(allChars.charAt(randomIndex));
    password += allChars.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);

console.log(`Random Generated ${passwordLength} Digit Password is: ${randomPassword}`);





/* Task 6: 
Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */


function romanToInteger(romanNumeral) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  let prevValue = 0;

  //   The loop starts from the right side because Roman numerals use subtractive notation, where smaller numerals before larger ones represent subtraction. By iterating from right to left, we can correctly handle cases where a smaller numeral comes before a larger one and ensure the accurate conversion of Roman numerals to integers.
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentRoman = romanNumeral[i];
    // extracting or getting the value of each roman chars of the input numerals
    const currentValue = romanValues[currentRoman];

    // If the current numeral's value is greater than or equal to the previous numeral's value, we add it to the result; otherwise, we subtract it.
    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    // during each loop, replacing the "prevValue" by "currentValue"
    prevValue = currentValue;
  }

  return `Value of roman ${romanNumeral} is: ${result}`;
}

console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("IV"));
console.log(romanToInteger("XXVII"));





/* Task 7: 
Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */


function findSecondSmallestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined; // to handle empty or non-array input
  }

  let smallestNum = numbers[0];
  let secondSmallestNum = numbers[1];

  if (secondSmallestNum < smallestNum) {
    // Swap or toggle values to ensure smallest and secondSmallest are correct
    [smallestNum, secondSmallestNum] = [secondSmallestNum, smallestNum];
  }

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (currentNumber < smallestNum) {
      smallestNum = currentNumber;
    } else if (currentNumber < secondSmallestNum) {
      secondSmallestNum = currentNumber;
    }
  }
  return secondSmallestNum;
}

let sampleNumbers = [12, 20, 60, 51, 8, 32]

let secondSmallestNumber = findSecondSmallestNumber(sampleNumbers);
console.log("Second smallest number is:", secondSmallestNumber);





/* Task 8:
Write a code on how to calculate the number of vowels and consonants in a string? */

function countVowelsAndConsonants(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase characters.
  str = str.toLowerCase();

  let vowelsCount = 0;
  let consonantsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= 'a' && char <= 'z') {
      // the above mentioned condition checks if the character char is a lowercase letter from 'a' to 'z'. It ensures that only alphabetic characters are considered for counting
      if (vowels.includes(char)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  }

  return { vowels: vowelsCount, consonants: consonantsCount };
}

// Example input string:
const inputString = "Hello, how are you?";
const result = countVowelsAndConsonants(inputString);
console.log("Vowels count:", result.vowels);
console.log("Consonants count:", result.consonants);





/* Task 9:
Write a code to calculate if the string is palindrome? */

/* A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. In other words, a palindrome remains unchanged when its characters are reversed.

Examples of palindrome: "level", "radar", "refer", "civic", 121, 454, or 12321  

Examples of palindromic phrases: "Able was I ere I saw Elba", "Madam, in Eden I'm Adam", "A man, a plan, a canal, Panama!". */


function isPalindrome(string) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original string with its reverse
  const palindrome = str.split('').reverse().join('');
  if (str === palindrome) {
    return `"${string}" is a palindrome`;
  }
  else {
    return `Oops! "${string}" is not a palindrome!!`;
  }
}

// Example string to test:
const exampleString1 = "Level";
const exampleString2 = "12321";
const exampleString3 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(exampleString1));
console.log(isPalindrome(exampleString2));
console.log(isPalindrome(exampleString3));





/* Task 10:
Explain what a callback function is and provide a simple example? */

/* In JavaScript, a callback function is a function that is passed as an argument to another function and is intended to be executed later, usually after the completion of an asynchronous operation which has been called earlier or at a specific event such as timeout, interval, etc. */


// A function that takes two numbers and a callback function as arguments
function addNumbers(a, b, callback) {
  const sum = a + b;
  // Invoke the callback function with the "sum" result as an argument
  callback(sum);
}

// Define a callback function to display the result
function displayResult(result) {
  console.log("Sum is: " + result);
}

// Call the 'addNumbers' function and pass the "displayResult" as callback
addNumbers(5, 2, displayResult);



