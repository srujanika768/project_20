var car;


var wall;


var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random();
  weight=random();
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = "white";
 
 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor = color(80.80,80);
 
 car.velocityX = 2;
}

function draw() {
  background(255,255,255);
  
  if(car.x-wall.x > car.width/2 + wall.width/2){

car.vlocityX = 0;

var deformation = 0.5*weight*speed*speed/22509;

if(deformation > 100){
car.shapeColor = color(0,255,0);
}

if(deformation < 180 && deformation > 100){
car.shapeColor = color(230,230,0);
}

if(deformation < 100){
car.shapeColor = color(255,0,0);
}

  }

  drawSprites();
}