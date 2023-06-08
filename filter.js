////////////////////// PROBLEM 4 //////////////////////////////

// Using only the filter method on the numbers array, 
// create a function that returns a new array that only contains 
// the numbers divisible by both 3 and 6 but NOT 9. 


////////////////////// EXAMPLE //////////////////////////////

// Array of numbers
const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

// Here is the function invoking the .filter callback function for the numbers array above
function numsDiv() {
    // here it is asking it to return the numbers known as elements (num as the parameter in the cb func) in a new array based on the provided conditions 
    return numbers.filter(function(num) {
      return num % 3 === 0 && num % 6 === 0 && num % 9 !== 0;
    //   return numbers that are strictly divisable by 3, 6 and NOT (!== 9);
    });
  }
//   log the new array containing the elements that passed the conditions above to the console (show numbers)
  console.log(numsDiv());

  ////////////////////// ANSWER  //////////////////////////////
  
// The filter method creates a new array containing the elements from an original array that passed a conditional or conditions.
// It invokes the callback function over each element as it iterates through the array to so.
// [ 48, 12, 12, 96 ] all numbers divisable by 3 and 6, none of which are divisable by 9.