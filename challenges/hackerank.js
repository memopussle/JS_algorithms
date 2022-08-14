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