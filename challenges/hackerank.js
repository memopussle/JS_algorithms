//Given an array of integers, find the sum of its elements.

//For example, if the array ar=[1,2,3], 1+ 2 + 3 = 6 return 6
//Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

function simpleArraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
console.log(simpleArraySum([1, 2, 3]));

// Compare the Triplets
//Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
//The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

//example: Alice: a = [1,2,3]
// Bob: b = [3,2,1]
// => [1,1]

//get a for loop which is < 3. compare a[i] and b[i], if a[i] > b[i] -> Alice Score +1, if a[i] < b[i] ->Bob Score +1

function compareTriplets(a, b) {
  let AliceScore = 0;
  let BobScore = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] < b[i]) {
      BobScore++;
    } else if (a[i] > b[i]) {
      AliceScore++;
    }
  }

  return [AliceScore, BobScore];
}

console.log(compareTriplets([1, 2, 4], [3, 2, 1]));

// A very bigsum
// /In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// example:[1000000001, 1000000002, 1000000003, 1000000004, 1000000005] -> result: 5000000015
//for loop:
function aVeryBigSum(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return totalSum;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);

//square matrix: alculate the absolute difference between the sums of its diagonals.

//For example, the square matrix arr is shown below:
// sample: [[1,2,3],
//         [4, 5, 6],
//         [7, 8, 9]]

function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  const length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i]; // [1,2,3]
    diagonal2 += arr[length - 1 - i][i]; //[7,5,3]
  }
  return Math.abs((diagonal1 = diagonal2));
}
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//another solution
function diagonalDifference(arr) {
  var n = arr.length;
  var d1 = 0;
  var d2 = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      //if i ===j -> add the number to d1
      if (i === j) {
        d1 += arr[i][j];

        //n-1 = 2. i + j ===2 . 3 cases: i = 0, j=2; i=1, j =1; i = 2, j= 0-> sum those numbers
      }
      if (i + j === n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}

// plusMinus

//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//Print the decimal value of each fraction on a new line with places after the decimal.

//1: get the length of the array
//loop through the array. caculate the number of positive, negative and zero
//get that number / array length
//print the results

function plusMinus(arr) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zero = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > 0) {
      positiveNumbers++;
    } else if (arr[i] < 0) {
      negativeNumbers++;
    } else {
      zero++;
    }
  }
  const positiveRatio = (positiveNumbers / arrLength).toFixed(6);

  const negativeRatio = (negativeNumbers / arrLength).toFixed(6);
  const zeroRatio = (zero / arrLength).toFixed(6);
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

//staircase
//This is a staircase of size

//    #
//   ##
//  ###
// ####

//Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// loop through it with the i <= n
//ex: 4
//n=1 -> 3 space, 1# -> (n-1)space + 1#
//n=2 -> 2 space, 2# -> (n-2)space + (1+1)#
//n=3 -> 1 space,3# -> (n-3) space + (2 + 1)#
//n=4 -> 0 space, 4# -> (n-4) space + (3+ 1)#

//nested loop: i = row, j= each index.
// i = 0 -> j= 1 -> space
//i = 0 -> j = 2 -> space
//i = 0 -> j = 3 -> space
//i = 0 -> j = 4 -> #

//i = 1 -> j = 1 -> space
//i = 1 -> j = 2 -> space
// i = 1 -> j = 3 -> #
// i = 1 -> j = 4 -> #

//i = 2 -> j = 1 -> space
//i = 2 -> j = 2 -> #
// i = 2 -> j = 3 ->#
// i = 2 ->j = 4 ->  #

//i = 3 -> j = 1 -> #
//i = 3 -> j = 2 -> #
//i = 3 -> j = 3->  #
//i = 3 -> j = 4 ->#

function staircase(n) {
  // for loop < n
  for (let i = 0; i++ < n; ) {
    let line = "";
    // i = 0; space = n ;
    // i = 1 ; spa
    let spaces = n - i;

    for (let j = spaces; j--; ) {
      // j = n -> line = " "
      // j = n -1 -> line = " " " "
      line += " ";
    }

    for (let j = i; j--; ) {
      //j = 0 -> line = "#"
      //j = 1 -> line = "#"
      line += "#";
    }
    console.log(line);
  }
}

