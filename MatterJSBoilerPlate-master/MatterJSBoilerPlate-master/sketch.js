
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var character
var building
var car

function preload()
{
	car = loadImage("th.png")
	building = loadImage("apartment.png")
	character = loadImage("th.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


if(gamestate === PLAY){
	ground.velocityX = .5;
	score = score + Math.round(frameCount/70);

	if(keydown("DOWN_ARROW")&& character.y >=100){
		character.velocityY = 2;
	}

	if(keydown("UP_ARROW")&& character.y >=100){
		character.velocityY = -2
	}
}