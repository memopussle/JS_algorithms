// Freuqency counter - same Frequency

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


//3. Multiple pinters - average Pairs
//write a function called averagePair. Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target
//average. There may be more than one pair that matches the average target
// time:O(n), space: O(1)

//SORTED array of intergers
//pick i = 0; j = length-1 (last index)
//use loop while. if (i+j)/2 > target number, j--. if (i+j)/2 < target number,i++

function averagePair(array, targetNumber) {
  let left = 0;
  let right = array.length-1; //last index

  if (array.length === 0) {
    return false;
  }
  while (left < right) {
    let average = (array[left] + array[right]) / 2

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

console.log(averagePair([1, 2, 4, 6, 10, 12], 4))


//RECURSIVE NUMBER
// Is a method that call a function/ array again and again with condition when it ends
