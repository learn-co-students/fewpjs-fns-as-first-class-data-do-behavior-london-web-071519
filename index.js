/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input){
 let num = parseInt(input, 10);
  if (num < 12) return "Good Morning"
  if ( num >= 17 ) return "Good Evening"
  else return "Good Afternoon"
}


/* Write your implementation of displayMessage() */
function displayMessage(input){
  document.querySelector("#greeting").innerText = input;
}