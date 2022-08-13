//============================ Freuqency counter - same Frequency================================

// Write a function called sameFrequency. Given two positive intergers,
//find out if the two numbers have the same frequencyof digits. Your solution
//MUST have the following complexities : Time: O(n)
//sameFrequency(182,281) //true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) //true
//sameFrequency(22, 222) //false

//BREAK DOWN / SIMPLIFY PROBLEM
//1. A funcction called SameFrequency
//2. parameters: 2 positive intergers
//3. return : true: 2 numbers have the SAME frequency of digits
//false: 2 numbers have DIFFERENT frequency of digits
//time complexity: O(n)

//Step: 1. write a function that is called sameFrequency and takes 2 parameters which are positive intergers

//2. create an object to count frequency of the first interger
//lookup {1 : 1, 8: 1, 2: 1}

//3. loop through the first parameter

//4. loop through 2nd intergers to check if 2nd number has the same number. if yes , lookup -1. ( to set all keys back to 0).
//no same number, retun false

function sameFrequency(num1, num2) {
  const strNum1 = num1.toString(); // convert to string to get the length
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    return false; //return false if length of num1 !== num2
  }

  const lookup = {}; // construct an object which store numbers as keys

  for (let i = 0; i < strNum1.length; i++) {
    let number = strNum1[i];
    lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
    //if number appears more than 1 => + 1 . if not = 1
  }

  //loop through string number 2
  for (let i = 0; i < strNum2.length; i++) {
    let number = strNum2[i];
    if (!lookup[number]) {
      //if number !== a key in object
      return false;
    } else {
      lookup[number] = -1; //decrease -1 if it exists
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
// 182, 281
// 1: 0, 0: 1, 2: 0 -> true

//Frequency Counter/ Multipler Pointers - are thereDuplicates
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among
//the arguments passed in. You can solve this using frequency pattern OR the multiple pointers pattern
//areThereDuplicates(1,2,3) //false
//areThereDuplicates(1,2,2, 5,5, 6) //true
//areThereDuplicates('a','b', 'c') //true

// multiple pointer:
//     j
//(1,2,3,5,5,6)
//   i
//loop through the array and j need to be < array length so loop stops at the last index
//compare i to j. if i = j -> return true
//if i !==j -> i++, j++
//return false at the end when j = the last index.
function areThereDuplicates(...arguments) {
  let start = 0;
  let next = 1;
  while (next < arguments.length) {
    if (arguments[start] === arguments[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 6));

function areThereDuplicates1() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates1(1, 2, 6, 6));
//Set.prototype.size: return the number of (unique) elements in a Set object
//ex: object1[1,2,3,3] -> console.log(new Set(object1).size) //->3 (3 unique numbers)

//======================== Multiple pinters - average Pairs========================
//write a function called averagePair. Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target
//average. There may be more than one pair that matches the average target
// time:O(n), space: O(1)

//SORTED array of intergers
//pick i = 0; j = length-1 (last index)
//use loop while. if (i+j)/2 > target number, j--. if (i+j)/2 < target number,i++

function averagePair(array, targetNumber) {
  let left = 0;
  let right = array.length - 1; //last index

  if (array.length === 0) {
    return false;
  }
  while (left < right) {
    let average = (array[left] + array[right]) / 2;

    if (average === targetNumber) {
      return true;
    } else if (average > targetNumber) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 4, 6, 10, 12], 4));

//==================Sliding window=============================
//given an array of intergers and a number, write a function called maxSubarraySum, which finds
//the maximum sum of a subarray with the length of the number passed to the function
//Note that a subarray must consist of consecutive elements from the original array. In the firt example below, [100,200,300]
//is a subarray of the original array, but [100,300] is not

//sliding window: first we have to sum the first subarray with the length of the number given

//store it in maxSum variable for now

//loop. new sum now will + the next index and - the first index
//compare new sum with the previous sum. find max and return max

function maxSubarraySum(array, targetNumber) {
  let maxSum = 0;
  let tempSum = 0;

  if (array < targetNumber) return null;
  for (let i = 0; i < targetNumber; i++) {
    maxSum += array[i];
  }

  for (let i = targetNumber; i < array.length; i++) {
    //maxSum above:300 - 100 (first index) + 300 (current index)= 500
    tempSum = maxSum - array[i - targetNumber] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400, 800], 2));

//sliding window: write a function called minSubArrayLen which accepts
//2 parameters - an array of positive integers and a positive integers.
//This function should return the minimal length of a contigious subarray
//of which the sum is greater than or equal to the interger passed to the
//function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);

      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([1, 2, 3], 5)); //2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3 -> [1,16,22]

//findLongestSubstring
//write a function called findLongestSubstring, which accepts a STRING and returns the length of the longest SUBSTRING with all distinct characters
//findLongestSubstring('thisishowwedoit') //6
//break down: start = 0; end = 0; if start != end, end++;
//create an object. push character as the key in there , value = number of those characters.
//ideal: r: 1, i: 1, t:1, h:1,m:1, s:1 . if end = key of the object -> execute there. we can count value of the object -> number of character in the substrin

