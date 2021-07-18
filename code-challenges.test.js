// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

//describe the test by function name or something relevant
describe("divisibleByThree", () => {
    it("takes a num argument and returns if it is evenly divisible by three", () => { //describe what the tested function is supposed to do
      expect(divisibleByThree(num1)).toEqual(`15 is divisible by three`) // expected inputs and outputs
      expect(divisibleByThree(num2)).toEqual(`0 is divisible by three`)
      expect(divisibleByThree(num3)).toEqual(`-7 is not divisible by three`)

    })
})

// b) Create the function that makes the test pass.

//make a function that takes in a number param
const divisibleByThree = (num) => {
    //check if the number is evenly divisible by 3 using modulo to check for === 0
    if(num % 3 === 0){
        return `${num} is divisible by three` //if evenly divisible return a string statement with num interpolated
    }else{ //else, if the num is !== 0/not evenly divisible return a descriptive string statement
        return `${num} is not divisible by three`
    }
   }

   console.log(divisibleByThree(num1));
   console.log(divisibleByThree(num2));
   console.log(divisibleByThree(num3));


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


//describe the test by function name or something relevant
describe("arrayCapitalized", () => {
    it("takes an array of words and returns an array with the first letter of each word capitalized", () => { //describe what the tested function is supposed to do
      expect(arrayCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) //expeted inputs and outputs
      expect(arrayCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

//make a function that takes an array
const arrayCapitalized = (array) => {
    // create a local variable that maps through the array
    let capitalized = array.map(value => { //the map function will help us "iterate" through the array and alter it
      // return the value at 0/first index upper cased then add the substring starting at 1/ the second letter onward to the rest of the string
      return value[0].toUpperCase() + value.substring(1)
    })
    // return the finished uppercased strings
    return capitalized
  }


console.log(arrayCapitalized(randomNouns1));
console.log(arrayCapitalized(randomNouns2));




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

//describe the test by the function name or something relevant
 describe("firstIndex", () => {
        it("takes a string and logs the index of the first vowel", () => { //describe what the tested function is supposed to do
          expect(firstIndex(vowelTester1)).toEqual(1) //expected inputs and outputs to be tested for
          expect(firstIndex(vowelTester2)).toEqual(0)
          expect(firstIndex(vowelTester3)).toEqual(2)

        })
    })

// b) Create the function that makes the test pass.




//make a function that takes a string parameter
const firstIndex = (str) => { 
 //make a list of vowels to check for   
  var vowelList = 'aeiouAEIOU';
//iterate through the string
  for(var i = 0; i < str.length ; i++)
  {
 //check if any of the vowels are present in the string     
    if (vowelList.indexOf(str[i]) !== -1) //indexOf is used to return the first index that a given element can be found. the condition is if the value at str[i] is NOT -1/"not not present"/same as saying is present THEN
    {
      return str.indexOf(str[i]) //return the index position of the matched vowel at str[i]
    }
  
  }
}


console.log(firstIndex(vowelTester1));
console.log(firstIndex(vowelTester2));
console.log(firstIndex(vowelTester3));