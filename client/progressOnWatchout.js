
//create gameBoard area parameters (height, width, etc.)

//create the gameBoard 

var gameParams = {
  width: window.innerWidth,
  height: window.innerHeight
};


var gameBoard  = d3.select('body').append('svg')
  .attr('width', gameParams.width)
  .attr('height', gameParams.height);

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
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy2 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

 var enemy3 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy4 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy5 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy6 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

 var enemy7 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemy8 = gameBoard.append('circle')
  .attr('cx', Math.floor(Math.random() * gameParams.width/2))
  .attr('cy', Math.floor(Math.random() * gameParams.height/2))
  .attr('r', 10)
  .attr('fill', 'blue');

var enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8];



var enemies1 = gameBoard.selectAll('circle').data([30,30,30,30,30,30,30])
  .enter()
  .append('svg:circle')
  .attr('class', 'enemy')
  .attr('width', function(d){return d})
  .attr('height', function(d){return d})
  .attr('cx', function(d, i){return i*Math.floor(Math.random() * gameParams.width/2)})
  .attr('cy', function(d, i){return i*Math.floor(Math.random() * gameParams.height/2)})
  .attr('fill', 'blue');

var enemies = gameBoard.selectAll('.enemies')
  .data(d3.range(10))
  .attr('class', 'enemies')
  .style({
    'width': 10+'px',
    'height': 10+'px'
  })

enemies.enter()
  .append('svg:circle')
  .transition()
  .duration(1000)
  .delay(1500)
  .each('move', function(){d3.select(this.attr('fill', 'blue'))})
  .attr('cx', Math.floor(Math.random()*gameParams.width/2))
  .transition()
  .attr('cy', Math.floor(Math.random()*gameParams.height/2))

var clickPlayer = d3.behavior.drag()
  .on('dragstart', function() {player.style('fill', 'orange');})
  .on('drag', function() {player.attr('cx', d3.event.x).attr('cy', d3.event.y);})
  .on('dragend', function() {player.style('fill', 'orange');});


var player = gameBoard.selectAll('.player')
  .data([{x: gameParams.width/2, y: gameParams.height/2, r:10}])
  .enter()
  .append('svg:circle')
  .attr('class', 'player')
  .attr('cx', function(d){return d.x})
  .attr('cy',  function(d){return d.y})
  .attr('r',  function(d){return d.r})
  .call(clickPlayer)
  .style('fill', 'orange');

// var svg = d3.select("body").append("svg")
//   .append("g")
//   .attr("x", x)
//   .attr("y", y)
//   .attr("transform", "translate(" + x + "," + y + ")");

// d3.select('circle.player').on("click", clickPlayer);

// var drag = d3.behavior.drag()
//     .on("drag", movePlayer);

// var movePlayer = function(d) {
//   var x = d3.event.x;
//   var y = d3.event.y;
//   d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
// }

 // var createEnemyNode = d3.select("span").data("svg")
 //  .enter()
 //  .append("span")
 //  .attr("class", "enemy")
 //  .attr("border-radius", 1000 + "px")
 //  .attr("border", 1000 + "px")
 //  .attr("border-color", "white");
  // .attr("color", white);

// Create a function where enemies move randomly (setInterval maybe) and have their coordinates "TRANSFORMED"

 // var moveEnemy = function(x,y){
 //  // var randX = Math.floor(Math.random() * 600);
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


