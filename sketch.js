//Dimensional Rifter

var showX = 0;
var showY = 0;
var showSizeX = 0;
var showSizeY = 0;
var cameraX = 0;
var cameraY = 0;
var blocks = [];
var jumps = 1;
var onSurface = true;
var velocityY = 0;
var gravity = 0.98;
var jump = false;
var checkX = 0;
var checkY = 0;
var speed = 6.7;
var jumpSpeed = 19;
var checkpoints = [];
var checkpointSize = 50;
var obstacles = [];
var startPointX = 0;
var startPointY = 0;
var test = false;
var sensors = [];
var sensorSize = 10;
var playerShootingPositionX = 0;
var playerShootingPositionY = 0;
var stw = 5;
var coins = [];
var coinDir = 1;
var coinRadius = 15;
var cX = 0;
var cY = 0;
var time = 0;

//javelin variables
var coin = 0;
var hitBox = false;
var phase = false;
var shop = false;
var costs = [0, 5, 10];
var owned = [true, false, false];
var equipped = 0;
var names = ["Normal", "Homing", "Wall Phase"];
var canShop = true;

//load variables
var ask = false;
var codeInput;

//levelEditor variables
var off = 50;
var current = "block";
var addX = 0;
var addY = 0;
var addSizeX = 0;
var addSizeY = 0;
var switchCount = 0;
var placeDimension = 0;
var placeCount = 0;
var checkpointX = 0;
var checkpointY = 0;
var clickCount = 0;
var deleteCount = 0;
var playCount = 0;
var placeRotation = 0;
var rotateCount = 0;
var editPortals = [];
var editCoins = [];


var coming = false
var ignore = false
var music;

function preload(){
  // music=loadSound("ShyGuy (1) (1).wav")
  music=loadSound("ShyGuy (1).mp3")
  userStartAudio()
}

function mouseClicked(){
  if (javelin.inSensor == true){
    // and comment out this line for retractable:
    ignore = true
    javelin.inSensor = false
    // print('huh')
    dimension = 0
    coming=true
    //and, u guessed it, VICE VERSA!!!
  }
}
function mouseReleased() {
  /*
  SHAAYER THIS IS VERY IMPORTANT
  IF YOU WANT A RETRACTEBLE JAVELIN
  COMMENT OUT THE LINE DOWN THERE THAT SAYS:
  javelin.thrown = false
  AND ALSO UNCOMMENT yes thats right UNCOMMENT
  THE LINE THAT SAYS:
  //coming = true
  ILL ADD MORE COMMENTS HOLD UP
  */
  
  //if you want retractable javelin comment OUT this line:
  
  
  javelin.thrown = false
  
  
  //and vise versa
  
  
  
  
  if (javelin.thrown == false){
    if (levelEditor == false) {
      javelin.click();
    }
    click();
    javelinClick();
    javelin.thrown = true
    coming = false
    ignore = false
  }else if (javelin.inSensor == true){
    ignore = true
    javelin.inSensor = false
    print('huh')
    dimension = 0
    coming=true
  }
  else if (javelin.thrown == true){
    if (levelEditor == false) {
      javelin.retract();
      
    }
    click();
    javelinClick();
    ignore = false
    
    
    
    // if you want retractable javelin UNcomment out this line:
    
    
     comig = true
    
    
    //and vise versa
  }
  
}


/*
timeline:
-fix bugs in levelEditor(checkpoint hitbox doesn't always register after pressing  ` a few times) - done
-encoding and decoding the levelEditor creations
-change the rules in the 2 dimensions
-imagery; fire vs ice; blocks: glaciars vs molten rock; spikes: lava vs icicle; portals, waterfalls vs caves;
-create a javelin shop
-skins

*/

// to-do: javelin shop, if leveleditor was used the best javelin is automatically equipped

