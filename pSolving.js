// Q1: forEach
// Write a function named createList that takes in an array of the current store inventory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.

let inventory = [
  { name: "apples", available: true },
  { name: "pears", available: true },
  { name: "oranges", available: false },
  { name: "bananas", available: true },
  { name: "blueberries", available: false },
];

let groceryList = [];

function createList(arr) {
  arr.forEach((element) => {
    if (element.available == true) {
      groceryList.push(element.name);
    }
  });

  return groceryList;
}

//let ourGroceryList = createList(inventory);
console.log(`Our grocery list today is: ${createList(inventory)}`);

// -------------------------------------------------------------------------------------------------

// Q2: map
// Write a function that, given an array of numbers as input, uses map to return
// a new array where each element is either the string "even" or the string "odd",
// based on each value.

// If any element in the array is not a number, the resulting array should have the
// string "N/A" in its place.

// For example: evenOdd([1,2,3]) returns ['odd','even','odd'].

function numTypeFun(numArray) {
  // I can use if statement, or switch statement

  if (numArray % 2 == 0) {
    return "even";
  } else if (numArray % 2 == 1) {
    return "odd";
  } else {
    return "N/A";
  }

  //   switch (true) {
  //     case numArray % 2 == 0:
  //       return "even";

  //     case numArray % 2 == 1:
  //       return "odd";

  //     default:
  //       return "N/A";
  //   }
}

let evenOdd = [1, 2, 3, "211", "anyText", 66];

let mapArr = evenOdd.map(numTypeFun);

console.log(mapArr);

// -------------------------------------------------------------------------------------------------

// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3, 4, 6, 7, 8, 9, 98];

function notInFirstArray(arr1, arr2) {
  let newArray = arr2.filter((e) => {
    return !arr1.includes(e); // not include
  });
  return newArray;
}

console.log(notInFirstArray(firstArray, secondArray));

// -------------------------------------------------------------------------------------------------

// Q4:reduce
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.

function reversedString(strInput) {
  let arr = strInput.split("");
  let reverseArr = arr.reduce((acc, e) => {
    //console.log(acc);
    //console.log(e);
    return e + acc;
  });
  return reverseArr;
}

console.log(reversedString("test anas mohammad"));





// -------------------------------------------------------------------------------------------------

// Q5: regex
// Write a function named isNum that takes in a string or number of any length.
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false

function isNum(input) {
  let regEx = /\d+/; // \d means digits ,   + means infinite length (here we did NOT need +)
  return regEx.test(input);
}

console.log(
  isNum(12345),
  isNum("12345"),
  isNum("h3llo world"),
  isNum("hello world")
);

// -------------------------------------------------------------------------------------------------

// Q6:regex
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.

function matchMonth(month) {
  let regEx2 = /^oct(ober)?$/gim;
  // ()? means >> optional ,  $ should be end with ober
  return regEx2.test(month);
}
let userInput = prompt("In which month is Halloween ?");
console.log(matchMonth(userInput));
