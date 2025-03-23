class checkpoint{
  constructor(a,b,c,d,e){
    this.x=a
    this.y=b
    this.newX=c
    this.newY=d
    this.used=false
  }
}
function checkpointCollisions(){
  //checking checkpoints
  for(var i=0; i<checkpoints.length; i++){
    // if(player1.x>=checkpoints[i].x && player1.y>=checkpoints[i].y && player1.y+player1.size<=checkpoints[i].y+checkpointSize && player1.x+player1.size<=checkpoints[i].x+checkpointSize && checkpoints[i].used==false){
    if(dist(player1.x+player1.size/2, player1.y+player1.size/2, checkpoints[i].x+checkpointSize/2, checkpoints[i].y+checkpointSize/2)<=checkpointSize/2){
      checkX=checkpoints[i].newX
      // player1.x=checkpoints[i].newX
      // player1.y=checkpoints[i].newY
      player1.x=checkpoints[i].x
      player1.y=checkpoints[i].y
      checkY=checkpoints[i].newY
      player1.inPortal=true
      checkpoints.splice(i,1)
        cX=checkX-player1.x
          cY=checkY-player1.y
      // print(cX)
      // print(cY)
    }
  }
}
