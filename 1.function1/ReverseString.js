function reverseString(str) {

    var splitString = str.split("");
    var reverseArr = splitString.reverse();
    var joinArr = reverseArr.join(""); //
    
    return joinArr; 
}