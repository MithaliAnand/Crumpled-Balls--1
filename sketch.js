
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,390,20);
	ground = new Ground(400,690,800,15);
	dustbin = new Dustbin();
	

	Engine.run(engine);
  
}


function draw() {
  
  background("black");
  paper.display();
  ground.display();
  dustbin.display();
 
  
  drawSprites();
 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}



