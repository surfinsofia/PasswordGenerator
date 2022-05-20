
var specialChar = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"] 
var numChar = ["1","2","3","4","5","6","7","8","9","0" ] 
var lowerCaseChar = ["a","b","c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",'Q',"R","S","T","U","V","W","X","Y","Z"]
var passwordOption = []
var finalPassword = []

var generateBtn = document.querySelector("#generate");


function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex]; // passwordOptions[randomIndex]

  return randomElement

}

function generatePassword() {
  var length = prompt("How many characters would you like your password to be?")

  if( length < 8){
    alert('Select more than 8')
    return null
  }
  if( length > 128){
    alert('Select less than 128')
    return null
  }

  var hasSpecChar = confirm('Inc)ude $pec*@l Charac+ers??!')
  var hasNumber = confirm('Includ3 Num8eRS?')
  var hasLower = confirm('include lowercase letters?')
  var hasUpper = confirm('INCLUDE UPPER CASE LETTERS?')

  if(hasSpecChar === false && hasLower === false && hasUpper === false && hasNumber === false){
    alert('Must select at least one character type')
    return null
  }

  if(hasSpecChar === true){
    passwordOption = passwordOption.concat(specialChar)
  }

  if(hasNumber === true){
    passwordOption = passwordOption.concat(numChar)
  }

  if(hasLower === true){
    passwordOption = passwordOption.concat(lowerCaseChar)
  }

  if(hasUpper === true){
    passwordOption = passwordOption.concat(upperCaseChar)
  }

  for(let i=0 ;  i < length ; i++ ){
    finalPassword.push(getRandom(passwordOption))
  }
  

return finalPassword.join('')


}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);