
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustImg;
var paperObj;

function preload(){


}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	var paperObj = new paper(200,400,70);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
	paperObj.display();
}

