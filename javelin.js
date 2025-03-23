class javelin{
  constructor(a,b,c,d,e,f,g,h,i,j,k,l){
    this.x=a
    this.y=b
    this.sizeX=c
    this.sizeY=d
    this.rotation=e
    this.inSensor=f
    this.moving=g
    this.holding=h
    this.speed=i
    this.dir=j
    this.startPointX=k
    this.startPointY=l
    this.clickX=0
    this.clickY=0
    this.hit=0
    this.thrown = false
  }
  click(){
    angleMode(DEGREES)
    this.clickX=mouseX
    this.clickY=mouseY
    this.inSensor=false
    this.speed = 20
  this.startPointX=player1.x+player1.size/2
  this.startPointY=player1.y+player1.size/2
    this.x=this.startPointX
    this.y=this.startPointY
  
  if(mouseX-(width/2+player1.size/2)<0){
    this.dir=-1
  }else{
    this.dir=1
  }
    
  this.holding=false
    
    
    
  this.moving=true
  // if(mouseY>=height/2 && mouseX>=width/2){
  //   javelin.rotation=atan(mouseY/mouseX)
  // }else if(mouseY<=height/2 && mouseX<=width/2){
  //   javelin.rotation=atan(mouseY/mouseX)
  // }
  this.rotation=atan((mouseY-(height/2+player1.size/2))/(mouseX-(width/2+player1.size/2)))
  // print(javelin.rotation)
  playerShootingPositionX=player1.x+player1.size/2
  playerShootingPositionY=player1.y+player1.size/2
  }
  
  retract(){
    angleMode(DEGREES)
    this.clickX=mouseX
    this.clickY=mouseY
    this.inSensor=false
    this.speed = 15
  this.startPointX=this.x
  this.startPointY=this.y
    this.x=this.startPointX
    this.y=this.startPointY
  
  if(this.x>player1.x){
    this.dir=-1
  }else{
    this.dir=1
  }
    
  this.holding=false
  
  this.moving=true
  // if(mouseY>=height/2 && mouseX>=width/2){
  //   javelin.rotation=atan(mouseY/mouseX)
  // }else if(mouseY<=height/2 && mouseX<=width/2){
  //   javelin.rotation=atan(mouseY/mouseX)
  // }
  this.rotation=atan((this.y-(player1.y))/(this.x-(player1.x)))
  // print(javelin.rotation)
  // playerShootingPositionX=player1.x+player1.size/2
  // playerShootingPositionY=player1.y+player1.size/2
    
  }
  code(){
    if(this.holding==true){
  
      
  }else{
    if(this.moving==true){
      
      this.x+=cos(this.rotation)*this.speed*this.dir
      this.y+=sin(this.rotation)*this.speed*this.dir
      if(cos(this.rotation)*this.speed*this.dir>=0){
        this.rotation+=0.2
      }else{
        this.rotation-=0.2
      }
      
      
    }
    push()
    // translate(startPointX,startPointY)
    
    
    
    
    
    // translate(this.startPointX,this.startPointY)
    translate(this.x,this.y)
    
    
    
    
    
    // player1.x+player1.size/2
    // javelin.y=player1.y+player1.size/2
    // if (this.thrown == true){
      this.javelinSprite();
    // }
    if (dist(this.x,this.y,player1.x,player1.y)<20&&this.thrown == true&&coming == true){
        this.speed = 0
        this.moving = false
        this.thrown = false
      coming = false
      ignore = false
      dimension = 0
      }
  }
  }
  collisions(){
    if(phase==false){
    // print(this.x)
    // print(this.y)
    // print("")
    push()
    translate(startPointX,startPointY)
    // translate(startPointX,startPointY)
    // translate(-cameraX+width/2,-cameraY+height/2)
    // player1.x+player1.size/2
    // javelin.y=player1.y+player1.size/2
      //collisions
  for(var i=0;i<blocks.length;i++){
    //going right
    if(this.x+cos(this.rotation)*this.speed*this.dir>blocks[i].x && this.dir==1 && this.y>=blocks[i].y && this.y<= blocks[i].y+blocks[i].sizeY && this.x<blocks[i].x && this.moving==true && ((blocks[i].dimension==0) || (blocks[i].dimension==1 && dimension ==0) || (blocks[i].dimension==-1 && dimension==1))){
        this.moving=false
         return true
      }
   
     //going left
    if(this.x+cos(this.rotation)*this.speed*this.dir<blocks[i].x+blocks[i].sizeX && this.dir==-1 && this.y>=blocks[i].y && this.y<= blocks[i].y+blocks[i].sizeY && this.x>blocks[i].x+blocks[i].sizeX && this.moving==true && ((blocks[i].dimension==0) || (blocks[i].dimension==1 && dimension ==0) || (blocks[i].dimension==-1 && dimension==1))){
        this.moving=false
         return true
      }
    
    //going up
    if(this.y+sin(this.rotation)*this.speed*this.dir<=blocks[i].y+blocks[i].sizeY && this.y>=blocks[i].y+blocks[i].sizeY && this.x>=blocks[i].x && this.x<=blocks[i].x + blocks[i].sizeX && ((blocks[i].dimension==0) || (blocks[i].dimension==1 && dimension ==0) || (blocks[i].dimension==-1 && dimension==1))){
      this.moving=false
      return true
    }
    
    //going down
    if(this.y+sin(this.rotation)*this.speed*this.dir>=blocks[i].y && this.y<=blocks[i].y && this.x>=blocks[i].x && this.x<=blocks[i].x + blocks[i].sizeX && ((blocks[i].dimension==0) || (blocks[i].dimension==1 && dimension ==0) || (blocks[i].dimension==-1 && dimension==1))){
      this.moving=false
      return true
    }
    

  }
     pop()
    }
  }
  sensorCollisions(){

    if(hitBox==false){
      this.hit=5
    }else{
      this.hit=30
    }
  for(var i=0;i<sensors.length;i++){
    if(dist(this.x+1,this.y+1,sensors[i].x,sensors[i].y)<=this.hit*2+1&&ignore == false){
      this.moving=false
      this.inSensor=true
      this.x=sensors[i].x
      this.y=sensors[i].y
      coming = false
      ignore = false
      return true
    }
  }
  
  }
  javelinSprite(){
    rotate(this.rotation)
    // rect(this.x-this.sizeX,this.y-this.sizeY,this.sizeX*2,this.sizeY*2,5)
    if (this.thrown == true){
      rect(-this.sizeX,-this.sizeY,this.sizeX*2,this.sizeY*2,5)
    }
    
    pop()
  }
}

