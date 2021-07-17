
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall;
var wall2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options = {

		isStatic:true
	}
    ground = Bodies.rectangle(400,370,790,10,ground_options);
	World.add(world,ground);
	 
	wall = Bodies.rectangle(600,310,10,100,ground_options);
	World.add(world,wall);
	wall2 = Bodies.rectangle(700,310,10,100,ground_options);
	World.add(world,wall);

	var ball_options = {
		isStatic:false,
		restituion:0.3,
		friction:0,
		density:1.2

	}
	ball = Bodies.circle(100,100,30,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(ground.position.x,ground.position.y,790,10);
  rect(wall.position.x,wall.position.y,10,100);
  rect(wall2.position.x,wall2.position.y,10,100);

  ellipse(ball.position.x,ball.position.y,30);
  
  drawSprites();
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:250});
    }
}


