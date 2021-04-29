const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground,me;

function preload(){
ground_image=loadImage("space1.png","space2.webp");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
   
   e1= new enemy(Math.round(random(0,400)),Math.round(random(0,400)));
    
    me = new heroship(700,700,50,50);
    

}

function draw(){
  Engine.update(engine);
    background(ground_image);
    background.velocityY=6;
    if (background.y>400){
      background.y=300;
    }
    
   e1.display();
    me.display();
    LeftkeyPressed();
    RightkeyPressed();
}

function LeftkeyPressed(){
  if(keyCode === 37){
    this.body.velocityX=-3; 
  }
}
function RightkeyPressed(){
  if(keyCode === 39){
    this.body.velocityX=3; 
  }
}