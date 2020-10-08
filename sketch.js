
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var Roof1;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Roof1=new Roof(384,100,570,20);

	bobObject1=new Bob(200,530,90,90);
	rope1=new Rope(bobObject1.body,Roof1.body,-bobObject1*2, 0);
	bobObject2=new Bob(292,530,90,90);
	rope2=new Rope(bobObject2.body,Roof1.body,-bobObject2*2, 0);
	bobObject3=new Bob(384,530,90,90);
	rope3=new Rope(bobObject3.body,Roof1.body,-bobObject3*2, 0);
	bobObject4=new Bob(476,530,90,90);
	rope4=new Rope(bobObject4.body,Roof1.body,-bobObject4*2, 0);
	bobObject5=new Bob(568,530,90,90);
	rope5=new Rope(bobObject5.body,Roof1.body,-bobObject5*2, 0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("darkgray");
  
	Roof1.display();

	bobObject1.display();
	rope1.display();
	bobObject2.display();
	rope2.display();
	bobObject3.display();
	rope3.display();
	bobObject4.display();
	rope4.display();
	bobObject5.display();
	rope5.display();

	drawSprites();
 
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-35,y:-35});
	}

}


