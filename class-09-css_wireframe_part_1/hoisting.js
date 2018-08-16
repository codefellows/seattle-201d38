'use strict';

// function multiplyTwoNumbers(a,b) {
//   var result = helperFunction(a,b);
//   return result;

//   function helperFunction(a,b) {
//     return a + b;
//   }
// }
// console.log(multiplyTwoNumbers(2,2));
// console.log(internalMultiplyTwoNumbers(2,2));

// function internalMultiplyTwoNumbers(a,b) {
//   // Vinicio - 1 - Declare all the variable names
//   var result = undefined;
//   // Vinicio - 2 - Define all the functions
//   function helperFunction(a,b) {
//     return a + b;
//   }
//   result = helperFunction(a,b);
//   return result;
// }


// function getMisteryName() {
//   function chooseCat() {
//     return 'Gregor';
//   }
//   return chooseCat();

//   function chooseCat() {
//     return 'Buddy Cat';
//   }
// }

function getMisteryName() {
  var chooseCat = function() {
    return 'Gregor';
  }
  return chooseCat();
  console.log('I will never happen');

  var chooseCat = function() {
    return 'Buddy Cat';
  }
}

// function undefinedProblem() {
//   // var gregor = undefined;
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
//   var gregor = 'CUTE!';
//   console.log(gregor);
//   console.log(gregor);
//   console.log(gregor);
// }

// console.log(undefinedProblem());

function getName() {
  return ' Gregor';
}

function greetUser() {
  var output = 'Hello' + getName();
  console.log('I am back');
  return output;
}

console.log(greetUser());




