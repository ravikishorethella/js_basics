////  Guesing the random number
//
//// create a number
//var original = 4;
//
////ask the user to enter a number
//var number = Number(prompt("Guess a number"));
//
//// check if the condition is true
//if(number === original){
//    alert("You guessed right");
//}
// else if(number >= original){
//     alert("too high");
// }
//else if(number <= original){
//    alert("too low");
//}
//else{
//    alert("unknown error");
//}
//
////=================  START OF WHILE LOOP PROBLEMS    =============
//
//// print each character in a string
//
//// creating a string named javascript
//var string = "javascript";
//
//// assigning the initial count
//var count = 0;
//
////iterating over the loop to find the characters in the string
//while(count<string.length){
//    console.log(string[count]);
//    count++;
//}
////================================================================
//
//// print all numbers between -10 and 19
//
//// the initial number is -10
//var number = -10;
//
//// perform the iteration
//while(number<=19){
//    console.log(number);
//    number++;
//}
//
////=================================================================
//
//// print all even numbers between 10 and 40
//
//// assign the initial number as 10
//var number = 10
//
//// check the condition
//while(number<=40){
//    if(number%2 === 0){
//       console.log(number); 
//    }    
//    number = number+1;
//}
//
////===================================================================
//
//// print all odd numbers between 300 and 333
//
//// assign the initial number
//var number = 300;
//
//// check the condition
//while(number<=333){
//    if(number%2 !== 0){
//        console.log(number);
//    }
//    number++;
//}
//
////====================================================================
//
////print all numbers divisible by 5 and 3 between 5 and 50
//
//// assign the initial number
//var number = 5;
//
//// check the condition
//while(number<=50){
//    if(number%5 === 0 && number%3 === 0){
//        console.log(number);
//    } 
//    number++;
//} 
////===================     END OF WHILE LOOP PROBLEMS ================
//
////to annoy the user with the continuous popups
//var string = prompt("Are you there?");
//
//// check the important logic
//while((string.indexOf("yes") === -1) && (string.indexOf("yeah") === -1)){
//    var string = prompt("Are you there?");
//}
//alert("Yay! we made it!!!");
//
//============================================================================
//
//
// ================         FOR LOOPS          =============================== 
//
// print all numbers between -10 and 19
//
//// the initial number is -10
//for (var i=-10; i<=19; i++){
//    console.log(i);
//}
//
////=================================================================
//
//// print all even numbers between 10 and 40
//
//// assign the initial number as 10
//for(var i=10; i<=40; i++){
//    if(i%2===0){
//        console.log(i);
//    }
//}
////===================================================================
//
//// print all odd numbers between 300 and 333
//
//// assign the initial number
//for (var i=300; i<=333; i++){
//    if(i%2 !== 0){
//        console.log(i);
//    }
//}
//
////====================================================================
//
////print all numbers divisible by 5 and 3 between 5 and 50
//
//// assign the initial number
//for(var i=5; i<=50; i++){
//    if((i%3 === 0) && (i%5 === 0)){
//        console.log(i);
//    }
//}
//
////===================     END OF FOR LOOP PROBLEMS ================
//
