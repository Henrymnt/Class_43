var commander
var troopIcon, troopState, troop, redHP, greenHP
var troops = []
var redHPs =[]
var greenHPs=[]
var leftwall,rightwall,topwall,bottomwall
var enemy
var enemies = []
var bullet,enemybullet
var enemybullets = []
var bullets = []
var healthBar
var redHealthBar

var bulletspeed=-20
var enemybulletspeed=20

var med
var meds = []
var coin
var coins = []
var money=0
var moneySymbol1
var moneySymbol2
var moneySymbol3
var moneySymbol4
var moneySymbol5

var random

var startbutton
var shopbutton
var optionsbutton

var level1

var rifle
var rifleBuy
var twobarrel
var twobarrelBuy
var twobarrelState=0
var shotgun
var shotgunBuy
var shotgunState=0
var minigun
var minigunBuy
var minigunState=0
var choice = "Rifle"

var controller="MOUSE"

var gamestate = "STARTPAGE"

function setup() {
  createCanvas(windowWidth-25, windowHeight-25);  

  startbutton = createSprite(windowWidth/2,250,800,100)
  startbutton.shapeColor="black"
  shopbutton = createSprite(windowWidth/2,450,800,100)
  shopbutton.shapeColor="black"
  optionsbutton = createSprite(windowWidth/2,650,800,100)
  optionsbutton.shapeColor="black"

  level1 = createSprite(69.5,76.5,121,121)
  level1.shapeColor="darkgreen"

  rifle= createSprite(100,200,180,120)
  rifleBuy= createSprite(100,230,150,40)
  rifleBuy.shapeColor="red"
  twobarrel= createSprite(300,200,180,120)
  twobarrelBuy= createSprite(300,230,150,40)
  twobarrelBuy.shapeColor="red"
  shotgun= createSprite(500,200,180,120)
  shotgunBuy= createSprite(500,230,150,40)
  shotgunBuy.shapeColor="red"
  minigun= createSprite(700,200,180,120)
  minigunBuy= createSprite(700,230,150,40)
  minigunBuy.shapeColor="red"

  moneySymbol1=createSprite(50,50,25,25)
  moneySymbol1.shapeColor="yellow"
  moneySymbol2=createSprite(60,190,15,15)
  moneySymbol2.shapeColor="yellow"
  moneySymbol3=createSprite(260,190,15,15)
  moneySymbol3.shapeColor="yellow"
  moneySymbol4=createSprite(460,190,15,15)
  moneySymbol4.shapeColor="yellow"
  moneySymbol5=createSprite(660,190,15,15)
  moneySymbol5.shapeColor="yellow"

  commander = createSprite(400,300,25,50)
  commander.shapeColor = "darkgreen"
  leftwall= createSprite(0,(windowHeight-25)/2,5,windowHeight-25)
  rightwall= createSprite(windowWidth-25,(windowHeight-25)/2,5,windowHeight-25)
  topwall= createSprite((windowWidth-25)/2,0,windowWidth-25,5)
  bottomwall= createSprite((windowWidth-25)/2,windowHeight-25,windowWidth-25,5)
  healthBar = createSprite(125,25,200,25)
  healthBar.shapeColor = "green"
  redHealthBar = createSprite(125,25,200,25)
  redHealthBar.shapeColor = "red"
  healthBar.depth=-0.5
  redHealthBar.depth=-1

  gotostartpage();

}

