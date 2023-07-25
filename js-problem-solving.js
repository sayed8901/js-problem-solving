/* Task 1 : 
Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh" */


function reversedFunction(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversedString += str[i];
    }
    return reversedString;
}

let inputStr = "hello world";

console.log(reversedFunction(inputStr));





/* Task 2 : 
Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19 */


function sumOffPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

let randomNumbers = [2, -5, 10, -3, 7];

console.log(sumOffPositiveNumbers(randomNumbers));





/* Task 3: 
Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 */


