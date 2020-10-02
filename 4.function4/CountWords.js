function countWords(inputString) {
  var noOfWords = 0;
  for(var i = 0; i<=inputString.length; i++){
    if(inputString[i] === " "){
      ++noOfWords;
    }
  }  
  return noOfWords += 1;
}
alert(countWords('one two three four five six'));  //true
alert(countWords('hi hello how are you'));  //true