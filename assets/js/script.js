// Assignment code here

function myFunction() { 
  var x = document.getElementById("myDIV"); 
  if (x.style.display === "none") { 
    x.style.display = "block"; 
  } else { 
    x.style.display = "none"; 
  } 
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

