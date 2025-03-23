function levelEdit(){
  
  strokeWeight(stw)
  
  angleMode(DEGREES)
  //background
    if(dimension==0){
  background(0,200)
      // image(darkBackground,0,0,width,height)
  }else if(dimension==1){
    background(180, 200);
    // image(lightBackground,0,0,width,height)
  }
  push()
  translate(-cameraX+width/2,-cameraY+height/2)
  cameraX-=(cameraX-player1.x)/20
  cameraY-=(cameraY-player1.y)/20
 
  if(keyIsDown(37)){
    player1.x-=speed
  }
  if(keyIsDown(39)){
    player1.x+=speed
  }
  if(keyIsDown(38)){
    player1.y-=speed
  }
  if(keyIsDown(40)){
    player1.y+=speed 
  }
  noFill()
  strokeWeight(stw)
  
  //switching current
  if(keyIsDown(49)){
    current="block"
  }
  if(keyIsDown(50)){
    current="obstacle"
  }
  if(keyIsDown(51)){
    current="sensor"
  }
  if(keyIsDown(52)){
    current="checkpoint one"
    checkpointX=0
    checkpointY=0
  }
  if(keyIsDown(53)){
    current="coin"
  }
  
  //switching rotation
  if(keyIsDown(191) && rotateCount>30){
    placeRotation+=90
    rotateCount=0
  }
  rotateCount+=1
  
  //switch to playing
  if(keyIsDown(192) && playCount>=30){
    // print("hi")
    
    playCount=0
    cameraX=0
    cameraY=0
    // player1.x=0
    // player1.y=0
    dimension=0
    checkX=0
    checkY=0
    // editPortals=checkpoints
    // editCoins=coins
    // checkpoints=editPortals
    // coins=editCoins
    levelEditor=false

    coin=0
  }
  
  //deleting
  if(keyIsDown(90) && deleteCount>30){
    if(current=="block"){
      blocks.splice(blocks.length-1,1)
    }
    if(current=="obstacle"){
      obstacles.splice(obstacles.length-1,1)
    }
    if(current=="sensor"){
      sensors.splice(sensors.length-1,1)
    }
    if(current=="checkpoint one"){
      checkpoints.splice(checkpoints.length-1,1)
      editPortals.splice(editPortals.length-1,1)
    }
    if(current=="checkpoint two"){
      current="checkpoint one"
    }
    if(current=="coin"){
      coins.splice(coins.length-1,1)
      editCoins.splice(editCoins.length-1,1)
    }
    deleteCount=0
  }
  deleteCount+=1
  
  //switching dimensions
  if(keyIsDown(32) && switchCount>=30){
    if(dimension==1){
      dimension=0
    }else{
      dimension=1
    }
    switchCount=0
  }
  switchCount+=1
  
  //switching place dimension
  if(keyIsDown(16) && placeCount>30){
    if(dimension==0){
    if(placeDimension==0){
      placeDimension=1
    }else{
      placeDimension=0
    }
  }else{
    if(placeDimension==0){
      placeDimension=-1
    }else{
      placeDimension=0
    }
  }
    placeCount=0
  }
placeCount+=1
  
  
  //drawing walls
  for(var i=0;i<blocks.length;i++){
    if(blocks[i].dimension==0){
    if(dimension==0){
      stroke("rgb(66,144,255)")
    }else{
      stroke("rgb(255,209,106)")
    }
    rect(blocks[i].x,blocks[i].y,blocks[i].sizeX,blocks[i].sizeY,5)
    
    }
    
    if(blocks[i].dimension==1 && dimension==0){
      stroke("white")
      rect(blocks[i].x,blocks[i].y,blocks[i].sizeX,blocks[i].sizeY,5)
    }
    if(blocks[i].dimension==-1 && dimension==1){
      stroke("black")
      rect(blocks[i].x,blocks[i].y,blocks[i].sizeX,blocks[i].sizeY,5)
    }
    
    
  }
  
     //drawing obstacles
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
  }
  
  //drawing sensors
  if(dimension==1){
      stroke('#FF0000')
    }else{
      stroke("#0DFB15")
    }
  for(var i=0; i<sensors.length; i++){
    rect(sensors[i].x-sensorSize, sensors[i].y-sensorSize, sensorSize*2, sensorSize*2,5)
  }
  
 //drawing coins
  for(var i=0;i<editCoins.length;i++){
    noStroke()
    fill(255, 230, 0,240)
    coinS(editCoins[i][0], editCoins[i][1], coinRadius*2)
    noFill()
  }
  
  //drawing checkpoints
   for(var i=0;i<checkpoints.length; i++){
    if(dimension==0){
      stroke('#FF0000')
    }else{
      stroke("#0DFB15")
    }
    rect(checkpoints[i].x,checkpoints[i].y,checkpointSize,checkpointSize,5)
    ellipse(checkpoints[i].newX,checkpoints[i].newY,5)
     strokeWeight(stw/2.5)
     line(checkpoints[i].x+checkpointSize/2,checkpoints[i].y+checkpointSize/2,checkpoints[i].newX,checkpoints[i].newY)
     strokeWeight(stw)
  }
  
  //drawing player
   if(dimension==1){
      stroke("rgb(66,144,255)")
    }else{
      stroke("rgb(255,209,106)")
    }
  rect(0,0,player1.size,player1.size,5)
  
  
  if(current=="block"){
     //Shows where next block will be placed
    if(placeDimension==1){
      fill(127,220)
      stroke(255)
    }else if(placeDimension==-1){
      fill(127,220)
      stroke(0)
    }else{
      fill(127,220)
      noStroke()
    }
    
  
  if(mouseIsPressed==false){
  //   addX=floor((mouseX-player1.x-width/2)/off)*off+player1.x*2
  // addY = floor((mouseY-player1.y-height/2)/off)*off+player1.y*2
    
        addX=floor((mouseX-player1.x-width/2)/off)*off+floor(player1.x*2/off)*off
  addY = floor((mouseY-player1.y-height/2)/off)*off+floor(player1.y*2/off)*off
    showX=addX
    showY=addY
  }
  
  if(mouseIsPressed){
    addSizeX=floor((mouseX-player1.x-width/2)/off)*off+floor(player1.x*2/off)*off-addX+off
    addSizeY=floor((mouseY-player1.y-height/2)/off)*off+floor(player1.y*2/off)*off-addY+off
    
    if(addSizeX==0){
      addSizeX=0
    }
     if(addSizeY==0){
      addSizeY=0
    }
    
    
    //if the drag is backwards
    if(addSizeX<0 || addSizeY<0){  
  if(addSizeX<0){
    showX=addX+addSizeX
  }
  if(addSizeY<0){
    showY=addY+addSizeY
  }
  }else{
    showX=addX
    showY=addY
  }
  
    
  }else{
    addSizeX=50
    addSizeY=50
    showSizeX=50
    showSizeY=50
  }
  rect(showX,showY,abs(addSizeX),abs(addSizeY),5)
  }
  
  if(current=="obstacle"){
    //shows where the next obstacle will be
    if(placeDimension==1){
      fill(127,220)
      stroke(255)
    }else if(placeDimension==-1){
      fill(127,220)
      stroke(0)
    }else{
      fill(127,220)
      stroke(127)
    }
    var triangleChange=5
    addX=floor((mouseX-player1.x-width/2)/triangleChange)*triangleChange+player1.x*2-20
  addY = floor((mouseY-player1.y-height/2)/triangleChange)*triangleChange+player1.y*2-20
    push()
      angleMode(DEGREES)
      translate(addX+10,addY+10)
      
      rotate(placeRotation)
      beginShape()
      vertex(-10,10)
      vertex(10,10)
      vertex(0,-10)
      endShape(CLOSE)
      pop()
  }
  
  if(current=="sensor"){
    //shows where the next sensor will be
    fill(127,220)
    noStroke()
    addX=floor((mouseX-player1.x-width/2)/sensorSize)*sensorSize+player1.x*2-10
  addY = floor((mouseY-player1.y-height/2)/sensorSize)*sensorSize+player1.y*2-10
    rect(addX-sensorSize, addY-sensorSize, sensorSize*2, sensorSize*2,5)
  }
  
  if(current=="checkpoint one"){
    if(dimension==0){
      fill("white")
      stroke("black")
    }else{
      fill("black")
      stroke("white")
    }
    var checkpointChange=5
    addX=floor((mouseX-player1.x-width/2)/checkpointChange)*checkpointChange+player1.x*2
  addY = floor((mouseY-player1.y-height/2)/checkpointChange)*checkpointChange+player1.y*2
    rect(addX-checkpointSize/2,addY-checkpointSize/2,checkpointSize,checkpointSize,5)
  }
  
  if(current=="checkpoint two"){
    
    if(dimension==0){
      stroke('#FF0000')
    }else{
      stroke("#0DFB15")
    }
    rect(checkpointX-checkpointSize/2,checkpointY-checkpointSize/2,checkpointSize,checkpointSize,5)
    if(dimension==0){
      fill("white")
      stroke("black")
    }else{
      fill("black")
      stroke("white")
    }
    var checkpointChange=5
    addX=floor((mouseX-player1.x-width/2)/checkpointChange)*checkpointChange+player1.x*2
  addY = floor((mouseY-player1.y-height/2)/checkpointChange)*checkpointChange+player1.y*2
    rect(addX-10/2,addY-10/2,10,10,5)
    strokeWeight(stw/2.5)
    if(dimension==0){
      stroke('#FF0000')
    }else{
      stroke("#0DFB15")
    }
    line(checkpointX,checkpointY,addX,addY)
    strokeWeight(stw)
  }
  
  if(current=="coin"){
    //shows where the next sensor will be
    fill(127,220)
    noStroke()
    var coinChange=5
    addX=floor((mouseX-player1.x-width/2)/coinChange)*coinChange+player1.x*2-10
  addY = floor((mouseY-player1.y-height/2)/coinChange)*coinChange+player1.y*2-10
    ellipse(addX,addY,30)
  }
  t()
  pop()
  
  
