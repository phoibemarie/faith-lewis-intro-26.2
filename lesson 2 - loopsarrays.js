//----------------------------------
// LESSON 2 LOOPS AND ARRAYS
//----------------------------------

// This is the coding assignment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - Simplify Repetitive Tasks with Loops
//  - Working with ‘for’ Loops
//  - Understanding Arrays

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 2 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

// console.log("Q#: ", functionName(anyInput))


// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//  repeat(3);
// EXAMPLE OUTPUT:
//  Hello World!
//  Hello World!
//  Hello World!

// PUT YOUR CODE HERE

function repeat(integerParam) {
  for (let i = 0; i < integerParam; i++) {
    console.log("Hello World!");
  }
}

console.log("Q1: ");
repeat(8);

//issues I ran into while solving: the function parameter is also the variable that is used within the for loop condition. I originally treated them as two different variables, so I was getting an error message, or the value I used to invoke the function would be overwritten by i=0 and reset to 0. Another error was the syntax. Remember that "i" is a variable, so we have to use "let" to define it as one.

// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.

// EXAMPLE LOG:
//  console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT:
//  Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

//PUT YOUR CODE HERE



function pyramidCounting(pyramid) {

  let sum = 0;

  for (let i = 0; i <= pyramid; i++) {
    sum += i
  }

  return sum;
}

console.log("Q2: ", pyramidCounting(4));

//problem-solving: I was getting error messages or incorrect outputs because I defined the sum within the loop, then defined as a global variable, but still had issues, because I was also trying to return the updated sum within the for loop, so it was restricted within the loop and did not return the updated sum to the parent function. return is a signal to end the process and exit the entire function, so once the value is updates, the loop is discontinued instead of feeding that new value back into the loop. Basically, return is "stop here, and return the new value" NOT "return the new value until stop condition is met."

//And add "i" to sum, so the new value assigned to the variable is being used, instead of trying to increment by + 1, which is already being done in the iterator.

// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// EXAMPLE LOG:
//  console.log("Q3: ", noVowels(adventurous));
// EXAMPLE OUTPUT:
//  Q3: dvntrs

// PUT YOUR CODE HERE

function noVowels(stringParam) {
  //we use an empty "" as a placeholder string
  //we define the var inside the function, so result is reset each loop
  let result = ""
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < stringParam.length; i++) {
    //remember this is where what we want to happen, happens!
    //create a variable that is assigned each index value from parameter// then make a conditional statement that says if the value from the parameter is not included in vowels, add it to the result
    let char = stringParam[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }

  return result;

}

console.log("Q3: ", noVowels("test the code"))

//problem-solving: once the stopping condition for the loop is met, the final value will be returned, so return should be outside of the loop, otherwise the loop will not repeat because it immediately stops.


//ALTERNATIVE SOLUTION - My first solution. This one uses a regular expression (regex) which solves the task, but it would make the loop unnecessary..

// function noVowels(string){
//   return string.replace(/[aeiouAEIOU]/g, '')

// }

//  console.log(noVowels("test"));


// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string.

// EXAMPLE LOG:
//  console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//  Q4: 6

// PUT YOUR CODE HERE
//if we define the variables globally, then the count will not reset with each loop, which is fine IF we want it to accumulate.
// let count = 0
// let vowels = "aeiouAEIOU";

function vowelCount(numVowels) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < numVowels.length; i++) {
    let char = numVowels[i];
    if (vowels.includes(char)) {
      count += 1;
    }

  }
  return count;
}

console.log("Q4: ", vowelCount("count the vowels"))
console.log("Q4: ", vowelCount("see it won't reset if the varoables are defined globally."))

// Problem-Solving: we want to return the number of vowels in the parameter value. so, we'd want to count how many instances of vowels and add them to one another.
// loop initalized at zero, for the length of the parameter, assess if there is a vowel, then add 1 to count
// outside the loop, return the count

// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//  console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT:
//  Q5: 8

// PUT YOUR CODE HERE
//while loop syntax: define init outside loop, then define condition as usual, and then final-expression is then run after the code inside the loop has run (an iteration has been completed) which tells the loop to continue (i++)

