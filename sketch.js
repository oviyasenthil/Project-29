const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var engine, world;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;
 
  ground1 = new Ground(400,200,60,10);

  //level1
  block1 = new Block(400,190,10,10);
  block2 = new Block(410,190,10,10);
  block3 = new Block(420,190,10,10);
  block4 = new Block(430,190,10,10);
  block5 = new Block(440,190,10,10);
  block6 = new Block(450,190,10,10);
  
  //level2
  block7 = new Block(410,180,10,10);
  block8 = new Block(420,180,10,10);
  block9 = new Block(430,180,10,10);
  block10 = new Block(440,180,10,10);

  //level3
  block11 = new Block(420,170,10,10);
  block12 = new Block(430,170,10,10);

  //level4
  block13 = new Block(425,160,10,10);

  polygon = Bodies.circle(200,300,10,10);
  World.add(world,polygon);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
  ground1.display();
}