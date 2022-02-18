var playerRocket; 
var compRocket;
var playerRocketImg;
var compRocketImg;
var spaceImg;
var moon;
var moonImg; 
var asteroids; 
var asteroidsImg;
var asteroidGroup;
var canvas;

function preload(){
  //loading all the images 
  playerRocketImg=loadImage("rocket edited.png")
  compRocketImg=loadImage("rocket edited.png")
  spaceImg=loadImage("space.png")
  moonImg=loadImage("Moon2.png")
  asteroidsImg=loadImage("asteroid.png")
}

function setup() {
  canvas = createCanvas(windowWidht, windowHeight)
  //creating player rocket 
  playerRocket=createSprite(400, 550, 50, 50);
  playerRocket.addImage("player",playerRocketImg)
  playerRocket.scale=0.5

  //creating computer rocket 
  compRocket=createSprite(100,550,150,150)
  compRocket.addImage("computer",compRocketImg)
  compRocket.scale=0.5
  asteroidGroup = new Group;

  //creating moon 
  moon=createSprite(250,80,200,200)
  moon.addImage("goal",moonImg)
  moon.scale=0.8
  
}

function draw() {
  background(spaceImg);
  spawnAsteroid() 
  
  if(keyDown("UP_ARROW")){
    playerRocket.y=playerRocket.y-10
  }
  if(keyDown("DOWN_ARROW")){
    playerRocket.y=playerRocket.y+10
  }
  if(keyDown("RIGHT_ARROW")){
    playerRocket.x=playerRocket.x+10
  }
  if(keyDown("LEFT_ARROW")){
    playerRocket.x=playerRocket.x-10
  }
  
  compRocket.velocityY=-3;
  compRocket.velocityX=1
  
  if(compRocket.isTouching(asteroidGroup)){
    compRocket.positionX=100;
    compRocket.positionY=550;
  }
  if(playerRocket.isTouching(asteroidGroup)){
    playerRocket.x=400;
    playerRocket.y=550;
  }
  playerRocket.debug=true


   
  drawSprites();
}
function spawnAsteroid(){
  //spawning asteroids at random places 
  if (frameCount % 30 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(50,550));
    asteroid.x =Math.round(random(100,300))
    asteroid .addImage(asteroidsImg);
    asteroid.scale = 0.02;
    asteroid.velocityX= -5
    asteroidGroup.add(asteroid)  
}
if (frameCount % 20 === 0) {
  var asteroid = createSprite(600,120,40,10);
  asteroid.y = Math.round(random(50,550));
  asteroid.x =Math.round(random(100,300))
  asteroid .addImage(asteroidsImg);
  asteroid.scale = 0.02;
  asteroid.velocityX= 5

  asteroid.debug=true
}
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