function numOfOdds(odd) {
  let count = 0; //ex: count becomes 1
  let i = 0;    //ex:count becomes 2

  while (i <= odd) {
    if (i % 2 !== 0) {
      count += 1;
    }
    i++;   //i will still increase, prevents infinite loop
  }

  return count;
}

console.log("Q5: ", numOfOdds(15))

// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'. Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable. Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not. Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//  console.log("Q6 empty: ", arrayChecker(empty));
//  console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//  Q6 empty: true
//  Q6 not empty: false

// PUT YOUR CODE HERE

let empty = [];
let full = ["Can We Talk", "Never Too Much", "I'm Every Woman"]

function arrayChecker(container) {
  let arrayLength = container.length;
  if (arrayLength > 0) {
    return false;

  } else {
    return true;
  }
};

console.log("Q6: Length Check (Empty):", empty.length);
console.log("Q6: Length Check (Full):", full.length);
console.log("Q6: The container is empty: ", arrayChecker(empty));
console.log("Q6: The container not empty: ", arrayChecker(full));


// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter. The function should return the element in the array at the given number index or 'null' if it doesn't exist. Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//  console.log("Q7: ", getElementAt(full, 2));
//  console.log("Q7: ", getElementAt(full, 7));

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q7: code
//  Q7: null

//remember, we're using the intParam to indicate what index we want to invoke, and the indices start at 0, so the highest index is the array.length -1 ( or >= array.length). So our if statement is saying if the index (intparam) is less than 0, or more than the highest indice, return null.

function getElementAt(arrayParam, intParam) {
  if (intParam < 0 || intParam > arrayParam.length - 1) {
    return null;
  } else {
    return arrayParam[intParam];
  }
}


console.log("Q7: ", getElementAt(full, 2));
console.log("Q7: ", getElementAt(full, 7));
console.log("Q7: ", getElementAt(empty, 0));

//ALTERNATIVE SOLUTION:
//Returns "undefined" instead of null. Apparently, undefined means that there was no source code, which could also indicate a syntax/logic error. Whereas, null indicates that there is not a value stored in the object. It's also predictable, intentiona,l and easier for other developers to use
// function getElementAt(arrayParam, intParam){
//     return arrayParam[intParam];
// }

// console.log("Q7: ", getElementAt(empty, 0));


// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array. The function should return the NEW array. Use your 'full' variable from Question 6 to test. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//  console.log("Q8: ", insertInArray(full));
//  console.log("original array: ", full);

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q8: ["dream", 0, 19, "code", 24, 180]
//  original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE
//we want to create a function that takes an array as the parameter value and creates a new array that inserts a new value, 0, to the second position (index 1).  This new array is not a copy, we want a seperate new array.  then we want to return the new array.


function insertInArray(arr) {
  // make a copy of the original array
  let newArray = arr.slice();

  // insert 0 at index 1 (second position)
  newArray.splice(1, 0, 0);

  return newArray;
}

let result = insertInArray(full);

console.log("Original array:", full);
console.log("New array:", result);

//ALTERNATIVE SOLUTION - USING TOSPLICED
// test it with your 'full' array
// function insertInArray(arrayParam2, insertHere) {
//   let newArray = arrayParam2.toSpliced(insertHere, 0, 0);
//   return newArray;
// };

// console.log("Q8: New Array", insertInArray(full, 1))
// console.log("Q8: Original array: ", full);

//ALTERNATIVE SOLUTION - USING SPLICE
// function insertArray(arrayParam2) {
//   let newArray = arrayParam2.slice();
//   newArray.splice(1, 0, 0);
//   return newArray;
// }


// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not. 

//The purpose of this function should be to look at each element of the two arrays and compare them
// returning false when they either hit two items that don't match
//or returning false if the two arrays themselves are different lengths. 
//You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those. To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//  console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//  Q9 same: true

// EXAMPLE LOG:
//  console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//  Q9 different: false

// EXAMPLE LOG:
//  console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//  Q9 different: false

// PUT YOUR CODE HERE

//okay so we want to compare two arrays using a single function that checks if they are the exact same (===) by comparing each element within each dataset.  We also want to check if they are the exact same length. If they are not the exact same, then the function should alwats return false, even if there are partial matches with shared values. 

//Okay, so I want to see what books I have that I have also borrowed from the library at some point. 

