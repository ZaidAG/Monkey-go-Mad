var monkey,banana,rock,animatedMonkey, bananaGroup,rockGroup,score,jungle,ground,backImage,player_running,backImage,bananaImage,stoneImage
  function preload(){
  backImage=loadImage("jungle.jpg");
  
    player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    
    bananaImage=loadImage("banana.png");
    stoneImage=loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  
  ground=createSprite(200,400,400,20);
  ground.x=ground.width/2;
  ground.velocityX=-2;
 
  score=0;
  
  jungle=createSprite(200,200,20,20);
  jungle.addImage("jungle",backImage);
  jungle.velocityX=-2;
  
  monkey=createSprite(50,170,20,20);
  monkey.addAnimation("monkey",player_running);
  monkey.scale=0.15;
  monkey.collide(ground);
  
  bananaGroup=createGroup();
  rockGroup=createGroup();
    
}
function draw() {
  background(220);
  text("Score:"+score,350,100)
  if (jungle.x < 0){
  jungle.x = jungle.width/2;
  }
  if (ground.x < 0){
  ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-6;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  goBananas();
  Rockky();
  drawSprites();
}
function goBananas(){
 if(frameCount%80===0){
    banana=createSprite(400,100,20,20);
  banana.y=random(250,300);
   banana.scale=0.05
   banana.velocityX=-2;
   banana.addImage("banana",bananaImage);
  if(banana.isTouching(monkey)){
    score=score+2;
    banana.destoryEach();
   
    switch(score){
      case 10: monkey.scale=0.12;
        break;
      case 20: monkey.scale=0.14;
        break;
      case 30: monkey.scale=0.16;
        break;
      case 40: monkey.scale=0.18;
        break;
      default: break;
    }
 }
  }
}
function Rockky(){
  if(frameCount%100===0){
    rock=createSprite(400,370,20,20);
    rock.addImage("rock",stoneImage);
    rock.scale=0.15
    rock.velocityX=-2
  }
}