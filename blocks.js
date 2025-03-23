class block{
  constructor(a,b,c,d,e){
    this.x=a
    this.y=b
    this.sizeX=c
    this.sizeY=d
    this.dimension=e
  }
}

function fire(startX,startY,sizeX,sizeY){
  for(var i=0;i<sizeX/50;i++){
    for(var y=0;y<sizeY/50;y++){
      // image(fireBlock,startX+i*50,startY+y*50,50,50)
    }
  }
}

function ice(startX,startY,sizeX,sizeY){
  for(var i=0;i<sizeX/50;i++){
    for(var y=0;y<sizeY/50;y++){
      // image(iceBlock,startX+i*50,startY+y*50,50,50)
    }
  }
}


class tile{
  constructor(a,b,c,d,e){
    this.type = a
    this.x = b
    this.y = c
    this.xs = d
    this.ys = e
  }
  display(){
    // strokeWeight(1)  
    push()
    if (this.type == 0){
      colorMode(HSB,360)
      if (editing==false){
        stroke(0,0,-dist(this.x,this.y,p.nx,p.ny)/2+250);
      }else{
        stroke('grey')
      }
      // rect(this.x, this.y, this.xs*2, this.ys*2, 5);
      imageMode(CENTER)
      let divisions = []
      for (let i=0;i<4;i++){
        for (let c=0;c<6;c++){
          divisions[divisions.length] = [1440*c,1440*i,1440,1440]
        }
      }
      // for (let i = 0;i<block.length;i++){
      let a = 5
      let b = 11
      let c = 4 
      let d = 10
      let size = 31
      //TYSM FANGSON
      let right = block.findIndex(hold => (hold.x==this.x+60&&hold.y==this.y));
      let left = block.findIndex(hold => (hold.x==this.x-60&&hold.y==this.y));
      let top = block.findIndex(hold => (hold.x==this.x&&hold.y==this.y-60));
      let bottom = block.findIndex(hold => (hold.x==this.x&&hold.y==this.y+60));
      let diaribot = block.findIndex(hold => (hold.x==this.x+60&&hold.y==this.y+60));
      let dialebot = block.findIndex(hold => (hold.x==this.x-60&&hold.y==this.y+60));
      let diaritop = block.findIndex(hold => (hold.x==this.x+60&&hold.y==this.y-60));
      let dialetop = block.findIndex(hold => (hold.x==this.x-60&&hold.y==this.y-60));
      if (right!=-1){
        b = 3
        d = 9
      }
      if (left!=-1){
        a = 2
        c = 8
      }
      if (top!=-1){
        a = 14
        b = 15
      }
      if (top!=-1&&left!=-1){
        a = 12
      }
      if (top!=-1&&right!=-1){
        b = 13
      }
      if (bottom!=-1){
        c = 20
        d = 21
      }
      if (bottom!=-1&&left!=-1){
        c = 18
      }
      if (bottom!=-1&&right!=-1){
        d = 19
      }
      if (diaribot!=-1&&bottom!=-1&&right!=-1){
        d = 7
      }
      if (dialebot!=-1&&bottom!=-1&&left!=-1){
        c = 6
      }
      if (diaritop!=-1&&top!=-1&&right!=-1){
        b = 1
      }
      if (dialetop!=-1&&top!=-1&&left!=-1){
        a = 0
      }
        image(blocktilesheet,this.x-15,this.y-15,size,size,
          divisions[a][0],
          divisions[a][1],
          divisions[a][2],
          divisions[a][3])
        image(blocktilesheet,this.x+15,this.y-15,size,size,
          divisions[b][0],
          divisions[b][1],
          divisions[b][2],
          divisions[b][3])
        image(blocktilesheet,this.x-15,this.y+15,size,size,
          divisions[c][0],
          divisions[c][1],
          divisions[c][2],
          divisions[c][3])
        image(blocktilesheet,this.x+15,this.y+15,size,size,
          divisions[d][0],
          divisions[d][1],
          divisions[d][2],
          divisions[d][3])
      // }
    }
    pop()
  }
}

function coinS(x,y,z){
  push();
  translate(x,y);
  noFill();
  stroke(255,200,0);
  strokeWeight(5);
  ellipse(0,0,z,30);
  line(0,-5,0,5);
  pop();
}