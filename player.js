class player{
  constructor(a,b,c){
    this.x=a
    this.y=b
    this.size=c
    this.velocityY=0;
    this.velocityX=0;
    this.inPortal=false
    this.clock=0
    this.rotation=0
  }
  display(){
    if(dimension==1){
      stroke("rgb(66,144,255)")
    }else{
      stroke("rgb(255,209,106)")
    }
    if(this.inPortal==false){
      rect(this.x,this.y,this.size,this.size,5)
      this.clock=0
      this.rotation=0
    }else{
      this.portalAnimation()
    }
    
  }
  move(){
    if(this.inPortal==false){
      this.velocityY+=gravity
  //movement
  if(keyIsDown(39) || keyIsDown(68)){
    player1.x+=speed
  }
  if(keyIsDown(37) || keyIsDown(65)){
    player1.x-=speed
  }
  if((keyIsDown(38) || keyIsDown(87) || keyIsDown(32))&&jump==false){
    // onSurface==false
    this.velocityY=-jumpSpeed
    jump=true
  }
    }
  
  }
  collide(){
    if(this.inPortal==false){
      //collisions
  for(var i=0;i<blocks.length;i++){
    //if they are already inside the block
    
    if(this.x+this.size/2>=blocks[i].x && this.x+this.size/2<=blocks[i].x+blocks[i].sizeX && this.y+this.size/2>=blocks[i].y && this.y+this.size/2<=blocks[i].y+blocks[i].sizeY && ((blocks[i].dimension==0) || (blocks[i].dimension==1 && dimension ==0) || (blocks[i].dimension==-1 && dimension==1))){
      this.x=blocks[i].x-this.size-5
    }else{
    
    
    if(blocks[i].dimension==0 || (blocks[i].dimension==1 && dimension==0) || (blocks[i].dimension==-1 && dimension==1)){
    
    //going right
    if(keyIsDown(39) || keyIsDown(68)){
      if(this.x+this.size+5>blocks[i].x && this.x<blocks[i].x){
        if(this.y>blocks[i].y && blocks[i].y+blocks[i].sizeY>=this.y){
        this.x=blocks[i].x-this.size-speed-1
        }
        if(this.y<blocks[i].y && blocks[i].y+blocks[i].sizeY<=this.y+this.size){
        this.x=blocks[i].x-this.size-speed-1
        }
        if(this.y<blocks[i].y && this.y+this.size>blocks[i].y){
        this.x=blocks[i].x-this.size-speed-1
        }
      }
    }
    
    //going left
    if(keyIsDown(37) || keyIsDown(65)){
      if(this.x-5<blocks[i].x+blocks[i].sizeX && this.x+this.size>blocks[i].x+blocks[i].sizeX){
        // this.x=blocks[i].x+blocks[i].sizeX+6
        
        if(this.y>blocks[i].y && blocks[i].y+blocks[i].sizeY>=this.y){
        this.x=blocks[i].x+blocks[i].sizeX+speed+1
        }
        if(this.y<blocks[i].y && blocks[i].y+blocks[i].sizeY<=this.y+this.size){
        this.x=blocks[i].x+blocks[i].sizeX+speed+1
        }
        if(this.y<blocks[i].y && this.y+this.size>blocks[i].y){
        this.x=blocks[i].x+blocks[i].sizeX+speed+1
        }
      }
    }
    
    //going down
     if(this.y+this.size+this.velocityY+gravity>=blocks[i].y && this.y<blocks[i].y && this.x+this.size>=blocks[i].x && this.x<=blocks[i].x+blocks[i].sizeX){
       this.y=blocks[i].y-gravity-this.size
       jump=false
       this.velocityY=0
     }
    
    //going up
    if(this.y+this.velocityY+gravity<=blocks[i].y+blocks[i].sizeY && this.y+this.size>=blocks[i].y && this.velocityY+gravity<=0 && this.x+this.size>=blocks[i].x && this.x<=blocks[i].x+blocks[i].sizeX){
      this.y=blocks[i].y+blocks[i].sizeY+this.velocityY+gravity+this.size
      this.velocityY=0
    }
    
    }
   
  }
  }
    this.y+=this.velocityY
    }
    
  }
  portalAnimation(){
    this.clock+=5
      this.rotation=this.clock
      push()
//       
      translate(this.x+this.size/2,this.y+this.size/2)
      rotate(this.rotation)
      rect(-this.size/2,-this.size/2,this.size,this.size,5)
      pop()
    //   this.x+=cX/30
    // this.y+=cY/30
    if(abs(cX)>320 || abs(cY)>320){
      this.x+=cX/60
      this.y+=cY/60
    }else if(abs(cX)>155 || abs(cY)>155){
      this.x+=cX/30
      this.y+=cY/30
    }else{
      this.x+=cX/10
      this.y+=cY/10
    }
    
    if(dist(this.x,this.y,checkX,checkY)<this.size){
      this.inPortal=false
    }
    
    jump=true
  }
}