const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
 // rock = loadImage('images/rock.png')
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  tram1 = new Tram(50, 170, 50, 50)
  tram2 = new Tram(100, 200, 50, 50)
  tram3 = new Tram(150, 200, 50, 50)
  tram4 = new Tram(200, 200, 50, 50)
  tram5 = new Tram(250, 200, 50, 50)
  tram6 = new Tram(300, 200, 50, 50)
  tram7 = new Tram(350, 200, 50, 50)
  tram8 = new Tram(400, 250, 50, 50)
  tram9 = new Tram(470, 250, 50, 50)
  
  link1 = new Link(tram1.body, tram2.body)
  link2 = new Link(tram2.body, tram3.body)
  link3 = new Link(tram3.body, tram4.body)
  link4 = new Link(tram4.body, tram5.body)
  link5 = new Link(tram5.body, tram6.body)
  link6 = new Link(tram6.body, tram7.body)
  link7 = new Link(tram7.body, tram8.body)
  link8 = new Link(tram8.body, tram9.body)

  rock1 = new Rock(1100, 200, 100, 100)

  
  ground = new Ground(600,380,1200,20);


}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  tram1.display()

  tram1.display()
  tram2.display()
  tram3.display()
  tram4.display()
  tram5.display()
  tram6.display()
  tram7.display()
  tram8.display()
  tram9.display()

  link1.display()
  link2.display()
  link3.display()
  link4.display()
  link5.display()
  link6.display()
  link7.display()
  link8.display()

  rock1.display()
  
  if(rock1.body.position.x > 1100){

    textSize(50)
    text('CRASH! YEET YEET YOINKITY', 300, 150)
    crashSound.play()
    text('CRASH!', 400, 180)
    console.log('CRASH')
    
  }

}

  
function keyPressed(){

  if(keyCode === 37){

    Matter.Body.applyForce(tram1.body, {x : tram1.body.position.x, y : tram1.body.position.y}, {x: -0.5, y:0})
    trainSound.play()
  }
  if(keyCode === 39){

    Matter.Body.applyForce(tram9.body, {x : tram9.body.position.x, y : tram9.body.position.y}, {x: 0.5, y:0})
    trainSound.play()
  }

}