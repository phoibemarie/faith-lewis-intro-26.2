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

function repeat(integerParam){
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



function pyramidCounting(pyramid){
  
  let sum = 0;

  for (let i = 0; i <= pyramid; i++){
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

function noVowels(stringParam){
    //we use an empty "" as a placeholder string
    //we define the var inside the function, so result is reset each loop
  let result = ""
  let vowels = "aeiouAEIOU";

  for(let i = 0; i < stringParam.length; i++){
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

function vowelCount(numVowels){
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < numVowels.length; i++){
    let char = numVowels[i];
    if (vowels.includes(char)){
      count += 1;
    }

  }
   return count;
}

console.log("Q4: ",vowelCount("count the vowels"))
console.log("Q4: ",vowelCount("see it won't reset if the varoables are defined globally."))

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

function numOfOdds(odd){
  let count = 0; //ex: count becomes 1
  let i = 0;    //ex:count becomes 2

  while (i <= odd){
    if (i % 2 !== 0){
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

function arrayChecker(container){
  if (container.length > 0){
    return true;

  } else{
    return false;
  }

}

console.log("Q6: The container is empty: ", arrayChecker(empty));
console.log("Q6: The container not empty: ", arrayChecker(full));

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