/*
add later:
bonuses - fly for 1 second? be faster? - out of the way - hard to get to
rules different in the 2 worlds - light world, maybe higher gravity but faster speed
imagery 
- fire vs ice?
- Shadow vs Light?
- polar opposites

feature for later:
-allow user to choose skin and javelin skin

*/

var dimension = 0;

var darkBackground;
var lightBackground;
var iceSpike;
var fireSpike;
var fireBlock;
var iceBlock;

// function preload() {
//   darkBackground = loadImage(
//     "fire and molten rock background for a pixel art video game 31-01-2025 at 08-10-22.jpeg"
//   );
//   lightBackground = loadImage(
//     "water and ice background for a pixel art video game 31-01-2025 at 08-17-14.jpeg"
//   );
//   iceSpike = loadImage(
//     "equilateral_triangle_that_looks_like_an_icicle_pixil_art_31-01-2025_at_09-11-58-removebg-preview.png"
//   );
//   fireSpike = loadImage(
//     "equilateral_triangle_that_looks_like_a_volcano_31-01-2025_at_09-18-02-removebg-preview.png"
//   );
//   fireBlock = loadImage("Screenshot 2025-02-02 at 4.30.43 PM.png");
//   iceBlock = loadImage("Screenshot 2025-02-02 at 4.49.01 PM.png");
// }

