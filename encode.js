function encode(){
  /*
  Plan:
  -start with blocks, then obstacles, then sensors, then portals, then coins
  -symbol of starting a new type will be A
  -symbol of starting a new object will be B
  -symbol of comma will by C
  -all numbers will stay the same
  */
  
  var output=""
  for(var i=0; i<blocks.length; i++){
    if(i !=0){
      output=output+"B"//eTHEE
    }
    output=output+blocks[i].x
    output=output+"C"
    output=output+
      blocks[i].y
    output=output+"C"
    output=output+blocks[i].sizeX
    output=output+"C"
    output=output+blocks[i].sizeY
    output=output+"C"
    output=output+blocks[i].dimension
  }
  output = output+"A"
  for(var i=0; i<obstacles.length; i++){
    if(i !=0){
      output=output+"B"
    }
    output=output+obstacles[i].type
    output=output+"C"
    output=output+obstacles[i].x
    output=output+"C"
    output=output+obstacles[i].y
    output=output+"C"
    output=output+obstacles[i].sizeX
    output=output+"C"
    output=output+obstacles[i].sizeY
    output=output+"C"
    output=output+obstacles[i].dimension
    output=output+"C"
    output=output+obstacles[i].rotation
  }
  output = output+"A"
  for(var i=0; i<sensors.length; i++){
    if(i !=0){
      output=output+"B"
    }
    output=output+sensors[i].x
    output=output+"C"
    output=output+sensors[i].y
    output=output+"C"
    output=output+sensors[i].full
  }
  output = output+"A"
  for(var i=0; i<checkpoints.length; i++){
    if(i !=0){
      output=output+"B"
    }
    output=output+checkpoints[i].x
    output=output+"C"
    output=output+checkpoints[i].y
    output=output+"C"
    output=output+checkpoints[i].newX
    output=output+"C"
    output=output+checkpoints[i].newY
    output=output+"C"
    output=output+checkpoints[i].used
  }
  output = output+"A"
  for(var i=0; i<coins.length; i++){
    if(i !=0){
      output=output+"B"
    }
    output=output+coins[i][0]
    output=output+"C"
    output=output+coins[i][1]
  }
  return output
}

// function decode(){
//   blocks=[]
//   var code="-90C40C220C20C0B-10C-70C120C20C0B-200C-200C100C400C0B200C-250C100C375C0B400C-350C1000C1000C0B700C-700C100C500C1AspikeC180C0C20C20C0C270BspikeC50C-90C20C20C0C0BspikeC750C-370C20C20C-1C0A550C-450CfalseB1000C-600CfalseA-200C-250C200C-300CfalseB1200C-450C0C0CfalseA100C0B-200C-250B-200C-250B-200C-250B-200C-250B1328C-413B1328C-413B1328C-413B1328C-413B1328C-413"
  
//   //blocks
//   //finding the number of a thing
//   let count=num(code)-1
  
//   var first="";
//   var sec="";
//   var third="";
//   var fourth="";
//   var fifth="";
//   var run
  
//   //blocks, obstacles, sensors and checkpoints
//   for(var type=0; type<5; type++){
//     let count=num(code)
//     let times=0
//     for(var i=0; i<count; i++){
//     var output=[]
//     if(type==0){
//       times=5
//     }else if(type==1){
//       times=7
//     }else if(type==2){
//       times=3
//     }else if(type==3){
//       times=5
//     }else if(type==4){
//       times=2
//     }
    
//     for(var j=0; j<times; j++){
//       run=true
//     let y=0
//     var string=""
//     while(run==true){
      
//       if(code[y]=="C" || code[y]=="B" || code[y]=="A"){
//         run=false
//         code=cut(code, y+1)
//       }else{
//         string=string+code[y]
//       }
//       y+=1

