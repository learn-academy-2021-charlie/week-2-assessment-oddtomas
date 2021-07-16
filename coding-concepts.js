// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: This will log the cohort string with each character in the string split up into an array. ["C","h","a"] etc.
// b) Verify and explain: The output was an expected, .split takes a string and converts it into an array. By passing "" into the parenthesis, what we're doing is breaking up the string into individual characters values in their own index positions within the newly converted array. Without passing in ("") we would still get an array, but it would be an array with just one value; the same string inside. --> ["Charlie 2021"]



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log undefined because there is no return inside the greeter function even though it's intention is to return a string interpolation of `Hello LEARN Student!`.
// b) Verify and explain: The console.log indeed returned undefined because there is no return inside the greeter function and all functions require some return by definition. This could be ammended to work by adding a return on line 21 before the expected string output. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: This will log the multBy2 array but with the starting values * 2. So an array with [8,10,12,14,16]
// b) Verify and explain: This indeed logged the array with the starting values multiplied by 2 returning an array with [8,10,12,14,16]. From left to right, the code starts by assigning an array variable "multBy2" the value of the stated array then it uses .map which is a higher order function that returns an array of the same size with whatever alterations you dictate. With map the code accepts the value paramater and takes the values of the array and multiplies it by 2 and returns the finished array.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: This will log an array with even values even though it's called oddsOnly. The condition for the filter function is checking for even values so it'll essentially "push" even values in the array after iterating through it to the finished array. 
// b) Verify and explain: This indeed logged an array with only the even values [12,14] because even though the array is called oddOnly, the condition filter was checking for to determine what makes it into the final array was checking for even numbers. Value % 2 === 0 is the same as saying if the remainder is 0 the number is even, and that's causing 12 and 14 to be the only ones to meet to the condition. If we wanted filter to find the odd numbers the code would be value % !== 0 / or the remainder is not equal to 0.


// --------------------5) What will this log?

class Learn {
  constructor() {
    this.student = "George",
      this.cohort = "Charlie",
      this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer:This will log an object with the contents; {student: George, cohort: Charlie, year: 2021 }
// b) Verify and explain: This logged the class name and an object with all of the contents inside of the constructor; the student, cohort, and year. The constructor make an object within the class, this.student,cohort,year are the keys and George, Charlie, and 2021 are their values respectively.  Line 56 assigns a variable to the Learn class with "new Learn" allowing us to console log it and access it's contents. If you just tried to console.log(Learn) you'd wouldn't be able to access or see the attributes inside.  
