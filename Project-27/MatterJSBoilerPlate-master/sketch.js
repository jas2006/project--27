
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,bob1,bob2,bob3,ground ;
var chain ;
function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobBody = Bodies.circle(200,height/2,50);
	bobBody.shapeColor = color(255,0,255);
    bob = ellipse(200,heigth/2,50);
	World.add(world,bobBody);

	bob.x = MouseX;
	bob.y = MouseY;
	
	bob1Body = Bodies.circle(300,height/2,50);
	bob1Body.shapeColor = color(255,0,255);
    bob1 = ellipse(300,heigth/2,50);
	World.add(world,bob1Body);

	
	bob2Body = Bodies.circle(400,height/2,50);
	bob2Body.shapeColor = color(255,0,255);
    bob2  = ellipse(400,heigth/2,50);
	World.add(world,bob2Body);

	groundBody = Bodies.rectangle(width/2,50,680,10);
	groundBody.shapeColor = color(255,255,0);
	ground = rect(width/2 , 600,800,10);
	World.add(world,groundBody);
	
	chain(ground,bob);
	chain(ground,bob1);
	chain(ground,bob2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  chain.display();
  drawSprites();
 
}



