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

console.log(plusMinus([-1, -2, 0, 1, -3, 5]));