//   push()
//   translate(width/2,height/2);
//   rotate(45);
//   noFill();
//   strokeWeight(5);
//   stroke(255,25,255,140);
//   rect(-10,-10,20,20,5)
//   strokeWeight(13);
//   stroke(255,255,255,100);
//   rect(-10,-10,20,20,5)
//   pop();
  clickCount+=1
}

function click(){
  if(levelEditor==true){
    if(current=="block"){
      append(blocks,new block(showX,showY,abs(addSizeX),abs(addSizeY),placeDimension))
    }
    if(current=="obstacle"){
      append(obstacles,new obstacle("spike",addX,addY,20,20,placeDimension,placeRotation))
    }
    if(current=="sensor"){
      append(sensors,new sensor(addX,addY,false))
    }
    
    if(current=="checkpoint two" && clickCount>5){
      append(checkpoints,new checkpoint(checkpointX-checkpointSize/2,checkpointY-checkpointSize/2,addX,addY))
      append(editPortals,new checkpoint(checkpointX-checkpointSize/2,checkpointY-checkpointSize/2,addX,addY))
      checkpointX=0
      checkpointY=0
      current="checkpoint one"
      clickCount=0
    }
    if(current=="checkpoint one" && clickCount>5){
      checkpointX=addX
      checkpointY=addY
      current="checkpoint two"
      clickCount=0
    }
    if(current=="coin" && clickCount>5){
      append(coins,[addX,addY])
      append(editCoins,[addX,addY])
    }
    
    print(addX)
    print(addY)
    copyStringToClipboard(encode())
  }
}


