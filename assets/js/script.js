// Assignment code here

let includeuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let includelowercase = "abcdefghijklmnopqrstuvwxyz";
let includenumbers = "1234567890";
let includesymbols = "~!@#$%^&*()_-=+<>?";

let booleonuppercase = false;
let booleonlowercase = false;
let booleonnumbers = false;
let booleonsymbols = false;
let initialvalue = 8;

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
// It also calls the createpool function
function checkUppercase()
{
  var checkbox = document.getElementById('uppercase');
  if (checkbox.checked != true)
  {
    booleonuppercase = false;
    console.log("uppercase " + booleonuppercase);
    includeuppercase = "";
    createpool(); 
  } else {
    booleonuppercase = true;
    console.log("uppercase " + booleonuppercase);
    includeuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    createpool();
    }
  }

// Below changes the booleonlowercase value depending on if checkbox is checked or not.
// It also calls the createpool function
  function checkLowercase()
  {
    var checkbox = document.getElementById('lowercase');
    if (checkbox.checked != true)
    {
      booleonlowercase = false;
      console.log("lowercase " + booleonlowercase);
      includelowercase = "";
      createpool(); 
    } else {
      booleonlowercase = true;
      console.log("lowercase " + booleonlowercase);
      includelowercase = "abcdefghijklmnopqrstuvwxyz";
      createpool();
      }
    }

// Below changes the booleonnumbers value depending on if checkbox is checked or not.
// It also calls the createpool function
    function checkNumbers()
    {
      var checkbox = document.getElementById('numbers');
      if (checkbox.checked != true)
      {
        booleonnumbers = false;
        console.log("numbers " + booleonnumbers);
        includenumbers = "";
        createpool(); 
      } else {
        booleonnumbers = true;
        console.log("numbers " + booleonnumbers);
        includenumbers = "1234567890";
        createpool();
        }
      }

// Below changes the booleonsymbols value depending on if checkbox is checked or not.
// It also calls the createpool function
      function checkSymbols()
      {
        var checkbox = document.getElementById('symbols');
        if (checkbox.checked != true)
        {
          booleonsymbols = false;
          console.log("symbols " + booleonsymbols);
          includesymbols = "";
          createpool(); 
        } else {
          booleonsymbols = true;
          console.log("symbols " + booleonsymbols);
          includesymbols = "~!@#$%^&*()_-=+<>?";
          createpool();
          }
        }

// Below is the code that gathers the value for password length.
// It also calls the createpool function

function checkValue() 
{
  var initialvalue = document.getElementById('myRange').valueAsNumber;
  createpool();
}

// Below is the code that decides which characters are included in our pool for the password generation.

let passwordpool = "";

function createpool()

{ 
  console.log(includeuppercase + includelowercase + includenumbers + includesymbols);
  console.log(initialvalue);

  // Below is the code that generates the random string

  initialvalue = document.getElementById('myRange').valueAsNumber;
  console.log(initialvalue);
  const generateRandomString = (length) => { let result = '';
  const characters = (includeuppercase + includelowercase + includenumbers + includesymbols);
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) { result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result; };
  
  // Below is the code that updates password id text to be the generated password

  function changeContent() {

    var x = document.getElementById('password');

    x.value = generateRandomString(initialvalue);
  } 
  changeContent();
  console.log(generateRandomString(initialvalue));
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