function findLongestSubstring(string) {
  console.log(string.length);
  let start = 0;
  let end = 0;
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let number = string[i];
    obj[number] = obj[number] += 1;
  }
  return obj;
}
console.log(findLongestSubstring("thisisawesome"));

//=============RECURSION==============
//write a function called power which accepts a base and an exponent. The function should return the power o the base to the exponent.
//This function should mimic the functionality of Mathpow() - ignore negative bases and exponents.

//Problem breakdown: if the number on the right is 0 -> x ^ 0 -> 1
//the number of the left will * itself the number of time based on the number on the right. ex: (2,2) -> 2 * 2 * 2 , (2, 1) -> 2
// firstly, whenever number on the left * itself, number on the right -1.
//basecase: if number on the right = 0 -> return 1

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

//ex: power(2,2)
//2 * power(2, 1)
//      2 * power(2, 0)
//            1
// 2 * 2 * 1 = 4

//Factorial : Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product
//of an interger and all the intergers below it, ex factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 = 24
//factorial zaro(0!) is always 1
//factorial(1) // 1
//factorial(2) //2
function factorial(number) {
  if (number < 0) return 0; //if
  if (number <= 1) return 1; //if
  return number * factorial(number - 1);
}

console.log(factorial(4));
// 4 * factorial(3)
//         3 * factorial(2)
//                2 * factorial(1)
//                       1

//product of Array
//write a function called productOfArray which takes in an array of numbers and returns the product of them all
//productOfArray([1,2,3]) //6
//productOfArray([1,2,3,10]) //60

//use recursion: base case: 1.
function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  }

  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([2, 3, 4, 5]));
// 2 * productOfArray(array.slice(1))
//                3 * productOfArray(array.slice(1))
//                           4 * productOfArray(array.slice(1))
//                                    5 * productOfArray(array.slice(1))
//                                           array = 0-> retur 1

//Recursion problem
//write a function called reverse which accepts a string and returns a new string in reverse
//reverse('awesome'); emosewa
function reverse(str) {
  //base case
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("isawesome"));
// reverse(sawesome  + i)
//             (awesome  +  s + i)
//                      (wesome + a  +  s + i)
//                               (esome + w + a +  s + i)
//                                                (some + e + w + a +  s + i)
//                                                            (ome + s + w + a +  s + i)
//                                                                         me + o + s + w + a +  s + i
//                                                                                  e + m + o + s + w + a +  s + i

//=============LINEAR SEARCH==============
//Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value
//does not exist in the array, return -1
//linearSearch([10,15,20,25,30],15) //1
//linearSearch([9,8,7,6, 5],6)//3

function linearSearch(array, value) {
  //loop through array to find value in the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4], 4));

//==============Binary Search=========
// write a function called binarySearch which accepts a SORTED array and a value and returns the index at which the value exists. Otherwise, return -1
//binarySearch([1,2,3,4,5], 2) //1
//binarySearch([1,2,3,4,5], 6) //-1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    //if the value is not in array it will create
    // SME = last index ; S+ 1 -> next index after last one. will stuck in an infinite loop
    //end should be start <= end to end the loop

    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2); //recalculate the middle after move left or right point
  }

  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 26, 28, 30], 15));
//                        S        M                   E
//                                    S        M        E
//                                    S   M    E

// isPalindrome : write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome(reads the same forward
// & backward). Otherwise it returns false
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true

// reverse the array backwards and then compare it to original array
//push the last index to the new array and then slice the original array
//ex: e + slice(1).

function isPalindrome(string) {
  //base case
  if (string.length === 1) return true;
  //if (string.length === 2) return false;
  if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1, -1));

  return false;
}
// check if string[0] === string.slice[-1] -> true. otherwise false
//eliminate first and last character if above is true. start recursion
//base case: string length === 1 return true

console.log(isPalindrome("tacoicat"));

//someRecursive
// /Write a recursive function called someRecursive which accepts an array and a callback.
//The function returns true if a single value in the array returns true when passed to the callback.Otherwise it returns false.
//const isOdd = val => val % 2 !== 0
//someRecursive([1,2,3,4], isOdd) //true
//someRecursive([4,6,8,9], isOdd) // true

function someRecursive(array, callBack) {
  if (array.length === 0) return false;
  if (callBack(array[0]) === true) return true; //if callBack((array[0]) === true
  return someRecursive(array.slice(1), callBack);
}

const isOdd = (value) => value % 2 !== 0;

console.log(someRecursive([6,2,4], isOdd))

//==========================Searching Algorithms================

//find thid short characters inside long characters
function naiveSearch(long, short) {
  var count = 0;

  for (var i = 0; i < short.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(short[i], long[i+j]);

      //break loop when finding a match
      if (short[j] !== long[i + j]) {
        break;
      }

      if (j === short.length - 1) {
        console.log("found 1");
        count++;

      }
    }
  }
  return count;

}

naiveSearch("lorie loled", "lol");


