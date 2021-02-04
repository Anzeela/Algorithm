function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 50);
  square=createSprite(250,350,30,30)
  box.shapeColor=("blue")
  square.shapeColor=("red")
}

function draw() {
  background(255,255,255);  
  drawSprites();

  square.x=mouseX;
  square.y=mouseY;

  if(square.x-box.x<box.width/2+square.width/2
    &&box.x-square.x<box.width/2+square.width/2
    &&square.y-box.y<box.height/2+square.height/2
    &&box.y-box.y<box.height/2+box.height/2){
      square.shapeColor=("cyan")
      box.shapeColor=("purple")
    }
    else{
      box.shapeColor=("blue")
      square.shapeColor=("red")
    }


}