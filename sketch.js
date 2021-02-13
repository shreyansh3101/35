const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,baloon,img
var database,position;

function preload(){
bg=loadImage("/image/Hot Air Ballon-01.png")
img=loadImage("/image/Hot Air Ballon-02.png")
}

function setup() {
  database = firebase.database()
  createCanvas(800,800);
  baloon=createSprite(400, 200, 50, 50);
baloon.addImage(img)
baloon.scale=0.5
var baloonPosition=database.ref('balloon/position')
baloonPosition.on("value",readPosition)
}

function draw() {
  background(bg);
  
if (keyDown(LEFT_ARROW)){
  writePosition(-1,0) 
}
 else if (keyDown(RIGHT_ARROW)){
  writePosition(1,0)
 }
else if(keyDown(UP_ARROW)){
  writePosition(0,-1)
}
else if(keyDown(DOWN_ARROW)){
  writePosition(0,1)
}

  drawSprites();
}
function readPosition(data){
position=data.val()
baloon.x=position.x
baloon.y=position.y  
}
function writePosition(x,y){
database.ref('balloon/position').set({
 'x':position.x+x,
 'y':position.y+y 
})
}