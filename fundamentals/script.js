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

//Challenge: contUniqueValues. Implement a function called contUniqueValues,
//which accepts a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always be sorted.
//ex: countUniqueValues([1,1,1,1,1,2]) //2
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var i = 0;
  for (var j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1; //(i length)
}

console.log(countUniqueValues([1,2,2,3,4]))

//if arr[i] !== arr[j] -> i++ (move up) & arr[i] = arr[j]


// III. Sliding window
// Involves creating a window which can either be an array or number from one position to another
// /Depending on a certain condition, the window either increases or closes ( and a new window is created)

//Example: write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array


//maxSubarraySum([1,3,5,6], 2) //11
//maxSubarraySum([1,2,5,2,8,1,5], 4) //17
//maxSumbarraySum([4,2,1,6,2],4) //13
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null; //if array is smaller than num
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; //sm the first n consecutive numbers
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) { //i=3

    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 3, 5, 6], 2)) //11


// IV. Divide and conquer
//This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
//This pattern can tremendously decrease time complexity

//example: Given a sorted array of intergers, write a function called search,
//that accepts a value and returns the index where value passed to the function
//is located. If the values is not found, return -1

//search([1,2,3,4,5,6],4) //3
//search([1,2,3,4,5,6],6) //5
//search([1,2,3,4,5,6], 11) //-1


//Recursion
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5);// 5*4*3*2*1/num===1 is the base case

// helper function
function collectOddvalues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr)
  return result;
}

console.log(collectOddvalues([1, 2, 3, 4, 5, 6, 7, 8]));

//Pure recursion
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice=-(1)));
  return newArr;
}
//ex: [1,2,3,4,5] -> [1,3,5]
//what happened?:
//[1].concat(collectOddValues([2,3,4,5]))
//         2is not odd -> [].concat(collectOddValues([3,4,5]))
//                            3.concat(collectOddValues([4,5]))
//                                         [].concat(collectOddValues([5]))
//                                                     5.concat(collectOddValues([]))
//                                                             return []
//[1].concat([]).concat(3).concat([]).concat(5).concat([])
//[1].concat[3,5] ->[1,3,5]