
function preload(){
  //pre-load images
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite (200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  boy = createSprite(340,180,30,30);
  boy.addAnimation("boy_running",boyImg);
  boy.scale = 0.08
  leftBoundry = createSprite(0,0,100,800);
  leftBoundry.visible = false;
  rightBoundry = createSprite(410,0,100,800);
  rightBoundry.visible = false;
}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height/2;
}
edges = createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundry);
boy.collide(rightBoundry);
drawSprites();
}
