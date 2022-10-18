/*console.log("we have started"); //this outputs our message to the console
const age=document.getElementById('23')
//let, var or const
*/

/*// example 2
let cones = 15;
let berries = "15";
let name = "veronica";
let weight =55;

if(cones== 15){
    console.log ("condition met")
}
else{
    console.log("condition not met")
}

if(name=="veronica"){
    console.log ("condition met")
}
else{
    console.log("condition not met")
}

if(cones== berries){
    console.log ("condition met")
}
else{
    console.log("condition not met")
}

if(weight < 0){
    console.log ("you are weightless")
}
else if(weight > 5){
    console.log("you have some weight")
}
else{
    console.log("you are heavy")
}


// === means really equivalent
if (weight===55){
    console.log ("you are weightless")
}
else{
    console.log("you are heavy")
}


// <= means "less or equal to"
if (weight <5){
    console.log ("you are weightless")
}
else if( weight <=5){
    console.log("you have some weight")
}
else{
    console.log("you are heavy")
}
// && means "and" it also means both conditions have to be either true or false
 
if (weight >0 || weight <=55){

    console.log ("you are weightless")
}
else if( weight >5){
    console.log("you have some weight")
}
else{
    console.log("you are heavy")
}
//implement an elevetor  

let level =1;

if ("level==3"){
    console.log ("the evelvator is at level 3,its coming for you")
}
else if("level==2"){
    console.log("the elevator is at level 2,its coming for you")
}
else{
    console.log("the elevator is at level 1,its coming for you")
}

// so here this last statement which shows at level 900 will print since the first two statements are both false
*/
  
//implement an elevator using Switch 


var level = "1";

switch(level){

    case "2":
    console.log("the elevator is at level 2 its coming to you");
    break;

    case "3":
     console.log("the elevator is at level 3 and its coming to you");
     break;
     
     case "1":
      console.log("the elevator is at level 1 and its open for you");
      break;

      default:
        console.log("nice to meet you"); 
       // when i omitted break statement, all the statements in all the cases were excuted and it's called fall through
       // When there's no match found,it excutes the default statement








}






























