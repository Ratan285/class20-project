var backGround,backgroundImage;
var cat,catImage,mouse,mouseImage;
var catRunningimage;





function preload(){

backgroundImage=loadImage("garden.png");
catImage=loadImage("tomOne.png");
mouseImage=loadImage("jerryOne.png");
catRunningimage = loadImage("tomTwo.png");
}
function setup(){
    createCanvas(1000,700);

    backGround=createSprite(500,350,1000,700);
    backGround.addImage(backgroundImage);
    backGround.scale = 1.03;

    cat = createSprite(500,630,20,20);
    cat.addImage(catImage);
    cat.scale=0.1;

    mouse = createSprite(150,630,20,20);
    mouse.addImage(mouseImage);
    mouse.scale=0.125;

    keypressed();

}

function draw(){
background("red");
drawSprites();
}
 function keypressed(){
     if(keyCode===LEFT_ARROW){
         cat.velocityX=-5;
         cat.addAnimation(catRunningimage,"catRunning");
         cat.changeAnimation("catRunning");
         
     }
 }