function draw() {
  background("tan");
    if(gamestate=="STARTPAGE"){
    startbutton.visible=true
    shopbutton.visible=true
    optionsbutton.visible=true
    }
    else{
      startbutton.visible=false
    shopbutton.visible=false
    optionsbutton.visible=false
    }
    

    if(gamestate=="LEVELS"){
    level1.visible=true
    }
    else{
      level1.visible=false
    }

    if(gamestate=="SHOP"){
    moneySymbol1.visible=true
    moneySymbol2.visible=true
    moneySymbol3.visible=true
    moneySymbol4.visible=true
    moneySymbol5.visible=true
    rifle.visible = true
    rifleBuy.visible = true
    twobarrel.visible = true
    twobarrelBuy.visible = true
    shotgun.visible = true
    shotgunBuy.visible = true
    minigun.visible = true
    minigunBuy.visible = true
    }
    else{
      moneySymbol1.visible=false
      moneySymbol2.visible=false
      moneySymbol3.visible=false
      moneySymbol4.visible=false
      moneySymbol5.visible=false
      rifle.visible = false
      rifleBuy.visible = false
      twobarrel.visible = false
      twobarrelBuy.visible = false
      shotgun.visible = false
      shotgunBuy.visible = false
      minigun.visible = false
      minigunBuy.visible = false
    }


    Lv1();
      





  drawSprites();

  //startpage
  if(keyDown("z")){
    gotostartpage();
  }
  startpage()
  //startpage buttons
  if(mousePressedOver(startbutton)&&gamestate=="STARTPAGE"){
    start();
  }
  if(mousePressedOver(shopbutton)&&gamestate=="STARTPAGE"){
    shop();
  }
  if(mousePressedOver(optionsbutton)&&gamestate=="STARTPAGE"){
    options();
  }
  //levels
  if(gamestate=="LEVELS"){


    fill("white")
    textSize(25)
    text("Level 1",30.25,76.5)

    if(mousePressedOver(level1)){
      gamestate="LEVEL1"
    healthBar.visible=true
    healthBar.width=200
    healthBar.x=125
    redHealthBar.visible=true
    commander.visible=true


    }










  }

//shop
  if(gamestate=="SHOP"){

    fill("white")
    textSize(25)
    text(money,moneySymbol1.x+25,60)
    text("100",moneySymbol2.x+25,200)
    text("200",moneySymbol3.x+25,200)
    text("500",moneySymbol4.x+25,200)
    text("1500",moneySymbol5.x+25,200)
    textAlign(CENTER)

    text("Rifle",100,170)
    if(choice=="Rifle"){
    text("Selected",100,235)
    }
    else{
    text("Select",100,235)  
    }
    if(mousePressedOver(rifleBuy)){
      choice="Rifle"
      if(twobarrelState==0){}
          else{
          twobarrelState=2
          }
      if(shotgunState==0){}
          else{
          shotgunState=2
          }
      if(minigunState==0){}
          else{
          minigunState=2
          }
    }

    text("Two-Barrel",300,170)
    if(twobarrelState==0){
    text("Buy",300,235)
    }
    else{
    if(twobarrelState==1){
      text("Selected",300,235)   
    }
    if(twobarrelState==2){
      text("Select",300,235)   
    }
  }
    if(mousePressedOver(twobarrelBuy)){
      if(twobarrelState==0){
        if(money>=200){
          money-=200
          choice="Two-barrel"
          twobarrelState=1
          if(shotgunState==0){}
          else{
          shotgunState=2
          }
          if(minigunState==0){}
          else{
          minigunState=2
          }
        }
      }
      else{
      choice="Two-barrel"
      twobarrelState=1
      if(shotgunState==0){}
      else{
      shotgunState=2
      }
      if(minigunState==0){}
      else{
      minigunState=2
      }
    }
    }

    text("Shotgun",500,170)
    if(shotgunState==0){
    text("Buy",500,235)
    }
    else{
    if(shotgunState==1){
      text("Selected",500,235)   
    }
    if(shotgunState==2){
      text("Select",500,235)   
    }
  }
    if(mousePressedOver(shotgunBuy)){
      if(shotgunState==0){
        if(money>=500){
          money-=500
          choice="Shotgun"
          shotgunState=1
          if(twobarrelState==0){}
          else{
          twobarrelState=2
          }
          if(minigunState==0){}
          else{
          minigunState=2
          }
        }
      }
      else{
      choice="Shotgun"
      shotgunState=1
      if(twobarrelState==0){}
      else{
      twobarrelState=2
      }
      if(minigunState==0){}
      else{
      minigunState=2
      }
    }
  }

    text("Minigun",700,170)
    if(minigunState==0){
    text("Buy",700,235)
    }
    else{
    if(minigunState==1){
      text("Selected",700,235)   
    }
    if(minigunState==2){
      text("Select",700,235)   
    }
  }

    if(mousePressedOver(minigunBuy)){
      if(minigunState==0){
        if(money>=1500){
          money-=1500
          choice="Minigun"
          minigunState=1
          if(twobarrelState==0){}
          else{
          twobarrelState=2
          }
          if(shotgunState==0){}
          else{
          shotgunState=2
          }
        }
      }
      else{
      choice="Minigun"
      minigunState=1
      if(twobarrelState==0){}
      else{
      twobarrelState=2
      }
      if(shotgunState==0){}
      else{
      shotgunState=2
      }
    }
  }

  }
  //options
  if(gamestate=="OPTIONS"){
    textSize(20)
    textAlign(CENTER)
    fill("black")
      text("Use WASD/Arrow Keys or the mouse to move.",400,50)
      text("Use 'm' to switch to mouse and 'n' to switch to WASD/Arrow Keys",400,100)
      text("Use 'p' to pause and use 'q' or the space bar to shoot",400,150)
      text("Press 'z' to return to the home screen",400,200)
      text("Good Luck!",400,250)
      text("1.0.0",400,300)
  } 


  

  if(keyDown("space")&&gamestate=="LEVEL1"){
    if(choice=="Minigun"){
    holdShoot();
    }
  }
  if(keyDown("q")&&gamestate=="LEVEL1"){
    console.log("all")
    if(choice=="Minigun"){
      console.log("right")
    holdShoot();
    }
  }

}
function keyReleased(){
  if(keyDown("space")&&gamestate=="LEVEL1"){
    shoot();
  }
  if(keyDown("q")&&gamestate=="LEVEL1"){
    shoot();
  }
}

