//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperature parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE

//Psuedo-code:
//Start
//set inital celsius temperature variable
//define function and parameter
//convert celsius paramter to fahrenheit (Equation)
//return the fahrenheit temperature
//Log the input and output values 

let celsius = 0;

function convertTemp(celsiusTemp) {
    let fahrenheitTemp = (celsiusTemp * (9 / 5)) + 32;
    return fahrenheitTemp.toFixed(2);  //rounds it 2 dec places
}

console.log("Q1: Convert Temp: ", "CelciusTemp = ", celsius, "FahrenheitTemp = ", convertTemp(celsius));

//Calling on Different Temps: 
//Each element designated as "temp" in the forEach funtion
let celsiusArr = [32, 55, 76, 21, 50];

celsiusArr.forEach(function (temp) {
    console.log("Q1: Convert Various Temps: ", "CelciusTemp = ", temp, "FahrenheitTemp = ", convertTemp(temp));
});

//Note: I initally tried to use convertTemp as the parameter but it didnt work because it would only be treated as the parameter, and not the inital function. temp is acting as the parameter, so it the placeholder for each value in the array.

//Note: When we invoke convertTemp(temp), temp represents each array value here, not the paramter, so it wont disrupt the convertTemp function, it would just take each temp and use it as the argument in the convertTemp function. Inside this function, convertTemp becomes a new local variable. It overrides (shadows) the original convertTemp function, so you lose access to your function inside that scope

// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE

//Psuedo-code: 
//define function and parameter
//create a variable to hold the reversed letters
//make a for loop that starts from last letter of the array and moves backwards i--
//  then add each element into the new variable, one at a time
//once the word length has been reached, stop and return 
//log the original word and the reversed word


function reverseString(inputString) {
    let reversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    };

    return reversed;
};


console.log("Q2: Original String: Paper", "Reversed String: ", reverseString("paper"));
console.log("Q2: Original String: Paper", "Reversed String: ", reverseString(""));

//Alternative Solution
//define a function and parameter
//to reverse, we can target each letter, so we may need to convert the word into an array, then log each element into a new array, one at a time
//once the word length has been reached, stop and return 
//log the original word and the reversed word

//Update:
//there was a reversed function, go figure. the version below will turn the string into an array, reverse the array, then join the array back together into a string. 

function reverseString2(str) {
    return str.split("").reverse().join("");
};

console.log("Q2: Alternative: Original String: Hello World", "Reversed String: ", reverseString2("Hello World"));
console.log("Q2: Alternative: Original String: Paper", "Reversed String: ", reverseString(""));

// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

//format billTotal as currency w/  Intl.NumberFormat constructor,
const USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function tipCalculator(billTotal, tipPercentage) {
    let tip = tipPercentage * billTotal
    billTotal += tip

    return USDollar.format(billTotal);
};

console.log("Q3: tipCalculator:", tipCalculator(20, .20))
console.log("Q3: tipCalculator:", 20, 0.2, tipCalculator(20, 0.2));



// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

let num1 = 55;
let num2 = 723;

function multiplyThese(multiple1, multiple2) {
    let product = multiple1 * multiple2;
    return product;
}

console.log("Q4: Multiply -", "Multiplier: ", num1, "Multipland - ", num2, "Product - ", multiplyThese(num1, num2));


// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

function getAverage(number1, number2) {
    return (number1 + number2) / 2;
}

console.log("Q5: Get Average", 3, 6, getAverage(3.0, 6.0))

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers. 
//Prime numbers are natural numbers greater than 1 which are divisible only by 1 and itself. Examples include 2, 3, 5, 7, 11, 13, etc. (1 is neither prime nor composite).
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE

//PSUEDO
//create a function that takes a numerical paramter 
//if the number is divisible by any other number besides 1 and itself, return true
//we want to go from 2 to the sq.root (loop)
//if the number is not divisible return false
//test conditions with prime and nonprime numbers

function isPrime(testPrime) {
    if (testPrime <= 1) return false; // 0, 1 and negatives are not prime
    if (testPrime === 2) return true; //2 is a prime number
    if (testPrime % 2 === 0) return false; // even numbers are not prime

    for (let i = 2; i <= Math.sqrt(testPrime); i++) {
        if (testPrime % i === 0) {
            return false;
        };
    };

    return true; //return true outside loop so it loops through the spectrum
};


console.log("Q6: isPrime: ", 2, isPrime(2))
console.log("Q6: isPrime: ", isPrime(0))
console.log("Q6: isPrime: ", isPrime(1))
console.log("Q6: isPrime: ", isPrime(3))
console.log("Q6: isPrime: ", isPrime(5))
console.log("Q6: isPrime: ", isPrime(7))
console.log("Q6: isPrime: ", isPrime(11))