function setup() {
  codeInput = createInput("", "text");
  codeInput.position(-500, -500);

  angleMode(DEGREES);
  createCanvas(1000, 600);
  player1 = new player(0, 0, 30);
  javelin = new javelin(0, 0, 25, 5, 0, false, false, true, 10, 1, 0, 0);
  // if(levelEditor==false){
  //     coin=5
  //     append(blocks,new block(-90,40,220,20,0))
  //   // append(blocks,new block(40,-50,120,2))
  //   // append(blocks,new block(40,7,120,10))
  //   append(blocks,new block(-10,-70,120,20,0))
  //   // append(blocks,new block(-10,80,120,20))

  //   append(blocks,new block(-200,-200,100,400,0))
  //   append(blocks,new block(200,-250,100,375,0))
  //   append(blocks, new block(400, -350, 1000,1000,0))
  //   append(blocks, new block(700,-700,100,500,1))
  //   append(coins, [100,-0])
  //   append(coins, [-200,-250])
  //     append(coins, [-200,-250])
  //     append(coins, [-200,-250])
  //     append(coins, [-200,-250])
  //   append(coins, [1328,-413])
  //     append(coins, [1328,-413])
  //     append(coins, [1328,-413])
  //     append(coins, [1328,-413])
  //     append(coins, [1328,-413])

  //   append(sensors,new sensor(550, -450, false))
  //   append(sensors,new sensor(1000, -600, false))
  //   append(checkpoints,new checkpoint(-200,-250,200,-300))
  //   append(checkpoints,new checkpoint(1200,-450,0,0))
  //     append(obstacles, new obstacle("spike",180,0,20,20,0,270))
  //   append(obstacles,new obstacle("spike",50,-90,20,20,0,0))
  //   append(obstacles,new obstacle("spike",750,-370,20,20,-1,0))
  //     encode()
  //   // }
  decode(
    "-100C50C300C150C0B-100C-250C50C300C0B150C0C50C50C0B200C-50C50C50C0B250C-100C50C50C0B300C-150C50C50C0B400C50C200C150C0B650C-50C50C50C0B750C-100C150C50C0B950C0C100C100C0B1200C-300C400C300C0B1700C-300C550C50C0B2250C-100C300C50C0B2650C-250C50C100C0B2750C-200C150C50C0B3000C-300C50C100C0B3100C-250C150C50C0B2950C400C250C50C0B3250C-150C600C50C0B3900C-50C500C50C0B4450C-150C450C50C0B5050C-250C50C50C0B4900C-400C50C50C0B5100C-550C50C50C0B4650C-600C300C50C0B4450C-900C50C250C1B4150C-700C300C50C0B3900C-1050C350C50C1B4300C-1000C50C300C-1B3550C-1050C300C50C0B3600C-1350C50C300C1B3100C-1050C250C50C0B3400C-1200C100C50C0B2900C-1300C50C300C0B2500C-1050C400C50C0B2500C-1350C50C300C0B2600C-1150C50C100C0B2850C-1250C50C50C0B2550C-1350C50C50C0B2200C-1350C50C50C0B2200C-1300C50C50C0B2250C-1300C50C50C0B2300C-1250C50C50C0B2350C-1200C50C50C0B2400C-1150C50C50C0B2450C-1100C50C50C0B1950C-1350C50C50C0B1950C-1300C50C50C0B2000C-1300C50C50C0B2050C-1250C50C50C0B1700C-1350C50C50C0B1700C-1300C50C50C0B1750C-1300C50C50C0B1450C-1350C50C50C0B1450C-1300C50C50C0B1200C-1350C50C50C0B1200C-1300C50C50C0B800C-1350C50C50C0B800C-1300C50C50C0B900C-1250C50C50C-1B950C-1250C50C50C-1B1000C-1250C50C50C-1B4800C-200C50C50C1B4800C-250C50C50C1B4800C-300C50C50C1B4800C-350C50C50C1B4800C-400C50C50C1B4800C-450C50C50C1B4800C-500C50C50C1B4800C-550C50C50C1B300C-1300C500C50C0B300C-1300C500C50C0B200C-1550C50C300C0B150C-1550C50C50C1B-100C-1550C50C50C0B-350C-1550C50C50C-1B-700C-1550C50C50C1B-950C-1550C250C50C0B-100C-1550C50C50C0B-1300C-1600C100C50C0B-1400C-1750C50C50C0B-1300C-1850C200C50C0B-1600C-1450C200C50C0B-1850C-1650C200C50C0B-1750C-1450C0C50C0B-2050C-1450C150C50C0B-2050C-1650C200C50C0B-2300C-1550C150C50C0B-1600C-1850C50C50C0B-1800C-1850C50C50C0B-1950C-1850C50C50C0B-2100C-1850C50C50C0B-2250C-1700C50C50C0B-2400C-1800C50C50C0B-2750C-1850C200C50C0B-1300C-1600C100C50C0B-2850C-1950C50C50C0B-2650C-2050C200C50C0B-2200C-2100C0C50C0B-1900C-2100C0C0C0B-1750C-2100C200C50C0B-2400C-2200C50C50C0B-2250C-2300C50C50C0B-2050C-2400C800C50C0B-1900C-2100C0C50C0B-1500C-2100C50C50C0B-1300C-2450C50C50C-1B-1300C-2550C50C50C-1B-1300C-2500C50C50C1B-1300C-2550C50C50C-1B-1300C-2600C50C50C1B650C-50C50C50C0B-1250C-2400C550C50C0B-750C-2750C50C350C0B-850C-2850C50C50C0B-900C-2800C50C50C0B-1250C-2750C350C50C0B-1300C-2750C50C150C0B-800C-2450C50C50C0B-800C-2500C50C50C1B-850C-2550C50C50C1B-900C-2600C50C50C1B-800C-2650C50C50C1B-650C-2700C300C50C0B-350C-2750C50C50C0B-300C-2800C50C50C0B-250C-2850C50C50C0B-350C-2750C50C50C0B-100C-2950C400C50C0B-850C-2850C50C50C0B350C-3050C450C50C0B400C-2750C0C50C0B650C-2750C100C50C0B800C-2800C150C50C0B800C-3250C50C250C0B1000C-2900C50C50C0B1150C-3000C50C50C0B900C-3050C50C50C0B1000C-3150C100C50C0B1150C-3250C50C50C0B850C-3350C100C50C0B950C-3300C50C50C0B400C-3200C50C50C0B150C-3250C50C50C0B400C-3200C50C50C0B400C-3200C50C50C0B400C-3200C50C50C0B400C-3200C50C50C0B400C-3200C50C50C0B400C-3200C50C50C0B400C-3200C50C50C0B150C-3250C50C50C0B0C-3300C50C50C0B-200C-3350C50C50C0B-700C-3450C400C100C0B-200C-3350C50C50C0B-200C-3350C50C50C0B-800C-3450C50C50C0B-900C-3350C50C50C0B-1000C-3250C50C50C0B-1100C-3300C50C50C0B-1200C-3400C50C50C0B-1300C-3450C50C50C0B-1400C-3500C50C50C0B-1450C-3500C50C50C0B-1700C-3600C150C0C0B-1600C-3650C50C50C0B-1650C-3650C50C50C0B-1700C-3650C50C50C0B-1550C-3550C50C50C0B-1900C-3700C50C50C0B-2000C-3700C0C100C0B-2600C-3900C150C50C0B-2550C-3600C50C50C0B-2600C-3600C50C50C0B-2500C-3650C50C50C0B-2650C-3600C50C50C0B-2700C-3600C50C50C0B-2450C-3600C50C50C0B-2450C-3600C50C150C0B-2400C-3500C50C50C0B-2450C-3500C50C50C0ACNaNCNaNCNaNCNaNCNaNCNaNBspikeC1863C-320C20C20C0C0BspikeC1888C-320C20C20C0C0BspikeC1913C-320C20C20C0C0BspikeC1938C-320C20C20C0C0BspikeC2078C-320C20C20C0C0BspikeC2103C-320C20C20C0C0BspikeC2128C-320C20C20C0C0BspikeC2153C-320C20C20C0C0BspikeC2178C-320C20C20C0C0BspikeC1839C-320C20C20C0C0BspikeC1814C-320C20C20C0C0BspikeC1789C-320C20C20C0C0BspikeC2655C-271C20C20C0C0BspikeC2675C-271C20C20C0C0BspikeC3002C-320C20C20C0C0BspikeC3027C-320C20C20C0C0BspikeC3654C-1346C20C20C1C90BspikeC3654C-1326C20C20C1C90BspikeC3654C-1306C20C20C1C90BspikeC3654C-1286C20C20C1C90BspikeC3654C-1266C20C20C1C90BspikeC3654C-1246C20C20C1C90BspikeC3654C-1226C20C20C1C90BspikeC3654C-1201C20C20C1C90BspikeC3654C-1181C20C20C1C90BspikeC3654C-1156C20C20C1C90BspikeC3654C-1136C20C20C1C90BspikeC3654C-1111C20C20C1C90BspikeC3654C-1091C20C20C1C90BspikeC3401C-1147C20C20C0C180BspikeC3476C-1147C20C20C0C180BspikeC3441C-1147C20C20C0C180BspikeC3501C-1187C20C20C0C450BspikeC3376C-1187C20C20C0C630BspikeC1251C-1342C20C20C0C90BspikeC1251C-1312C20C20C0C90BspikeC1251C-1282C20C20C0C90BspikeC851C-1345C20C20C0C90BspikeC851C-1315C20C20C0C90BspikeC851C-1285C20C20C0C90BspikeC-1499C-2122C20C20C0C0BspikeC-1474C-2122C20C20C0C0BspikeC-1769C-2097C20C20C0C270BspikeC-1769C-2072C20C20C0C270BspikeC-1669C-2122C20C20C0C360BspikeC-1649C-2122C20C20C0C360BspikeC-2199C-2084C20C20C0C450BspikeC-1899C-2084C20C20C0C450BspikeC-1924C-2084C20C20C0C630BspikeC-2224C-2084C20C20C0C630BspikeC-1803C-2421C20C20C0C0BspikeC-1778C-2421C20C20C1C360BspikeC-1757C-2421C20C20C1C360BspikeC-1732C-2421C20C20C0C720BspikeC-1707C-2421C20C20C-1C1080BspikeC-1682C-2421C20C20C-1C1080BspikeC-1657C-2421C20C20C0C1080BspikeC-1632C-2421C20C20C0C1080BspikeC-1607C-2421C20C20C0C1080BspikeC-1582C-2421C20C20C1C1440BspikeC-1557C-2421C20C20C1C1440BspikeC-1532C-2421C20C20C0C1440BspikeC-1507C-2421C20C20C0C1440BspikeC-1482C-2421C20C20C0C1440BspikeC-1459C-2420C20C20C-1C1800BspikeC-1434C-2420C20C20C-1C1800BspikeC-825C-2420C20C20C1C0BspikeC-845C-2420C20C20C1C0BspikeC-870C-2420C20C20C1C0BspikeC-895C-2420C20C20C1C0BspikeC-920C-2420C20C20C1C0BspikeC-945C-2420C20C20C1C0BspikeC-970C-2420C20C20C1C0BspikeC-990C-2420C20C20C1C0BspikeC-1015C-2420C20C20C1C0BspikeC-1035C-2420C20C20C1C0BspikeC-1055C-2420C20C20C1C0BspikeC-1080C-2420C20C20C1C0BspikeC-1100C-2420C20C20C1C0BspikeC-1120C-2420C20C20C1C0BspikeC-1140C-2420C20C20C1C0BspikeC-1160C-2420C20C20C1C0BspikeC-1185C-2420C20C20C1C0BspikeC-745C-2771C20C20C1C0BspikeC-720C-2771C20C20C1C0BspikeC202C-3245C20C20C0C90BspikeC202C-3220C20C20C0C90BspikeC-2475C-3841C20C20C0C900ANaNCNaNCfalseB3697C-183CfalseB4797C-206CfalseB4287C-86CfalseB4674C-731CfalseB4002C-1201CfalseB-1016C-2540CfalseB-2017C-2271CfalseB231C-1587CfalseB-78C-1597CfalseA981C-59C1474C-433CfalseB3179C-309C3329C-224CfalseB4212C-756C4032C-1121CfalseB3113C-1107C2903C-1432CfalseB4830C-213C5060C-368CfalseB677C-1369C197C-1694CfalseB-2624C-1909C-2829C-2079CfalseB-1435C-2455C-1350C-2480CfalseB-65C-3013C190C-3048CfalseB-384C-3514C-634C-3519CfalseB-2064C-3649C-2338C-3968CfalseA2973C381B2828C-1087B-1751C-1481B-1703C-2126B-1603C-2126B-1565C-2121B-1405C-2076B-1281C-2771B-1246C-2771B-1211C-2771B816C-2826B851C-2826B886C-2826B921C-2821B1023C-29291B-1999C-3729B-1764C-3754B-2681.599999999986C-3626.0799999999335B-2641.599999999986C-3626.0799999999335B-2596.599999999986C-3626.0799999999335B-2556.599999999986C-3621.0799999999335B-2521.599999999986C-3621.0799999999335B-2531.599999999986C-3661.0799999999335B-2566.599999999986C-3661.0799999999335B-2601.599999999986C-3671.0799999999335B-2641.599999999986C-3671.0799999999335B-2686.599999999986C-3671.0799999999335B-2666.599999999986C-3711.0799999999335B-2636.599999999986C-3711.0799999999335B-2601.599999999986C-3711.0799999999335B-2571.599999999986C-3711.0799999999335B-2531.599999999986C-3711.0799999999335B-2501.599999999986C-3701.0799999999335B-2501.599999999986C-3666.0799999999335B-2456.599999999986C-3661.0799999999335B-2456.599999999986C-3706.0799999999335B-2486.599999999986C-3736.0799999999335B-2516.599999999986C-3746.0799999999335B-2561.599999999986C-3756.0799999999335B-2601.599999999986C-3761.0799999999335B-2631.599999999986C-3761.0799999999335B-2676.599999999986C-3761.0799999999335B-2676.599999999986C-3801.0799999999335B-2641.599999999986C-3801.0799999999335B-2591.599999999986C-3801.0799999999335B-2556.599999999986C-3801.0799999999335B-2536.599999999986C-3796.0799999999335B-2496.599999999986C-3786.0799999999335B-2451.599999999986C-3766.0799999999335B-2641.599999999986C-3846.0799999999335B-2691.599999999986C-3826.0799999999335B-2701.599999999986C-3796.0799999999335B-2701.599999999986C-3761.0799999999335B-2701.599999999986C-3721.0799999999335B-2721.599999999986C-3681.0799999999335B-2726.599999999986C-3626.0799999999335B-2756.599999999986C-3731.0799999999335B-2751.599999999986C-3781.0799999999335B-2736.599999999986C-3811.0799999999335B-2666.599999999986C-3856.0799999999335B-2511.599999999986C-3826.0799999999335"
  );

  textFont("itim");
  userStartAudio()
  music.loop()
}

