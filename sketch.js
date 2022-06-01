var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(300,500,10,10)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.5
  invisibleGround=createSprite(300,590,120,10)
  invisibleGround.visible =false 
}

function draw() {
  background(200);
  ghost.collide(invisibleGround)


if(keyDown("LEFT_ARROW")){
ghost.x = ghost.x -3
}
if(keyDown("RIGHT_ARROW")){
  ghost.x = ghost.x +3
}
if(keyDown("SPACE")){
  ghost.velocityY= -3
}

  if(tower.y > 400){
      tower.y = 300
  
    }  
    obstacle()
    drawSprites()
}

function obstacle(){

  if(frameCount%60==0){
door = createSprite(random(50,350),0,10,10)
door.addImage("door",doorImg)
door.velocityY = 3
}

}