//Alt Version - Without If Statements
// When checking if a number is prime, we only test divisors from 2 up to the square root of the number because factors come in pairs. If no factors exist in this range, then no larger factors exist either. For the number 2, the square root is approximately 1.41, so the loop condition (starting at 2) is never satisfied (2 > 1.41) so (i > 1.41), but we want (i>1.41). This means the loop does not run, and since no divisors were found, the function correctly returns true.

// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }

//     return true;
// }


//Note: The below version was incorrect because it would end the loop early. We want to continue checking all possibilities. 9 may not be divisble by 2, but it is divisible by 3, which means its not a prime but the loop would have stopped before reaching 3. 

//  for(let i=2; i <= Math.sqrt(testPrime); i++){
//         if (testPrime % i === 0){
//             return false;
//         } else {
//             return true;
//         }
//  }

// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE
//psuedocode
//create function with an int parameter
//creatr an array to store the numbers 
//from i=2 to the int, return all prime numbers (callback)
//if prime, push into the primeArray
// return the array


function getPrimesUpTo(integer) {
    let primeArray = [];

    //init at 2 bc we know how primes do
    for (let i = 2; i <= integer; i++) {

        if (isPrime(i)) {  //truthy
            primeArray.push(i) //add to our array
        };

    };

    return primeArray;
};

console.log("Q7: Get Primes Up To:", 13, getPrimesUpTo(13));
console.log("Q7: Get Primes Up To:", 5, getPrimesUpTo(5));
console.log("Q7: Get Primes Up To:", 60, getPrimesUpTo(60));


//ALT SOLUTION BUT INCORRECT
//the array is not local to function, so the array wouldnt reset for the next use case, and would just collect all the values.
// === true is redundant because if (conditional) is already truthy


// let primeArray = []; 

// function getPrimesUpTo(integer){
//     for(let i=0; i <= integer; i++ ){
//        if (isPrime(i) === true){
//             primeArray.push(i)
//          };
//       };
//       return primeArray;
//    };


// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE
//PSUEDOCODE:
//calculate student average based on the array
//create an array
//create a function with an array param
//create a var for our sum, and a var to keep track of the array length
//for the whole array, check to ensure each num > 0 and num <100
//if so, add the value to the sum, and increase count (measure arr len)
//if count =0 then, we can return 0, no valid scores, and 0/0 is NaN
//return avg


let studentScores = [88, 98, 100, 95, 80, -5]

function calculateAverage(scoreArray) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < scoreArray.length; i++) {
        if (scoreArray[i] >= 0 && scoreArray[i] <= 100) {
            sum += scoreArray[i];
            count++;    //count goes up IF meets conditions( new arr len)
        };

    };
    //outside loop
    if (count === 0) { //no valid scores, stop early and return 0
        return 0;

    };

    return sum / count;

};

console.log("Q8: CalculateAverage: ", calculateAverage(studentScores));
console.log("Q8: CalculateAverage: ", calculateAverage([]));
console.log("Q8: CalculateAverage: ", calculateAverage([-5, 150]));


//Initial Solution - Incorrect
//1. we need a count variable, 
//2. when calculating the average, the array length needs to reflect the new length without the invalid input (neg. numbers, numbers more than 100)

// let studentScores = [88, 98, 100, 95, 80, -5]

// function getStudentAverage(scoreArray) {
//     let sum = 0;

//     for (let i = 0; i < scoreArray.length; i++) {
//         if (scoreArray[i] > 0 && scoreArray[i] <= 100) {
//             sum += scoreArray[i]
//         };

//     };

//     return sum / scoreArray.length;

// };

// console.log(getStudentAverage(studentScores))

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE
//PSUEDOCODE:
//if grade average is ___ return A
//and so on

function getLetterGrade(average) {
    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else if (average >= 0) {
        return "F";
    } else {
        return "Invalid Input";
    };

};

console.log("Q9: getLetterGrade:", getLetterGrade(95));
console.log("Q9: getLetterGrade:", getLetterGrade(88));
console.log("Q9: getLetterGrade:", getLetterGrade(76));
console.log("Q9: getLetterGrade:", getLetterGrade(62));
console.log("Q9: getLetterGrade:", getLetterGrade(0));
console.log("Q9: getLetterGrade:", getLetterGrade(-9));


//Alternative Solution - Switch Statement
//not optimal because switch statments compare exact values 

// function getLetterGrade(average){
//     switch(true){
//         case average >= 90 && average <= 100:
//             return "A";
//         case average >= 80:
//             return "B";
//         case average >= 70:
//             return "C";
//         case average >= 60:
//             return "D";
//         case average >= 0:
//             return "F";
//         default:
//             return "Invalid Input";
//     }
// }