function draw() {
  if (programming == false && ask==false) {
    let canvasElement = document.querySelector("canvas");

    if (canvasElement) {
      // Make it focusable
      canvasElement.setAttribute("tabindex", "0");
      // Remove the focus outline via inline CSS
      canvasElement.style.outline = "none";
      // Automatically focus it
      canvasElement.focus();
    }
  }

  //rotating the coins
  coinRadius += 0.4 * coinDir;
  if (coinRadius >= 15) {
    coinDir = -1;
  }
  if (coinRadius <= -15) {
    coinDir = 1;
  }

  //auto-coin with levelEditor
  // if(levelEditor==true){
  //   coin=10
  // }

  if (levelEditor == false) {
    userStartAudio()
    if (ask == false) {
      //background
      if (dimension == 0) {
        background(0, 200);
        // image(darkBackground, 0, 0, width, height);
      } else if (dimension == 1) {
        background(180, 200);
        // image(lightBackground, 0, 0, width, height);
      }

      //coinNumber thing
      coinS(40, 40, 30);
      textSize(30);
      fill(255);
      if (dimension == 0) {
        fill("white");
      } else {
        fill("black");
      }
      noStroke();
      text(coin, 70, 49);

      //javelin type
      var type = "";
      if (phase == true) {
        type = "Wall Phase";
      } else if (hitBox == true) {
        type = "Home to Sensor";
      } else {
        type = "Normal";
      }
      text("Javelin: " + type, 10, height - 10);
      angleMode(DEGREES);

      push();
      textAlign(LEFT);
      text("Time: " + floor(time * 100) / 100, width - 180, 45);
      pop();

      //switching shop
      if (keyIsDown(69)) {
        if (canShop == true) {
          if (shop) {
            shop = false;
            canShop = false;
          } else {
            shop = true;
            canShop = false;
          }
        }
      } else {
        canShop = true;
      }

      strokeWeight(stw);
      noFill();

      if (shop != true) {
        push();
        translate(-cameraX + width / 2, -cameraY + height / 2);

        // //javelin change stuff
        // //bigger hitbox
        // if(coin>=5){
        //   hitBox=true
        // }
        // //phase through walls
        // if(coin>=10){
        //   phase=true
        // }

        //checking if the javelin is in a sensor
        if (ignore == false){
          javelin.sensorCollisions();
        }
        
        if (javelin.inSensor == true&&ignore==false) {
          dimension = 1;
        } else {
          dimension = 0;
        }

        //dying by going too far down
        if (player1.y > 2000) {
          death();
        }

        //drawing and hitting coins
        for (var i = 0; i < coins.length; i++) {
          coinS(coins[i][0], coins[i][1], coinRadius * 2);
          if (
            dist(
              player1.x + player1.size / 2,
              player1.y + player1.size / 2,
              coins[i][0],
              coins[i][1]
            ) <=
            20 + sqrt(((2 * player1.size) / 2) ^ 2)
          ) {
            coin += 1;
            coins.splice(i, 1);
          }
        }

        //drawing walls
        for (var i = 0; i < blocks.length; i++) {
          if (blocks[i].dimension == 0) {
            if (dimension == 0) {
              // stroke(23, 15, 23);
              stroke("rgb(66,144,255)")
              fire(blocks[i].x, blocks[i].y, blocks[i].sizeX, blocks[i].sizeY);
              rect(
                blocks[i].x,
                blocks[i].y,
                blocks[i].sizeX,
                blocks[i].sizeY,
                5
              );
            } else {
              // stroke(36, 74, 114);
              stroke("rgb(255,209,106)")
              ice(blocks[i].x, blocks[i].y, blocks[i].sizeX, blocks[i].sizeY);
              rect(
                blocks[i].x,
                blocks[i].y,
                blocks[i].sizeX,
                blocks[i].sizeY,
                5
              );
            }
            // rect(blocks[i].x,blocks[i].y,blocks[i].sizeX,blocks[i].sizeY,5)
          }

          if (blocks[i].dimension == 1 && dimension == 0) {
            // stroke("white")
            stroke(180, 200)
            ice(blocks[i].x, blocks[i].y, blocks[i].sizeX, blocks[i].sizeY);
            rect(blocks[i].x, blocks[i].y, blocks[i].sizeX, blocks[i].sizeY, 5);
          }
          if (blocks[i].dimension == -1 && dimension == 1) {
            stroke("black");
            // rect(blocks[i].x,blocks[i].y,blocks[i].sizeX,blocks[i].sizeY,5)
            fire(blocks[i].x, blocks[i].y, blocks[i].sizeX, blocks[i].sizeY);
            rect(blocks[i].x, blocks[i].y, blocks[i].sizeX, blocks[i].sizeY, 5);
          }
        }

        //SENSOR COORDINATES ARE IN THE CENTER
        //drawing sensors
        if (dimension == 1) {
          stroke("#FF0000");
        } else {
          stroke("#0DFB15");
        }
        for (var i = 0; i < sensors.length; i++) {
          rect(
            sensors[i].x - sensorSize,
            sensors[i].y - sensorSize,
            sensorSize * 2,
            sensorSize * 2,
            5
          );
        }

        //drawing checkpoints
        for (var i = 0; i < checkpoints.length; i++) {
          if (dimension == 0) {
            stroke("#FF0000");
          } else {
            stroke("#0DFB15");
          }
          rect(
            checkpoints[i].x,
            checkpoints[i].y,
            checkpointSize,
            checkpointSize,
            5
          );
          ellipse(checkpoints[i].newX, checkpoints[i].newY, 5);
          strokeWeight(stw / 2.5);
          line(
            checkpoints[i].x + checkpointSize / 2,
            checkpoints[i].y + checkpointSize / 2,
            checkpoints[i].newX,
            checkpoints[i].newY
          );
          strokeWeight(stw);
        }

        cameraX -= (cameraX - player1.x) / 20;
        cameraY -= (cameraY - player1.y) / 20;

        //drawing and checking for collisions in obstacles
        obstacleCollision();
        //checkpoint collisions
        checkpointCollisions();
        player1.move();
        player1.collide();
        player1.display();

        if (dimension == 1) {
          stroke("rgb(66,144,255)");
        } else {
          stroke("rgb(255,209,106)");
        }

        //JAVELIN CODE AND DRAWING BELOW
        //javelin point is in the middle
        if (coming == false){
          javelin.collisions();
        }
        
        javelin.code();

        // javelin.wallCollisions()
        //switching to edit
        if (keyIsDown(192) && playCount >= 30 && programming==true) {
          playCount = 0;
          dimension = 0;
          cameraX = 0;
          cameraY = 0;
          // player1.x=0
          // player1.y=0

          // checkpoints=editPortals

          // coins=editCoins

          coins = [];
          for (var i = 0; i < editCoins.length; i++) {
            append(coins, editCoins[i]);
          }
          checkpoints = [];
          for (var i = 0; i < editPortals.length; i++) {
            append(checkpoints, editPortals[i]);
          }

          levelEditor = true;
        }

        t();

        time += 1 / 60;

        pop();

        //save
        if (keyIsDown(81)) {
          share();
        }
        if (keyIsDown(9)) {
          ask = true;
        }
      } else {
        javelinShop();
      }
    } else {
      push();
      background("black");
      textSize(18);
      stroke("white");
      strokeWeight(1);
      noFill();
      text("Enter code:", 20, 20);
      codeInput.position(30, 40);

      if (keyIsDown(13)) {
        load(codeInput.value());
        ask = false;
        codeInput.position(-500, -500);
      }

      pop();
    }
  } else {
    levelEdit();
  }
  if (coming == true){
    javelin.retract();
  }

  playCount += 1;

  mouse1();
}

