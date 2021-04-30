var background,backgroundImg;
var cat,mouse;
var catImg1,mouseImg1,catImg2,mouseImg2,catImg3,mouseImg3;

function preload() {
    //load the images here
  backgroundImg=loadImage("garden.png");
  catImg1=loadAnimation("cat1.png");
  catImg2=loadAnimation("cat2.png","cat3.png");
  catImg3=loadAnimation("cat4.png")
  mouseImg1=loadAnimation("mouse1.png");
  mouseImg2=loadAnimation("mouse2.png","mouse3.png");
  mouseImg3=loadAnimation("mouse4.png")
}

function setup(){
   createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(800,600);
  cat.addAnimation("cat Sleeping",catImg1);
  cat.scale=0.2;

  mouse=createSprite(100,600);
  mouse.addAnimation("mouse standing",mouseImg1);
  mouse.scale=0.14;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
   if(
    cat.x-mouse.x<cat.width/2-mouse.width/2){
      cat.velocityX=0;
      cat.addAnimation("happyCat",catImg3);
      cat.changeAnimation("happyCat");
      
      
      mouse.addAnimation("happyMouse",mouseImg3);
      mouse.changeAnimation("happyMouse");

    }
    drawSprites();
   
}


function keyPressed(){
   //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
  }

if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;
  cat.addAnimation("catRunning",catImg2);
  cat.changeAnimation("catRunning");

}


}