//     }
//       if(times==7){
//         print(output)
//       }
//       append(output,string)
//     }
    
    
//     if(type==0){
//       append(blocks, new block(int(output[0]),int(output[1]),int(output[2]),int(output[3]),int(output[4])))
//     }else if(type==1){
//       append(obstacles, new obstacle(output[0],int(output[1]),int(output[2]),int(output[3]),int(output[4]),int(output[5]),int(output[6])))
      
//     }else if(type==2){
//         append(sensors, new sensor(int(output[0]),int(output[1]),boolean(output[2])))
//     }else if(type==3){
//       append(checkpoints, new checkpoint(int(output[0]), int(output[1]), int(output[2]), int(output[3])))
//       append(editPortals, new checkpoint(int(output[0]), int(output[1]), int(output[2]), int(output[3])))
//     }else if(type==4){
//       append(coins, [int(output[0]),int(output[1])])
//       append(editCoins, [int(output[0]),int(output[1])])
//     }
    
    
//   }
//   }
  
  
// }

//I KEPT GETTING AN ERROR IN MINE SO I LET CHATGPT COOK

function decode(code) {

  // var code = "-90C40C220C20C0B-10C-70C120C20C0B-200C-200C100C400C0B200C-250C100C375C0B400C-350C1000C1000C0B700C-700C100C500C1AspikeC180C0C20C20C0C270BspikeC50C-90C20C20C0C0BspikeC750C-370C20C20C-1C0A550C-450CfalseB1000C-600CfalseA-200C-250C200C-300CfalseB1200C-450C0C0CfalseA100C0B-200C-250B-200C-250B-200C-250B-200C-250B1328C-413B1328C-413B1328C-413B1328C-413B1328C0-413";
  
  var sections = code.split('A');
  
  for (var type = 0; type < sections.length; type++) {
    var section = sections[type];
    var entries = section.split('B');

for (var i = 0; i < entries.length; i++) {
  var entry = entries[i];
  var values = entry.split('C');
  
  if (type === 0) {
    blocks.push(new block(
      int(values[0]), int(values[1]), int(values[2]), int(values[3]), int(values[4])
    ));
  } else if (type === 1) {
    obstacles.push(new obstacle(
      values[0], int(values[1]), int(values[2]), int(values[3]), int(values[4]), int(values[5]), int(values[6])
    ));
  } else if (type === 2) {
    sensors.push(new sensor(
      int(values[0]), int(values[1]), values[2] === "true"
    ));
  } else if (type === 3) {
    checkpoints.push(new checkpoint(
      int(values[0]), int(values[1]), int(values[2]), int(values[3])
    ));
    editPortals.push(new checkpoint(
      int(values[0]), int(values[1]), int(values[2]), int(values[3])
    ));
  } else if (type === 4) {
    coins.push([int(values[0]), int(values[1])]);
    editCoins.push([int(values[0]), int(values[1])]);
  }
}
  }
}



function cut(code, num){
  var c=""
  for(var i=num; i<code.length-num; i++){
    c+=code[i]
  }
  return c
}

function num(code){
  var counting=true
  var count=1
  for(var i=0; i<code.length; i++){
    if(code[i]==["A"]){
        counting=false
    }
      
     if(counting==true){
        if(code[i]=="B"){
          count+=1
        }
      }
  }
  return count
}

function copyStringToClipboard(str) {
  // Replace literal newlines with escaped \n
  const escapedStr = str.replace(/\n/g, '\\n');
  
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = escapedStr;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
  console.log("Copied To Clipboard!");
}


function share(){
  copyStringToClipboard(player1.x+"|"+player1.y+"|"+checkX+"|"+checkY+"|"+coin+"|"+owned+"|"+equipped+"|"+time)
}

function load(code){
  var c=code.split("|")
  player1.x=int(c[0])
  player1.y=int(c[1])-player1.size*1.5
  checkX=int(c[2])
  checkY=int(c[3])
  coin=int(c[4])
  var newOwned=[]
  var list=c[5].split(",")
  for(var i=0; i<owned.length; i++){
    append(newOwned,list[i])
  }
  owned=newOwned
  equipped=int(c[6])
  time=int(c[7])
}