let myBooks = ["Black Looks", "Stamped from the Beginning", "Chain-gang All-Stars", "You Don't Know Us Negroes"];

let libraryBooks =
  ["Stamped from the Beginning", "Chain-gang All-Stars",
    "You Don't Know Us Negroes", "1000 Autumns"];

// Comparing original and copy from previous question
let compareFull = ["Can We Talk", "Never Too Much", "I'm Every Woman"]
//let full = ["Can We Talk", "Never Too Much", "I'm Every Woman"]

//Note: We want to compare lengths first because if the lengths are different, then we know they are not the exact same. It's more efficient and "energy saving". It also prevents false matches, because if we check for shared values first, they may be similar up to a given index, which would return true if one array is shorter than another even though the other array would have additional value (menaing they are not exact matches). 

//Then if they are the same length, we'd also want to check if they have the same value since they can be the same length, yet have different elements. if neither condition is false (meaning they are exact matches), we should return true.

function compareArrays(compare1, compare2) {
  if (compare1.length !== compare2.length) {
    return false;
  }

  for (let i = 0; i < compare1.length; i++) {
    if (compare1[i] !== compare2[i]) {
      return false;
    }
  }

  return true; //once the if statement and loop run, we can simply return true.
}

//with the loop statement, if the lengths are different the function would have already stopped, so if its gotten to this point then we know compare1.length and compare2.length are equal, so we only need to use one of them to define the condition.

console.log("Q9: The arrays are exactly the same: ", compareArrays(compareFull, full));

console.log("Q9: The arrays are the same length: ", compareArrays(compareFull, full));

console.log("Q9: The arrays are different lengths: ", compareArrays(myBooks, libraryBooks));

// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]). Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.

// EXAMPLE LOG:
//  console.log("Q10: ", calculateTotal(numbers));

// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//  Q10: 17

// PUT YOUR CODE HERE

let numbers = [3, 4, 2, 8];

function calculateTotal(numbersArray) {
  let arraySum = 0;

  for (let num of numbersArray) {
    arraySum += num;
  }

  return arraySum;
}

console.log("Q10: ", calculateTotal(numbers));

//ALTERNATIVE SOLUTION:
//function calculateTotal(numbersArray){
//   arraySum += numbersArray;
// }

// console.log("Q10: ", arraySum)

//Notes: AI review says its not passing the array through the function. It says the version below modifies the global variable, and the instructions are to create a function that can take an array and return the sum within the function.
//In your version: calculateTotal is acting as a callback for each element, not as a function that processes the whole array.It never returns anything. The summing logic depends on an external (arraySum) variable.So conceptually, you’ve split the responsibility: forEach does the looping while calculateTotal handles one number at a time, But the assignment wants one function that does both

// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//  console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));

// EXAMPLE OUTPUT:
//  Q11 evens: [10,2,6]
//  Q11 odds: [3,19,7,93]

//Note: In the findEvens solution, the filter uses a callback function that is applied to the array parameter. this is nested within the larger function because we want to be able to change the argument. The example below this text, shows a functions being called by the filter method into onumbers.

// const onumbers = [45, 4, 9, 16, 25];
// const over18 = onumbers.filter(myFunction);

// function myFunction(value) {
//   return value > 18; }

//This example shows what the arrow notation is doing in short form. We're saying filter though this array based on the assigned function (almost as a condition): 

// numbers.filter(function(num) 
//  { return num > 5;
//        });

//PUT YOUR CODE HERE
let unsortedArray = [10, 2, 3, 19, 7, 6, 93]
let unsortedArray2 = [5, 5, 6, 2, 5]

//  this arrow function is known as an anonymous function. It’s a normal function that doesnt have a name or assigned variable. It takes one parameter: num, It returns true or false, so if it filters through the array an element is assessed as true (===0), then it will be kept.

function findEvens(evenSteven) {
  let evenArray = evenSteven.filter(num => num % 2 === 0);
  return evenArray;
}

console.log("Q11: Return Even Numbers Only: ", findEvens(unsortedArray));
console.log("Q11: Return Even Numbers Only: ", findEvens(unsortedArray2));
console.log("Q11: Checking the OG array: ", unsortedArray);

