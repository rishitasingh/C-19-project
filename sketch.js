                                                                                                                                      var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  //creating canvas
  createCanvas(400, 400);
  
  //creating ball
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  
  //creating paddle
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  //giving background
  background(205,153,0);
  
//creating edges
  edges=createEdgeSprites();
  
  if (ball.isTouching(paddle)){
  explosion();
  }
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  //moving paddle
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  drawSprites();
  
}

//giving random velocity
function explosion()
{
  ball.velocityY=random(-8,8);
}

