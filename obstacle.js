class obstacle{
  //spike must be an equaliteral triangle
  constructor(a,b,c,d,e,f,g){
    this.type=a
    this.x=b
    this.y=c
    this.sizeX=d
    this.sizeY=e
    this.dimension=f
    this.rotation=g
  }
  display(){
    if(this.type=="spike"){
      push()
      angleMode(DEGREES)
      translate(this.x+this.sizeX/2,this.y+this.sizeX/2)
      rotate(this.rotation)
      if(this.dimension==1 && dimension!=1){
        // image(iceSpike,-20,-20,40,40)
        noFill()
        // stroke("white")
        stroke(180, 200)
          beginShape();
          vertex(-this.sizeX/2, this.sizeY/2);
          vertex(0, -this.sizeY/2);
          vertex(this.sizeX/2, this.sizeY/2);
        vertex(-this.sizeX/2, this.sizeY/2);
          endShape();
      }else if(this.dimension==-1 && dimension!=0){
        // image(fireSpike,-20,-25,40,45)
        noFill()
        stroke("black")
          beginShape();
          vertex(-this.sizeX/2, this.sizeY/2);
          vertex(0, -this.sizeY/2);
          vertex(this.sizeX/2, this.sizeY/2);
        vertex(-this.sizeX/2, this.sizeY/2);
          endShape();
      }else{
        if(dimension==0){
          // var num=random(0,100)
          
          
          // image(fireSpike,-20,-25,40,45)
          noFill()
        stroke("yellow")
          beginShape();
          vertex(-this.sizeX/2, this.sizeY/2);
          vertex(0, -this.sizeY/2);
          vertex(this.sizeX/2, this.sizeY/2);
          vertex(-this.sizeX/2, this.sizeY/2);
          endShape();
          // if(num>50){
          //   image(iceSpike,-20,-20,40,40)
          // }
        }else{
          // image(iceSpike,-20,-20,40,40)
          noFill()
        stroke("purple")
          beginShape();
          vertex(-this.sizeX/2, this.sizeY/2);
          vertex(0, -this.sizeY/2);
          vertex(this.sizeX/2, this.sizeY/2);
          vertex(-this.sizeX/2, this.sizeY/2);
          endShape();
        }
      }
          
      pop()
    }
    
  }
}
//Collision function
function obstacleCollision(){
  //drawing and checking for collisions in obstacles
  for(var i=0; i<obstacles.length; i++){
    if(obstacles[i].dimension==0){
      if(dimension==0){
      stroke("yellow")
        obstacles[i].display()
    }else{
      stroke(179, 5, 232)
      obstacles[i].display()
    }
    }
    
    if(obstacles[i].dimension==-1 && dimension==1){
      stroke("black")
      obstacles[i].display()
    }
    if(obstacles[i].dimension==1 && dimension==0){
      stroke("white")
      obstacles[i].display()
    }
      
    
      

      
    if(obstacles[i].type=="spike"){
      if(((dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/2, obstacles[i].y+obstacles[i].sizeY/3*2)<=player1.size/2+obstacles[i].sizeY/(2*sqrt(3)) || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/2,obstacles[i].y+obstacles[i].sizeY/4)<=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+2,obstacles[i].y+obstacles[i].sizeY-1)<=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX-2,obstacles[i].y+obstacles[i].sizeY-1)<=5+player1.size/2) && obstacles[i].rotation % 360==0) || (obstacles[i].rotation%360 == 90 && (dist(player.x+player1.size/2,player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/3,obstacles[i].y+obstacles[i].sizeY/2) <= player1.size/2+obstacles[i].sizeY)/(2*sqrt(3)) || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX-obstacles[i].sizeX/4, obstacles[i].y+obstacles[i].sizeY/2)<=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+1,obstacles[i].y+obstacles[i].sizeY-2) <=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+1,obstacles[i].y+2) <= 5+player1.size/2) || ((dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/2, obstacles[i].y+obstacles[i].sizeY/3)<=player1.size/2+obstacles[i].sizeY/(2*sqrt(3)) || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/2,obstacles[i].y+obstacles[i].sizeY/4*3)<=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+2,obstacles[i].y+1)<=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX-2,obstacles[i].y+1)<=5+player1.size/2) && obstacles[i].rotation % 360==180) || (obstacles[i].rotation%360 == 270 && (dist(player.x+player1.size/2,player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/3*2,obstacles[i].y+obstacles[i].sizeY/2) <= player1.size/2+obstacles[i].sizeY)/(2*sqrt(3)) || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX/4, obstacles[i].y+obstacles[i].sizeY/2)<=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX-1,obstacles[i].y+obstacles[i].sizeY-2) <=5+player1.size/2 || dist(player1.x+player1.size/2, player1.y+player1.size/2,obstacles[i].x+obstacles[i].sizeX-1,obstacles[i].y+2) <= 5+player1.size/2)){
        if(obstacles[i].dimension==1 && dimension==0){
          death()
        }else if(obstacles[i].dimension==-1 && dimension==1){
          death()
        }else if(obstacles[i].dimension==0){
          death()
        }
        
      }
    }
  }
}