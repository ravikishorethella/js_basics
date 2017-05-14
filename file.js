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

////======================================================================
//
//// capitalize the first character in a string
//
//function capitalize(string){
//    return string.charAt(0).toUpperCase()+string.slice(1); 
//}
//
//var city = "nadendla";
//// call the function
//capitalize(city);
//
////======================================================================

//// Another way of capitalizing the first character in the string
//
//function capitalize(string){
//    if(typeof string === "number"){
//        return "this is not a string";
//    }
//    return string.charAt(0).toUpperCase()+string.slice(1); 
//}
//
//// with a string
//var city = "nadendla";
//capitalize(city);
//
//// with a number
//
//var num = 4756;
//capitalize(num);
//
////============================================================================

//// ===============     isEven()    =============================================
//
//function isEven(num){
//    if(num %2 === 0){
//        return true;
//    }else{
//        return false;
//    }
//}
//
//isEven(4);
//isEven(21);
//isEven(68);
//isEven(333);
//
////==============         END OF isEven() problems        ========================

//
//// ===============     isFactorial()    ==========================================
//
//function factorial(num){
//    if(num === 0){
//        return 1;
//    }
//    return num*factorial(num-1);
//}
//
//// check for the following 
//factorial(5);
//factorial(2);
//factorial(10);
//factorial(0);
//
////===============             End OF factorial() problems        ===================


//// ==============================        KebabToSnake      ===========================
//
//// it is nothing but replacing the "-" with underscore "_"
//// kebabcase is with "-" and snakecase is with "_"
//function kebabToSnake(string){
//    return string.replace(/-/g,"_");
//}
//
//var name = "dogs-are-awesome";
//kebabToSnake(name);
//
////=====================================================================================

////=============================         TODO LIST         ===============================
////
////"new" - add a todo
////"list" - list all todos
////"quit" - quit app
//
//// create a empty list
//var todos = [];
//// ask the user to enter a todo
//var input = prompt("what would you like to do?");
////the condition should be in such a way that till the user enters either the new or list or quit we need to pop some msg
//while(input !== "quit"){
//    if(input === "list"){
//        console.log(todos);        
//    }else if(input === "new"){
//        var newTodo = prompt("enter new todo");
//        todos.push(newTodo);
//    }
//    input = prompt("what would you like to do?");
//}
//console.log("Ok, you quit the app");
//
////============================================================================================