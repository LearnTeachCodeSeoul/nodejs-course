/*
Declare a variable named 'fruit'.
Make the fruit variable reference the value 'orange' with the type of String.
Then use console.log() to print "The fruit name has more than five characters."
if the length of the value of fruit is greater than five.
Otherwise, print "The fruit name has five characters or less."
*/
var fruit = "orange";

function checkLength(someString){
  if(someString.length > 5){
    return("String is longer than 5 with a " + someString.length + " length");
  }else{
    return("String is not longer than 5");
  }
}

console.log(checkLength(fruit));
