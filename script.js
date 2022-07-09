// =================BIG O NOTATION:==================
// Big O Notation is a way to formalize fuzzy counting.
//We won’t care about the details, only the trends
//the timeframe chart is going to change relative to input ( could be linear, quadratic n2, constant =1)

function addUpTo(n) {
  return (n * (n + 1)) / 2; // -> O(1)
}

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
} // -> O(n)

//===================REFACTOR CODE=========================
//this piece of code below can be refactored
function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      //refactor with charcodeat instead of reglar expression
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
} //-> if char is in a-z or1 -9 -> test it. if true -> obj+character , false = 1

//Better way
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha(a-z)
  ) {
    return false;
  }

  return true;
}

//============Common Problem Solving Patterns===========

//I. Frequency Counter Pattern
//- Uses objects or sets to collect values/ frequencies of values
//Avoid the need for nested loops or O(n^2) operations with arrays/strings

//exmaple: write a function called same, which accepts 2 arrays.
//the function should return true if every value in the array has it's
//corresponding value squared in the second array. the frequency of values
//must be the same

//BREAKDOWN: same[1,2,3],[4,1,9] //true
//same([1,2,3], [1,9]) //false
//same([1,2,1], [4,4,1]) //false ( must be same frequency)

//1. NAIVE SOLUTION
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     if (arr1.length !== arr2.length) { //check if 2 arrays have same length
//       return false;
//     }
//   } for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2); // check the index of 1 quare in array 2
//     if (correctIndex === -1) { // if correct Index is not in there
//       return false;
//     }
//     arr2.splice(correctIndex, 1); // if correctIndex exists, remove that number from array 2
//   }

//   return true;
//   }

//II. Frequency pattern : we can check how many times each number in  array1 appears ( frequency ) compared to frequenecies of its number in array2

//Challeng1: Give two strings, write a function to determine if the second
//string is an anagram of the first. An anagram is a word, name,or phrase, or name
//formed by rearranging the letters of another, such as cinema, formed from iceman

//BREAKDOWN: 1. 2 string as parameters: str1, str2
//determine if the second string is an anagram of the first. check length, if str1 length = str2 continue, if not end. *
//make an object for string 1 and string 2 to store keys (characters) and frequencies (values)

//create a look up object
//loop through str1 to get the characters inside it. 

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {

    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]; //characters inside str1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;

  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] = -1;
    }
  }
  return true;
}

validAnagram("hello", "ollhe");



// II. Multiple Pointer
// create a value that correspond to an index orposition and move towards the beginning , end or middle based on a certain condition
//efficient for solving problems

//Ex: Write a function called sumZero which accepts a sorted array of intergers.
//The functon should fnd the first pair where the sum is 0. Return an array that includes
//both values that sum to zero or undefined if a pair does not exist

//sumZero([-3,-2, -1, 0, 1, 2, 3]) //[-3,3] =0

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -4, -2, -1, 0, 1, 5]));