function javelinShop(){
  
  
  
  strokeWeight(stw)
  noFill()
  stroke("gray")
  if(equipped==0){
    stroke("green")
  }else{
    stroke("gray")
  }
  if(mouseX<width/3){
    // fill("#FFEB3B")
    fill("black")
  }else{
    fill("black")
  }
  
  
  rect(0,0,width/3-stw,height,5)
  
  if(equipped==0){
    stroke("green")
  }else{
    stroke("gray")
    fill("gray")
    fill(131, 142, 158, 50)
  }
  
  var rad=100
  
  if(mouseX>width/6-17.5-(110+110/5)/2 && mouseX<width/6-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
    // fill("#FFEB3B")
    rad=110
  }else{
    rad=100
  } 
  
  if(equipped!=0){
    // ellipse(width/6+width/3-17.5,height/3*2+5,rad)
    rectMode(CENTER)
    rect(width/6-17.5,height/3*2,rad+rad/5,rad/2+rad/6,10)
    rectMode(CORNER)
  }
  
  
  
    if(owned[2]==true){
    if(equipped==2){
    stroke("green")
  }else{
    stroke("grey")
  }
  }else{
    stroke("red")
    
  }
  if(mouseX>width/3*2){
    // fill("#FFEB3B")
    fill("black")
  }else{
    fill("black")
  }
  
  rect(width/3*2,0,width/3,height,5)
  
  if(owned[2]==true){
    if(equipped==2){
    stroke("green")
      fill("green")
  }else{
    stroke("grey")
    fill("grey")
    fill(131, 142, 158, 50)
  }
  }else{
    stroke("red")
    fill("red")
    fill(255,0,0,50)
    
  }
  
//   if(dist(width/6/2+width/3*2,height/3*2,mouseX,mouseY)<20){
//     // fill("#FFEB3B")
//     rad=110
//   }else{
//     rad=100
//   }
  
//   if(equipped!=2){
//     ellipse(width/6/2+width/3*2,height/3*2,rad)
//   }
  
  if(mouseX>width/6+width/3*2-17.5-(110+110/5)/2 && mouseX<width/6+width/3*2-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
    // fill("#FFEB3B")
    rad=110
  }else{
    rad=100
  } 
  
  if(equipped!=2){
    // ellipse(width/6+width/3-17.5,height/3*2+5,rad)
    rectMode(CENTER)
    rect(width/6+width/3*2-17.5,height/3*2,rad+rad/5,rad/2+rad/6,10)
    rectMode(CORNER)
  }
  
  
  
  
  
    if(owned[1]==true){
      
    if(equipped==1){
    stroke("green")
  }else{
    stroke("grey")
  }
  }else{
    stroke("red")
    
  }
   if(mouseX>width/3 && mouseX<width/3*2){
    // fill("#FFEB3B")
     fill("black")
  }else{
    fill("black")
  }
  
  rect(width/3,0,width/3-stw,height,5)
  
  if(owned[1]==true){
      
    if(equipped==1){
    stroke("green")
      fill("green")
  }else{
    stroke("grey")
    fill("grey")
    fill(131, 142, 158, 50)
  }
  }else{
    stroke("red")
    fill(255,0,0,50)
    
  }
  
  if(mouseX>width/6+width/3-17.5-(110+110/5)/2 && mouseX<width/6+width/3-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
    // fill("#FFEB3B")
    rad=110
  }else{
    rad=100
  } 
  
  if(equipped!=1){
    // ellipse(width/6+width/3-17.5,height/3*2+5,rad)
    rectMode(CENTER)
    rect(width/6+width/3-17.5,height/3*2,rad+rad/5,rad/2+rad/6,10)
    rectMode(CORNER)
  }
  
  
  textSize(50)
  noStroke()
  fill("gray")
  if(equipped==0){
    fill("green")
  }else{
    fill("gray")
  }
  text("Normal",80,100)
  if(equipped!=0){
    if(owned[0]==true){
    text("Equip",width/6-75,height/3*2+15)
  }else{
    text("Buy",width/6-60,height/3*2+15)
  }
  }else{
    text("Equipped",width/6-100,height/3*2+15)
  }
  
  if(owned[1]==true){
    if(equipped==1){
    fill("green")
  }else{
    
    fill("grey")
  }
  }else{
    fill("red")
  }
  if(equipped!=1){
    if(owned[1]==true){
    text("Equip",width/6+width/3-75,height/3*2+15)
  }else{
    text("Buy",width/6-60+width/3,height/3*2+15)
  }
  }else{
    text("Equipped",width/6-100+width/3,height/3*2+15)
  }
  
  text("Homing",80+width/3,100)
   if(owned[2]==true){
    if(equipped==2){
    fill("green")
  }else{
    
    fill("grey")
  }
  }else{
    fill("red")
  }
  if(equipped!=2){``
    if(owned[2]==true){
    text("Equip",width/6-75+width/3*2,height/3*2+15)
  }else{
    text("Buy",width/6-60+width/3*2,height/3*2+15)
  }
  
  }else{
    text("Equipped",width/6-100+width/3*2,height/3*2+15)
  }
  text("Wall Phase",50+width/3*2,100)
  
  
  
  for(var i=0; i<costs.length; i++){
    if(owned[i]==true){
    if(equipped==i){
    fill("green")
  }else{
    
    fill("grey")
  }
  }else{
    fill("red")
  }
    text("Cost: "+costs[i],60+width/3*i,500)
    coinS(260+width/3*i,485,30);
  }
  
  //coinNumber thing
  coinS(40,40,30);
  textSize(30);
  fill(255)
  fill("white")
  noStroke();
  text(coin,70,49);
    
    
  //javelin type
    var type=""
    if(phase==true){
      type="Wall Phase"
    }else if(hitBox==true){
      type="Home to Sensor"
    }else{
      type="Normal"
    }
  text("Javelin: "+type,10,height-10)
  
}


function javelinClick(){
  if(shop==true && levelEditor==false){
    if(mouseX>width/6-17.5-(110+110/5)/2 && mouseX<width/6-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
      hitBox=false
      phase=false
      equipped=0
      
      
//       f(mouseX>width/6+width/3-17.5-(110+110/5)/2 && mouseX<width/6+width/3-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
    }else if(mouseX>width/6+width/3*2-17.5-(110+110/5)/2 && mouseX<width/6+width/3*2-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
      if(owned[2]==true){
        phase=true
        hitBox=false
        equipped=2
        owned[2]=true
      }else{
        if(coin>=10){
          coin-=10
          phase=true
        hitBox=false
        equipped=2
          owned[2]=true
        }
      }
    }else if(mouseX>width/6+width/3-17.5-(110+110/5)/2 && mouseX<width/6+width/3-17.5+(110+110/5)/2 && mouseY>height/3*2-(110/2+110/6) && mouseY<height/3*2+(110/2+110/6)){
      if(owned[1]==true){
        phase=false
        hitBox=true
        equipped=1
        owned[1]=true
      }else{
        if(coin>=5){
          coin-=5
          phase=false
        hitBox=true
        equipped=1
          owned[1]=true
        }
      }
    }
  }
  
  
  
}


