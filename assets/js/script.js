// Assignment code here

// Below is the code that will hide or display the password criteria contained within
// myDIV when the Generate Password button is pressed.

function myFunction() { 
  var x = document.getElementById("myDIV"); 
  if (x.style.display === "none") { 
    x.style.display = "block"; 
  } else { 
    x.style.display = "none"; 
  } 
}

// Below is the code that will update the slider value when the slider handle is dragged

var slider = document.getElementById("myRange");
var output = document.getElementById("length"); 
output.innerHTML = slider.value; 
slider.oninput = function() {
   output.innerHTML = this.value; 
  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

