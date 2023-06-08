////////////////////// PROBLEM 5 //////////////////////////////

// What is a async/await? Why is async/await useful? 
// What are pro/cons to using async/await? 
// Please code some examples of async/await to show to the class. 
// Make sure to go into detail as you explain your code to the class.

////////////////////// EXAMPLE //////////////////////////////

// Here is an async function using the await statments
async function fetchData() {
 // In this function in the try block it want it to fetch the data from the url. A try block is a block of code that is used to enclose a section of code where errors might occur.
// Await is used to pause until this is done succesfully then it will be assigned to the variable response, again because error might occur.
    try {
      const response = await fetch('https://api.async.com/data');
// Then it uses the json method to parse that dat into json and it uses await to pause until that is successfully done.
      const data = await response.json();
// Then it becomes the varibale named data and is asked to log that variable to the console (showing the data from the url written as json)
      console.log(data);
//   The catch method is used to handle all errors and console log the error.
    } catch (error) {
      console.error(error);
    }
  }
// The function is invoked
  fetchData();
  
  ////////////////////// ANSWER  //////////////////////////////
  
// Async/ await is a feature in js to handle asynchronous code.
// It basically makes asynchrounous code look more synchronus resulting in easrier more manageable code (to read, write, operate).
// Aysnc is used to define a function as asynchronous, meaning it will automatically return a promise.
// Inside an async function you can use await to tell a function to stop until a promise is resolved or rejcted, thus creating sychronous flow within asynchronous code.
// Pros-catches and handles errors and allows for a pause if needed, provides a logical sense to operation of flow, easier to read.
// Con-this feature may slow down operation as it has more pauses to check if it does return errors, thus creating rejected promises. Those errors must be handled using the catch method to keep the flow going 
// without interuption as it is still suppose to be asynchronous code.