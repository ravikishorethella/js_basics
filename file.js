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


////=======================      for loop  vs  forEach loop          =============================
//
//var colors = ["green","red","blue","yellow"];
//for(var i=0; i<colors.length;i++){
//    console.log(colors[i]);
//} 
//
////-----------------------------------------------------------------------------------------------
//
//var colors = ["green","red","blue","yellow"];
//colors.forEach(function(color){
//    console.log(color);
//});
//
////==============================================================================================

////=============================     TODO LIST with forEach loop    ==============================
//
//"new" - add a todo
//"list" - list all todos
//"delete" - remove specific todo
//"quit" - quit app

//
//var todos = ["Buy New turtle"];
//// ask the user to enter a todo
//var input = prompt("what would you like to do?");
////the condition should be in such a way that till the user enters either the new or list or quit we need to pop some msg
//while(input !== "quit"){
//    if(input === "list"){
//        listTodos();
//    }else if(input === "new"){
//        addTodo();
//    }else if(input === "delete"){
//        deleteTodo();
//    }
//    input = prompt("what would you like to do?");
//}
//console.log("Ok, you quit the app");
//
//function listTodos(){
//    console.log("**********");
//        todos.forEach(function(todo, i){
//           console.log(i + " : "+ todo);  
//        });              
//        console.log("**********");
//}
//function addTodo(){
//    var newTodo = prompt("enter new todo");
//        todos.push(newTodo);
//        console.log("Added Todo");        
//}
//function deleteTodo(){
//    //ask the user to give the index of the item to delete
//        var index = prompt("enter the index of the todo to delete");
//        todos.splice(index,1);
//        console.log("Deleted Todo");
//}

////============================================================================================

// write a function printReverse() that takes the array an array as an argument and prints out the elements in the array in reverse order.

//// create the input array
//var one = [1,2,3,4];
//
//function reverse(array){
//    for(var i = array.length-1;i>=0;i--){
//        console.log(array[i]);
//    }
//}
////call the function
//reverse(one);

//==================================================================================================

// write a function which takes the array as an argument and returns true if all elements in the array are identical

//var one = [1,1,1,1,1];
//function isUniform(arr){
//    var first = arr[0];
//    for(var i=1;i<arr.length;i++){
//        if(arr[i]!==first){
//            return false;
//        }
//    }
//    return true;
//}
//isUniform(one);

//====================================================================================================
// write a function that accepts an array of numbers and returns the sum of all the numbers in the array
//function sumArray(arr){
//    var total = 0;
//    arr.forEach(function(element){
//        total = total + element;
//    });
//    return total;
//}
//sumArray([4,10,6]);

//======================================================================================================

// write a function that accepts an array of numbers and returns the max of all the numbers in the array

//function maxArray(arr){
//    var max = arr[0];
//    for(var i=1;i<arr.length;i++){
//        if(arr[i]>max){
//            max = arr[i];
//        }
//    }
//    return max;
//}
//maxArray([5,2,-8,6]);

//=======================================================================================================

// nested arrays and objects
//var posts = [
//    {
//        title : "cats are mediocre",
//        author : "colt",
//        comments: ["awesome post","aweful post"]
//    },
//    {
//        title : "cats are awesome",
//        author : "cat lovers",
//        title:["<3","i hate"]
//    }
//]
//===========================================================================================================

// create an array of movie objects. Each movie should have a title, rating and hasWatched properties.
// iterate through the array and print out something that lookis like
// you have watched "frozen" - 4.5 stars

//// create an array named movie
//movie = [
//    {
//        title: "GodFather",
//        rating: 5,
//        hasWatched: true        
//    },
//    {
//        title: "Forest Gump",
//        rating: 4.5,
//        hasWatched: false
//    },
//    {
//        title: "lucy",
//        rating: 4,
//        hasWatched: true
//    }
//]
//
//movie.forEach(function(element){
//    var result = "You have ";
//    if(element.hasWatched === true){
//        result += "watched ";
//    }else{
//        result += "not watched ";
//    }
//    result += "\"" + element.title +"\" - ";
//    result +=element.rating + " stars";
//    console.log(result);
//});
//
//////////////////////        using function         //////////////////////////////////
//
//movie = [
//    {
//        title: "GodFather",
//        rating: 5,
//        hasWatched: true        
//    },
//    {
//        title: "Forest Gump",
//        rating: 4.5,
//        hasWatched: false
//    },
//    {
//        title: "lucy",
//        rating: 4,
//        hasWatched: true
//    }
//]
//
//movie.forEach(function(element){
//    console.log(movielist(element));
//});
//
//function movielist(element){
//    var result = "You have ";
//    if(element.hasWatched === true){
//        result += "watched ";
//    }else{
//        result += "not watched ";
//    }
//    result += "\"" + element.title +"\" - ";
//    result +=element.rating + " stars";
//    return result;
//}
//
//////////////////////////          normal way               =============================
//movie = [
//    {
//        title: "GodFather",
//        rating: 5,
//        hasWatched: true        
//    },
//    {
//        title: "Forest Gump",
//        rating: 4.5,
//        hasWatched: false
//    },
//    {
//        title: "lucy",
//        rating: 4,
//        hasWatched: true
//    }
//]
//
//movie.forEach(function(element){
//    if(element.hasWatched === true){
//        console.log("you have watched "+element.title+" - "+element.rating+" stars");
//    }
//    else{
//        console.log("you have not seen "+element.title+" - "+element.rating+" stars");
//    }
//});

//===========================================================================================================