staircase(6);

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 4 of 5 integers
//arr=[1,3,5,7,9] ->min sum = 1+ 3+ 5+ 7 = 16
// max sum = 3 + 5 + 7 + 9 = 24
// 5 intergers. at first sort it from smaller to greater. and then do loop 1 from = 0 -> minSum
//loop 2 from1 -> maxSUm

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  const newArr = arr.sort();
  //minSum
  for (let i = 0; i < newArr.length - 1; i++) {
    minSum += arr[i];
  }
  for (let i = 1; i < newArr.length; i++) {
    maxSum += arr[i];
  }
  console.log(minSum, maxSum);
}

miniMaxSum([5, 3, 4, 1, 2]);

//Birthday cake handles
//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age.
//They will only be able to blow out the tallest of the candles.Count how many candles are tallest.
// ex: [4,4,1,3]
// ->2 candles have 4 units (highest)

function birthdayCakeCandles(candles) {
  // filter array. Loop through each candle. find the max inside candles array which are equal to candle
  const highestUnits = candles.filter(
    (candle) => Math.max(...candles) === candle
  );
  return highestUnits.length;
}

birthdayCakeCandles([1, 2, 3, 3]);

//solution 2: find the max index of the array first
// create another array for counting
//loop through the array, if the index === the max -> new array for counting ++

function birthdayCakeCandles2(candles2) {
  const maxUnits = Math.max(...candles2); //spread operator for array
  let maxCount = 0;
  for (let i = 0; i < candles2.length; i++) {
    if (candles2[i] === maxUnits) {
      maxCount++;
    }
  }
  return maxCount;
}

console.log(birthdayCakeCandles2([1, 2, 3, 3]));

// Time conversion: 12-hour AM/PM format, convert it tomilitary (24-hour) time.

//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//example 07:05:45am -> 19:05:45

function timeConversion(s) {
  // Write your code here

  //get rid of postfix AM PM and split the hour
  const arr = s.slice(0, 8).split(":");
  // ['12', '00', '00']
  //AM case -> 12AM -> 00

  //if string includes AM
  if (s.includes("AM")) {
    if (arr[0] === "12") {
      arr[0] = "00";
    }
  }

  //ifstring includes PM
  if (s.includes("PM")) {
    //PM case
    if (arr[0] === "12") {
      arr[0] = "12";
    } else {
      arr[0] = Number(arr[0]) + 12; //if arr[0] = 1pm -> 13
    }
  }

  console.log(arr.join(":"));
  return arr.join(":");
}
timeConversion("01:00:00PM");

//You are choreographing a circus show with various animals. you are given two kangaroos on a number line
// ready to jump in the positive direction(i.e, toward positive infinity)
//The 1st kangaroo starts at location x1 and moves at a rate of v1 meters per jump
//the second kangaroo starts at location x2 and moves at a rate of v2 meters per jump
//ex: x=3, (x1 + v1 = 2 + 1,x2 +v2 = 1 + 2).both meet after 1 jump-> YES

// there must be a k jumps: x1 + k*v1 = x2 + k*v2
// x1 - x2 = k*(v2-v1)
// math.abs(x1 - x2) / math.abs(v2 - v1) === 0
// x1 -x2 = 0 -> v2 - v1 = 0 -> v2 === v1
//Math.sign() return 1 if its a positive, -1 if negative, 0 = 0

function kangaroo(x1, v1, x2, v2) {
  return Math.sign(x1 - x2) === Math.sign(v2 - v1) &&
    (v1 === v2 || (x1 - x2) % Math.abs(v2 - v1) === 0)
    ? "YES"
    : "NO";
}
console.log(kangaroo(0, 3, 4, 2));



//There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

//example: a= [2,6]
//b= [24,36]
// 2 numbers between arrays:6 & 12.
// 6 % 2 = 0, 6 % 6 = 0, 24 % 6 =0 & 36 % 6 = 0 for the first value
// 12 % 2 = 0,12 % 6 = 0 & 24 % 12 = 0, 36 % 12 = 0. return 2

// a: 2,3,4,5,6,7.... 100 -> a,b % int == 0 -> int=[6,12] . int: value
// 6,7,8,9,9...100

//b: 24,25,26,27.... 100
//36,37,38,39 .... 100

function getTotalX(a, b) { 
  let validCount = 0;
  for (let x = 1; x <= 100; x++) {
    if (a.every(int=> x % int == 0)) {
      if (b.every(int => int % x == 0)) {
        validCount++;
      }
    }
  }
  return validCount++;
}

// every value in a divide to that x = 0 and check every value in b % x = 0 -> same value -> push that values to validCount