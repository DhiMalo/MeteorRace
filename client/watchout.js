
//create gameBoard area parameters (height, width, etc.)

//create the gameBoard 

// var svg = d3.select("body").append("svg")
//   .append("g")
//   .attr("x", x)
//   .attr("y", y)
//   .attr("transform", "translate(" + x + "," + y + ")");

var gameBoard  = d3.select('body').append('svg')
  .attr('width', 800)
  .attr('height', 600);

// for (var i = 0; i < 10; i++){
//   var enemy = 'enemy' + i;
//   var a = Math.floor(Math.random() * 800);
//   var b = Math.floor(Math.random() * 600);

//   'enemy' + i = gameBoard.append('circle')
//   .attr('cx', a)
//   .attr('cy', b)
//   .attr('r', 10)
//   .attr('fill', 'blue');
//   return enemy;
// };  


var enemy1 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy2 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

 var enemy3 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy4 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy5 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy6 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

 var enemy7 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy8 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * 800))
  .attr('cy', Math.floor(Math.random() * 600))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];

var enemies = gameBoard.selectAll('circle').data([400,400,300,300,500,600,700])
  .enter()
  .append('circle')
  .attr('width', function(d){return d})
  .attr('height', function(d){return d})
  .attr('cx', function(d, i){return i*Math.floor(Math.random() * 800)})
  .attr('cy', function(d, i){return i*Math.floor(Math.random() * 600)})
  .attr('fill', 'blue');




var player = gameBoard.append('circle')
  .attr('cx', 400)
  .attr('cy', 300)
  .attr('r', 10)
  .attr('fill', 'orange');


 //Create a player w/ a player class
    //define the shape of the player
    //add color attribute

 //Create some enemies w/ an enemy class
     //define the shape of the enemy
    //add color attribute

 // var createEnemyNode = d3.select("span").data("svg")
 //  .enter()
 //  .append("span")
 //  .attr("class", "enemy")
 //  .attr("border-radius", 1000 + "px")
 //  .attr("border", 1000 + "px")
 //  .attr("border-color", "white");
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


