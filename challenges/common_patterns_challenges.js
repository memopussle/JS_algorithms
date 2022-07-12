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

//4. loop through 2nd intergers to check if 2nd number has the same number & frequency

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