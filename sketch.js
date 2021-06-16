var invisibleGround;
var trex, trex_running, edges;
var groundImage;
var ground;
var cloud;
var cloudImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);

  ground=createSprite(300,185,600,10);

  //creating invisibleGround
  invisibleGround = createSprite(300,195,600,5);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  ground.addImage("ground",groundImage);

  
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  invisibleGround.visible = false;
}



function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(frameCount);

  //jump when space key is pressed


  if(keyDown("space") && trex.collide(invisibleGround)){
    trex.velocityY = -7;
  }

  if(keyDown("up") && trex.collide(invisibleGround)){
    trex.velocityY = -7;
  }
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }



spawnClouds();

  ground.velocityX=-6;
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds(){
  if(frameCount %80===0){
cloud = createSprite(600,150,40,20);
cloud.addImage("clouds",cloudImage);
cloud.velocityX=-7;
cloud.y=Math.round (random(80,120));
cloud.scale=0.5;
trex.depth=cloud.depth;
trex.depth=trex.depth+1;
  }
}
