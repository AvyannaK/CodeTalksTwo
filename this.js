////////////////////// PROBLEM 3 //////////////////////////////

// The “this” keyword works differently in arrow functions vs regularly declared functions.
// Explain how the “this” keyword works differently in arrow functions vs normal functions.
// Write some code that shows that you understand the difference between how the “this” keyword is used.  
// Make sure to go into detail as you explain your code to the class.

////////////////////// EXAMPLE //////////////////////////////
// Regular function
const regularFunction = function() {
    console.log(this);
  };
  
  // Arrow function
  const arrowFunction = () => {
    console.log(this);
  };
// Created Object
  const obj = {
    name: 'Object',
    regular: regularFunction,
    arrow: arrowFunction
  };
  
  // Calling regular function as a method of 'obj' / the this keyword will refer the th object itself
  obj.regular(); // Output: { name: 'Object', regular: [Function: regularFunction], arrow: [Function: arrowFunction] }
  
  // Calling arrow function as a method of 'obj'/ the this keyword will refer to the global object (scope)
  obj.arrow(); // Output: {} (Empty object) as it refers to the global object
  
  // Calling regular function globally / the this keyword will refer to the global object
  regularFunction(); // Output: [object global] (In Node.js) or [object Window] (In browser)
  
  // Calling arrow function globally/ the this keyword will refer to the global object
  arrowFunction(); // Output: [object global] (In Node.js) or [object Window] (In browser)
  

  ////////////////////// ANSWER  //////////////////////////////

// In regular declared functions the value of this can change *dynamically based on the execution context of the function.
// A regular declared function using the this keyword CAN be used as a method on object. 
// As the keyword this will refer to the object, again since it can change based on how its invoked and the execution (dynamic)


// In arrow function the value of this refers to the global object (scope), as it inherits its value from the surrounding *lexical scope
// A regular declared function using the this keyword CANNOT be used as a method on object. 
// As the keyword this  in arrow functions will always refer the glocal scope, regardless of where/ how its called.
// This can be useful when writing nested code and you want to access something outside of a local object on the global object (scope).


// When executing regular or arrow functions without reference to anything, the this keyword will refer to the global object (scope).


