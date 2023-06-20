// Assignment code here

let includelowercase = "abcdefghijklmnopqrstuvwxyz";
let includeuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let includenumbers = "1234567890";
let includesymbols = "~!@#$%^&*()_-=+<>?";

let booleonlowercase = false;
let booleonuppercase = false;
let booleonnumbers = false;
let booleonsymbols = false;

console.log(includelowercase);
console.log(includeuppercase);
console.log(booleonlowercase);

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

// Below is the code that will update the slider value when the slider handle is dragged.
// This is for password length.

var slider = document.getElementById("myRange");
var output = document.getElementById("length"); 
output.innerHTML = slider.value; 
slider.oninput = function() {
   output.innerHTML = this.value; 
  }

// Below is the code that checks if checkbox has been changed (https://html.form.guide/html-form/html-checkbox-events/)

// Below changes the booleonuppercase value depending on if checkbox is checked or not.
function checkUppercase()
{
  var checkbox = document.getElementById('uppercase');
  if (checkbox.checked != true)
  {
    booleonuppercase = false;
    console.log("uppercase " + booleonuppercase); 
  } else {
    booleonuppercase = true;
    console.log("uppercase " + booleonuppercase);
    }
  }

// Below changes the booleonlowercase value depending on if checkbox is checked or not.
  function checkLowercase()
  {
    var checkbox = document.getElementById('lowercase');
    if (checkbox.checked != true)
    {
      booleonlowercase = false;
      console.log("lowercase " + booleonlowercase); 
    } else {
      booleonlowercase = true;
      console.log("lowercase " + booleonlowercase);
      }
    }

// Below changes the booleonnumbers value depending on if checkbox is checked or not.
    function checkNumbers()
    {
      var checkbox = document.getElementById('numbers');
      if (checkbox.checked != true)
      {
        booleonnumbers = false;
        console.log("numbers " + booleonnumbers); 
      } else {
        booleonnumbers = true;
        console.log("numbers " + booleonnumbers);
        }
      }

// Below changes the booleonsymbols value depending on if checkbox is checked or not.
      function checkSymbols()
      {
        var checkbox = document.getElementById('symbols');
        if (checkbox.checked != true)
        {
          booleonsymbols = false;
          console.log("symbols " + booleonsymbols); 
        } else {
          booleonsymbols = true;
          console.log("symbols " + booleonsymbols);
          }
        }

// Below is the code that generates the random string

const generateRandomString = (length) => { let result = '';
const characters =
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
for (let i = 0; i < length; i++) { result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
};

console.log(generateRandomString(5));
console.log(generateRandomString(30));







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

