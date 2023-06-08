////////////////////// PROBLEM 1 //////////////////////////////

// What is a promise? What are promises used for? 
// What are pro/cons to using a promise? 
// Please code some examples of promises to show to the class.
// Make sure to go into detail as you explain your code to the class.


////////////////////// EXAMPLE //////////////////////////////

  // Here the function fetch is used for HTTP requests and it fetching data from the url below
fetch('https://api.website.com/data') 
// Next the then method uses a callback function that takes the response (data) from the request as a parameter
  .then(function(response) {
    return response.json();
 // returning the response (data) using the json method which parses the data as json data (turns it into json format)
  })
   // Assuming we set a varible to that parsed data and named it data it would do the following:
  .then(function(data) {
    // Next it takes that json data as a parameter in another then method using a call back function and tell it how to handle it
    console.log(data);
    // log the data to the console (show it)
  })
  .catch(function(error) {
    // the catch method takes a callback function using any error as it's parameter
    console.error(error);
    // and will console log that error (show what the error is)
  });

////////////////////// ANSWER  //////////////////////////////

// A promise is basically a way to handle 
// asynchronous code/ operations (tasks able to run immediately
// and not have to wait for the other to finish in order to start).
// Operations such as http reuests, fetching data, reading files.
// Esstentially it's a way to define what you want the operation to do when it returns successfully
// and what to do if there is an error. This can create a long running tasks as it starts with a function 
// and then continues to chain (add on tasks/actions) using methods that have callback functions that take the previous value as a parameters and 
// continues into the task (method that has call back function returning a value), and immediately moving on to the next task and the next task(method assigned).
// Or providing a task for if theres an error (  most commonly catch()  ).
// It's a "promise" on how things will be handled if successful and what it will do if not.

// Pro-promises allow for long running, smooth flowing code, that will know how to handle success and errors without interupption.
// Con-promises are continous so theres no support for cancellation if/when needed which may cause errors/issues to be overlooked.
// Con- promises can start to become lengthy/ complex and hard to read/ keep track of.
