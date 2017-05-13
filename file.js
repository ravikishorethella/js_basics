// create a number
var original = 4;

//ask the user to enter a number
var number = Number(prompt("Guess a number"));

// check if the condition is true
if(number === original){
    alert("You guessed right");
}
 else if(number >= original){
     alert("too high");
 }
else if(number <= original){
    alert("too low");
}
else{
    alert("unknown error");
}

