var fixed,moving;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(600,200,50,50);
  fixed.shapeColor="red"
  moving.shapeColor="green"
  /*fixed.debug=true;
  moving.debug=true;*/
  fixed1=createSprite(400, 20, 50, 50);
  moving1=createSprite(400,400,50,50);
moving.velocityX=2
moving1.velocityY=-2
fixed.velocityX=-2
fixed1.velocityY=2
}

function draw() {
  background(255,255,255);
  //moving.x=World.mouseX
  //moving.y=World.mouseY;  
bounceOff(fixed,moving)
bounceOff(fixed1,moving1)

  if(isTouching(moving,fixed))
  {
    fixed.shapeColor="blue"
  }

  else
  {
    fixed.shapeColor="red"
  }

 

  drawSprites();
}