// console.log("Q9: Alternative Solution to getLetterGrade: ", getLetterGrade(95));



// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE
//PsuedoCode:
// if getLetterGrade returns one of these values, return true
// else return false 
// or returninvalid


// function passed(letterGrade){

//      if (letterGrade >= 70 && letterGrade <= 100) {
//         return true;
//     } else if (letterGrade <= 69) {
//         return false;
//     } else 
//        return "Invalid Input" 

// };

// console.log("Q10 passed('A'): ", passed(69))


// getLetterGrade(65);
// console.log("Q10 passed('A'): ", passed(getLetterGrade));


function passed(letterGrade) {

    if (letterGrade == "A" || letterGrade == "B" || letterGrade == "C") {
        return true;
    } else if (letterGrade == "D" || letterGrade == "F") {
        return false;
    } else {
        return "Invalid Grade Entry"
    };

};

console.log("Q10: Passed: ", passed("A"));
console.log("Q10: Passed: ", passed("D"));
console.log("Q10: Passed: ", passed("Z"));


//Alternative Solution: Chat suggests identifying invalid inputs first to preserve a boolean output, so if the grade entry is not ABCDF, I want to return invalid input to notify the user that the grade entry is not valid, instead of saying the student did not pass by automatically returning false. There may be an error in data entry, so a passing student may get flagged as failing. 

//Function has two jobs:
//1. Is the entry valid?
//2. Is it a passing grade?

// function passed(letterGrade) {
//     if (
//         letterGrade !== "A" &&
//         letterGrade !== "B" &&
//         letterGrade !== "C" &&
//         letterGrade !== "D" &&
//         letterGrade !== "F"
//     ) {
//         return "Invalid Entry"; // failsafe
//     }

//     return letterGrade === "A" || letterGrade === "B" || letterGrade === "C";
// }

// console.log("Q10 passed('A'): ", passed("A")); // true
// console.log("Q10 passed('D'): ", passed("D")); // false
// console.log("Q10 passed('Z'): ", passed("Z")); // Invalid Entry

//Further Explanation: 
// 3. Why seperating the logic and the validity test matters

// a. Readability
// Anyone reading your code instantly understands:

// First: check if input is valid
// Second: apply rules

// b. Maintainability
// If later you:

// Add grades like "A-", "B+"
// Change passing rules

// You only modify one part, not everything.

// c. Fewer bugs
// You avoid weird edge cases where invalid data accidentally slips into your logic.


// im trying to make it so that we can pass the grade average into the function and if it meets a criteria it will return pass or fail

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE

//PSUEDOCODE:
//Create an object with student info
//loop through the object array to check each students information  or specify which student we want to pull from 
//the three functions being integrated are related to the grade
//if the student average score return as a number, then they will get a letter grade , then they will print if passed (yes/no boolean)

function printClassResult(className, student, scores) {
    const average = calculateAverage(scores);
    const letterGrade = getLetterGrade(average);
    const didPass = passed(letterGrade);

    console.log("Class:", className);
    console.log("Student:", student);
    console.log("Average:", average);
    console.log("Grade:", letterGrade);
    console.log("Passed:", didPass ? "Yes" : "No");
};

console.log("Q11: Single Student")
printClassResult("Math", "Alex", [80, 90, 85]);

//Alternative Solution - Using object array because I want to be able to get info for multiple students at once

console.log("Q11: Class Roster")

let studentInfo = [
    {
        student: "Lauren Olamina",
        className: "English",
        scores: [95, 100, 88, 82, 96]
    },

    {
        student: "Katniss Everdeen",
        className: "English",
        scores: [80, 92, 77, 82, 96]
    },

    {
        student: "Alice Carroll",
        className: "English",
        scores: [100, 100, 68, 93, 96]
    },

];

function printAllResults(studentArray) {
    studentArray.forEach(studentObj => {
        const average = calculateAverage(studentObj.scores);
        const letterGrade = getLetterGrade(average);
        const didPass = passed(letterGrade);

        console.log("Class:", studentObj.className);
        console.log("Student:", studentObj.student);
        console.log("Average:", average);
        console.log("Grade:", letterGrade);
        console.log("Passed:", didPass ? "Yes" : "No");
        console.log("----------------------"); //seperate student info
    });
}

printAllResults(studentInfo);

// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE

function buttonPushed() {
    console.log("Q12, Q13: The button was pushed!")
};

buttonPushed();


// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE

function simulateButtonPush(callback) {
    callback();
};

simulateButtonPush(buttonPushed);