function death() {
  jump = false;
  velocityY = 0;
  player1.x = checkX;
  player1.y = checkY;
}


function t() {
  noStroke();
  if (dimension == 1) {
    // fill("rgb(66,144,255)");
    fill("rgb(66,144,255)");
    
  } else {
    // fill("rgb(255,209,106)");
    fill("rgb(255,209,106)");
  }
  textSize(20);
  text(
    "Welcome! Let's see your parkour skills!\nUse WASD!\nTo save your progress press Q.\nTo load your progress press Tab.",
    -20,
    -250
  );
  text(
    "These are portals that teleport" + "\n" + "you and set your respawn.",
    870,
    -170
  );
  text("Falling into the void kills you.", 360, 0);
  text("Don't hit the spikes!", 1900, -450);
  text("How did you find me!?", 3000, 250);
  text("These are sensors.", 3350, -250);
  text(
    "Sensors let you switch dimensions\nby hitting them with your javelin.",
    3950,
    -150
  );
  text("Click to throw your javelin.", 4550, -250);
  text("Some walls exist in only 1 dimension!", 4700, -750);
  text("Some spikes are the same!", 3750, -1200);
  text(
    "These are coins.\nThey let you buy better javelins.\nPress E to access shop.",
    2575,
    -1250
  );
  // text("Press Q to copy progress code.\nPress W to paste progress code.",350,-1400)
  text("Maybe there is a block in the other dimension?",-600,-1450)
  text("Another one?",-800,-1650)
  text("Pick: Up or Down?",-1550,-1600)
  text("Congratulations! You beat Dimensional Rifter 1.0!\nPress Q to copy a code that holds your time.",-650,-3600)
}

function mouse1() {
  push();
  resetMatrix();
  translate(mouseX, mouseY);
  rotate(frameCount * 2);
  beginShape();
  noCursor();
  noFill();
  stroke(255, 0, 200);
  for (var i = 0; i < 5; i++) {
    vertex(cos((360 / 5) * i) * 10, sin((360 / 5) * i) * 10);
  }
  endShape(CLOSE);
  fill(255, 0, 200);
  noStroke();
  ellipse(0, 0, 5, 5);
  pop();
  //  push()
  // resetMatrix()
  // noCursor()
  // noFill()
  // strokeWeight(4)
  // stroke('rgb(255,172,0)')
  // translate(mouseX,mouseY)
  // ellipse(0,0,15,15)
  // if (mouseIsPressed){
  //   stroke('rgb(233,142,123)')
  //   strokeWeight(5)
  // }else{
  //   strokeWeight(4)
  // }
  // point(0,0)
  // strokeWeight(4)
  // line(10,0,10,0)
  // line(-10,0,-10,0)
  // line(0,10,0,10)
  // line(0,-10,0,-10)
  // pop()
}