//start
function start(){
  gamestate="LEVELS"
  healthBar.visible=false
  redHealthBar.visible=false
  commander.visible=false
  for(i=0;i<enemies.length;i++){
    enemies[i].destroy();
    enemies[i].y=800
  }
  for(i=0;i<troops.length;i++){
    troops[i].destroy();
    troops[i].y=800
  }
  for(i=0;i<coins.length;i++){
    coins[i].destroy();
    coins[i].y=800
  }
  for(i=0;i<meds.length;i++){
    meds[i].destroy();
    meds[i].y=800
  }




 }
 //shop
 function shop(){
  gamestate="SHOP"
  healthBar.visible=false
  redHealthBar.visible=false
  commander.visible=false
  for(i=0;i<enemies.length;i++){
    enemies[i].destroy();
    enemies[i].y=800
  }
  for(i=0;i<troops.length;i++){
    troops[i].destroy();
    troops[i].y=800
  }
  for(i=0;i<coins.length;i++){
    coins[i].destroy();
    coins[i].y=800
  }
  for(i=0;i<meds.length;i++){
    meds[i].destroy();
    meds[i].y=800
  }
 }
 //options
 function options(){
  gamestate="OPTIONS"
  healthBar.visible=false
  redHealthBar.visible=false
  commander.visible=false
  for(i=0;i<enemies.length;i++){
    enemies[i].destroy();
    enemies[i].y=800
  }
  for(i=0;i<troops.length;i++){
    troops[i].destroy();
    troops[i].y=800
  }
  for(i=0;i<coins.length;i++){
    coins[i].destroy();
    coins[i].y=800
  }
  for(i=0;i<meds.length;i++){
    meds[i].destroy();
    meds[i].y=800
  }
 }
