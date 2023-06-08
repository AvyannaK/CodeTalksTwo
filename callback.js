////////////////////// PROBLEM 2 //////////////////////////////

// What is a callback? What is callback hell?
// Why does callback hell occur and why should we avoid callback hell?  
// Please code an example of callback hell to show to the class.
// Make sure to go into detail as you explain your code to the class.


////////////////////// EXAMPLE //////////////////////////////
fetch('https://api.website.com/data')
  .then(function(response) {
    return response.json();
  })
// Below are multiple callback functions have been used; making it a bit diffcult to follow.
// Each function has a plan for success and error as well as a catch for other errors.
  .then(function(data) {
    // Below this then method are 3 nested callback functions
    fetchData(data, function(result) {
      processResult(result, function(finalResult) {
        sendData(finalResult, function(success) {
          console.log('Data sent successfully!');
        }, function(error) {
          console.error('Error sending data:', error);
        });
      }, function(error) {
        console.error('Error processing result:', error);
      });
    }, function(error) {
      console.error('Error fetching data:', error);
    });
  })
  .catch(function(error) {
    console.error('Error fetching API:', error);
  });
  ////////////////////// ANSWER  //////////////////////////////
  
  // A callback function is bascially a function that uses another function as a parameter.
  // It has the function (called back upon) run as the new function is completed. 
  // It's a way to ensure code runs in the correct order when dealing with async code.
  // Callback hell happens when there is an excessive amount of call back nesting; making it hard to keep up
  // with what is happening. We should avoid it as it can cause code to become hard to read code.
