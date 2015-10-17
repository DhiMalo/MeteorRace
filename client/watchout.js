
//create gameBoard area parameters (height, width, etc.)

 //create the gameBoard 
// var gameBoard  = {
//   width: 500,
//   height: 300,  

// };
// var enemy = [{
//   x: Math.floor(Math.random() * 600),
//   y: Math.floor(Math.random() * 400)
// }];

var x = Math.floor(Math.random() * 600);
var y = Math.floor(Math.random() * 400);

var player = {

}
 //Create a player w/ a player class
    //define the shape of the player
    //add color attribute

 //Create some enemies w/ an enemy class
     //define the shape of the enemy
    //add color attribute

var svg = d3.select("body").append("svg")
  .append("g")
  .attr("x", x)
  .attr("y", y)
  .attr("transform", "translate(" + x + "," + y + ")");

 var createEnemyNode = d3.select("span").data("svg")
  .enter()
  .append("span")
  .attr("class", "enemy")
  .attr("border-radius", 1000 + "px")
  .attr("border", 1000 + "px")
  .attr("border-color", "white");
  // .attr("color", white);

 //Create a function where enemies move randomly (setInterval maybe) and have their coordinates "TRANSFORMED"
 // var moveEnemy = function(x,y){
 //  var randX = Math.floor(Math.random() * 600);
 //  var randY = Math.floor(Math.random() * 400);
 //  return randX, randY;
 // };

 // setInterval(moveEnemy, 1000);
 
 //Create the score, set to zero
 var score = 0;

 //While player is still alive
    //Increment the score every 1/10 ms player is still alive

  //Else if (player's coordinates === any enemy coordinates){
  //   score is reset
  // }

  //create a click handler to select the player to move its x, y coordinates while clicked
    //if no longer clicked release player 


