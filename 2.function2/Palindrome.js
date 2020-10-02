function palindrome(inputString) {
  inputString = inputString.toUpperCase().replace(/[^A-Z]+/g,"");
  return inputString === inputString.split("").reverse().join("");
}
alert(palindrome('hello'));  //false
alert(palindrome('abcba'));  //true