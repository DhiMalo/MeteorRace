
//create gameBoard area parameters (height, width, etc.)

//create the gameBoard 


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
  .attr('class', 'player')
  .attr('cx', 400)
  .attr('cy', 300)
  .attr('r', 10)
  .attr('fill', 'orange');


// var svg = d3.select("body").append("svg")
//   .append("g")
//   .attr("x", x)
//   .attr("y", y)
//   .attr("transform", "translate(" + x + "," + y + ")");


var clickPlayer = function() {
  if (d3.event.defaultPrevented) return;
  var point = d3.mouse(this) //extracts click location
  , p = {x: point[0], y: point[1] };

  svg.append("circle")
      .attr("transform", "translate(" + p.x + "," + p.y + ")")
      .attr("r", "5")
      .attr("class", "dot")
      .style("cursor", "pointer")
      .call(drag);
}

d3.event('circle.player').on("click", clickPlayer);

var drag = d3.behavior.drag()
    .on("drag", movePlayer);

var movePlayer = function(d) {
  var x = d3.event.x;
  var y = d3.event.y;
  d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
}

 // var createEnemyNode = d3.select("span").data("svg")
 //  .enter()
 //  .append("span")
 //  .attr("class", "enemy")
 //  .attr("border-radius", 1000 + "px")
 //  .attr("border", 1000 + "px")
 //  .attr("border-color", "white");
  // .attr("color", white);

// Create a function where enemies move randomly (setInterval maybe) and have their coordinates "TRANSFORMED"

 var moveEnemy = function(x,y){
  var randX = Math.floor(Math.random() * 600);
  var randY = Math.floor(Math.random() * 400);
  return randX, randY;
 };

 setInterval(moveEnemy, 1000);
 
 //Create the score, set to zero
 var score = 0;

 //While player is still alive
    //Increment the score every 1/10 ms player is still alive

  //Else if (player's coordinates === any enemy coordinates){
  //   score is reset
  // }

  //create a click handler to select the player to move its x, y coordinates while clicked
    //if no longer clicked release player 


