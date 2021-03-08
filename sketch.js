var backGround,backgroundImage;
var cat,catImage,mouse,mouseImage;





function preload(){
createCanvas(1000,700);
backgroundImage=loadImage("garden.png");
catImage=loadImage("tomOne.png");
mouseImage=loadImage("jerryOne.png");
}
function setup(){
backGround=createSprite(0,50,1000,700);
//backGround.addImage(backgroundImage);

cat = createSprite(100,330,20,20);
cat.addImage(catImage);
cat.scale=0.1;
}
function draw(){
background("red");
drawSprites();
}
