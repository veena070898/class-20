var fixedRect,movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600,400,50,80);
  fixedRect.shapeColor="blue";
  movingRect= createSprite(400,200,60,80);
  movingRect.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

console.log(movingRect.x - fixedRect.x)

if(movingRect.x - fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}





  drawSprites();
}