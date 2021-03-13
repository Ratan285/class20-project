var backGround,backgroundImage;
var cat,rat;
var cat1,cat2,cat3;
var rat1,rat2,rat3;
var test;






function preload(){

backgroundImage=loadImage("images/garden.png");
cat1=loadAnimation("images/tomOne.png");
cat2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
cat3 = loadAnimation("images/tomFour.png");

rat1=loadAnimation("images/jerryOne.png");
rat2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
rat3 = loadAnimation("images/jerryFour.png");



}
function setup(){
    createCanvas(1000,700);

    backGround=createSprite(500,350,1000,700);
    backGround.addImage(backgroundImage);
    backGround.scale = 1.03;

    cat = createSprite(850,630,20,20);
    cat.addAnimation("catSitting",cat1);
    cat.scale=0.1;

    rat = createSprite(150,630,20,20);
    rat.addAnimation("ratHolding",rat1);
    rat.scale=0.125;

   

}

function draw(){
background("red");

if(cat.x-rat.x<(cat.width-rat.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catLooking",cat3);
    cat.x=150;
    //cat.scale = 0.2;
    cat.changeAnimation("catLooking");
    rat.addAnimation("ratSearching",rat3);
    rat.changeAnimation("ratSearching");

}



drawSprites();
}
 function keyPressed(){
     if(keyCode===LEFT_ARROW){
         cat.velocityX=-5;
         cat.addAnimation("catRunning",cat2);
         cat.changeAnimation("catRunning");

         rat.addAnimation("ratTeasing",rat2);
         rat.changeAnimation("ratTeasing");
         
     }
 }