function findOdds(oddBall) {
  let oddArray = oddBall.filter(num => num % 2 !== 0);
  return oddArray;
}

console.log("Q11: Return Odd Numbers Only: ", findOdds(unsortedArray));
console.log("Q11: Return Even Numbers Only: ", findOdds(unsortedArray2));
console.log("Q11: Checking the OG array: ", unsortedArray2);

// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT:
//  Q12: [4,25,64]

// PUT YOUR CODE HERE

let rootNumbers = [2, 5, 8]

function makeSquares(squareIt) {
  let squaredArray = squareIt.map(root => root * root);
  return squaredArray;
}

console.log("Q12: Find the Square:", makeSquares(rootNumbers));

// ---------- QUESTION 13 ----------
// Write a function called 'displaySkills' that takes an array of string values that correspond to skills that you have.
// Iterate through the array and display each skill.

// EXAMPLE CALL:
//  const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
//  displaySkills(skills);
// EXAMPLE OUTPUT:
//  Javascript
//  HTML
//  CSS
//  Adobe Photoshop
//  GitHub

// PUT YOUR CODE HERE

const techSkills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

const creativeSkills = ["Writing", "Painting", "Bass", "Photography"];

function displaySkills(skills) {
  for (const skill of skills) {
    console.log(skill);
  }

}

//Note: The function doesn’t return anything, so console.log would return undefined. Instead, just call the function:
console.log("Q13: Skills:");
displaySkills(techSkills);
displaySkills(creativeSkills);


// ---------- QUESTION 14 ----------
// Back in the "old days", the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array. The function will return the array of values.

// EXAMPLE LOG:
//  console.log("Q13: ", fizzBuzz();
// EXAMPLE OUTPUT:
//  Q14: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// // PUT YOUR CODE HERE

let replaceNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function oldDays() {
  for (let i = 0; i < replaceNum.length; i++) {
    if (replaceNum[i] % 15 === 0) {
      replaceNum[i] = "fizzbuzz";
    } else if (replaceNum[i] % 3 === 0) {
      replaceNum[i] = "fizz";
    } else if (replaceNum[i] % 5 === 0) {
      replaceNum[i] = "buzz";
    };

  };

  return replaceNum;
};

console.log("Q14: Fizz Buzz:", oldDays());

//ALTERNATIVE SOLUTION: I solved the task, using a pre-made array assigned to a global variable. Even thought I didn't use a parameter, an AI check suggested that a global variable could affect the code's usability if the function is reliant on a predefined array. If I solve it by using an empty array, then adding elements to the array based on their conditions, up to a certain value, it is independent, predictable, and won't be mesed up if replaceNum is changed elsewhere. 

//Note: Because the array starts empty, the .push() method will add the element to the end array (so as the i value increases, each result is added on in order. ) 
//Also, does not use result[i] (array avalues). The array is empty, so there is ntohing to reference there. Instead, use a loop variable i.

function fizzBuzz() {
  let result = [];
  for (let i = 0; i <= 15; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz")
    } else if (i % 3 === 0) {
      result.push("fizz")
    } else if (i % 5 === 0) {
      result.push("buzz")
    }
  }

  return result;
}

console.log("Q14: Fizz Buzz Alternative Solution:", fizzBuzz());

// ---------- QUESTION 15 ----------
// Write a function called testScope that shows the difference between global, function and block scope.
// Create 3 variables - 
//  let globalVar = "globarVar";
//  let functionVar = "functionVar";
//  let blockVar = "blockVar";
// Place the variables correctly in your code and log them.
// Also, place 2 log statements for the functionVar and blockVar that are commented out, but would result in an error if uncommented - because the variable they are referencing is out of scope.

// PUT YOUR CODE HERE

let globalVar = "globalVar"

function testScope() {
  let functionVar = "functionVar"
  console.log("Inside function:", functionVar);

  if (true) {
    let blockVar = "blockVar"
    console.log("Inside Block:", blockVar)
  }

  //Error:Out of Scope (Local to if statement)
  //console.log(blockVar);

};

console.log("Q15: Global Variable: ", globalVar);
testScope();

//Error:Out of Scope (Local to testScope, not Global)
// console.log(functionVar);): console.log(blockVar);

