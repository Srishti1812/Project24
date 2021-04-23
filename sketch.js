
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	box = new Box(600, 150 ,10, 40);
	box2 = new Box(630, 170 ,60, 10);
	box3 = new Box(660, 150 ,10, 40);
	paper = new Paper(100, 50, 10);
	ground = new Ground(400, 180, 1000, 5)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	box.display();
	box2.display();
	box3.display();
	ground.display();
  
	paper.display();
  
	drawSprites();
   
  }


  function keyPressed(){
	  if (keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.body, paper.body.position, { x : 19, y : -10} )
	  }
  }



