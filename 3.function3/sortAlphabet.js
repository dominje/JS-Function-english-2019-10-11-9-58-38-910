function sortAlphabet(inputString) {
  inputString = inputString.split("").sort().join("");
  return inputString;
}
alert(sortAlphabet('hello'));  //true
alert(sortAlphabet('abcba'));  //true