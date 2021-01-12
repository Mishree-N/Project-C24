
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var floor;
var trash1, trash2, trash3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);

	//engine and world
	engine = Engine.create();
	world = engine.world;

	//create paper ball
	paperBall=new Paper();

	//create floor
	floor =new Ground();

	//create trash
	trash1=new Trash(550,243,130,15);
	trash2=new Trash(480,215,15, 70);
	trash3=new Trash(620,215,15,70);

	//run engine
	Engine.run(engine);
}


function draw() {

	//make rectmode center
	rectMode(CENTER);
	//make background red
	background("red");

	//display paper ball
	paperBall.display();

	//display floor
	floor.display();

	//display trash
	trash1.display();
	trash2.display();
	trash3.display();


}


function keyPressed(){

	//when up arrow key is pressed
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:55, y: -55});

	}



}

