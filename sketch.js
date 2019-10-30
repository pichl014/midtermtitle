let m;
let d;
let g = 1;
let sw = 40;
let sh = 40;
let speedUp=0;
let worldCounter=0;
let cloud1, cloud2, cloud3;
let train1, train2, train3;
let stair1,stair2,stair3,stair4;
let planet1,planet2,planet3,planet4;
let ana1;
let marolyn1;
let vera1;
//let trap1;trap2,trap3,trap4;
let world = 0;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  // this is an instance of the object that runs the constructor of the class Car
  cloud1 = new Cloud(10, 200, color(255, 227, 248));
  cloud2 = new Cloud(300, 200, color(255, 227, 248));
  cloud3 = new Cloud(500, 300, color(255, 227, 248));

  train1 = new Train(100, 100, color(230, 234, 235));
  train2 = new Train(200, 200, color(230, 234, 235));
  train3 = new Train(300, 300, color(230, 234, 235));

  stair1 = new Stair(100, 100, color(255, 0, 0));
  stair2 = new Stair(200, 200, color(0, 255, 0));
  stair3= new Stair(300, 300, color(0, 0, 255));
  stair4= new Stair(350, 300, color(0, 0, 255));
  
  planet1 = new Planet(100, 100, color(255, 0, 0));
  planet2 = new Planet(200, 200, color(0, 255, 0));
  planet3 = new Planet(300, 300, color(0, 0, 255));
  planet4 = new Planet(350, 300, color(0, 0, 255));
  
 // trap1 = new Trap(,);
  //trap2 = new Trap(,);
  //trap3 = new Trap(,);
  //trap4 = new Trap(,);
  
  ana1 = new Ana(width / 2, height - 5);
  marolyn1 = new Marolyn(width / 2, height + 5);
  vera1= new Vera(552,85);
}

function draw() {
  background(220);
  
   m=millis()+ speedUp;
  
  print(m);
  //1000 millis=1 sec
  if (m<5000) {
    World0();
}  else if (m>5000){
  
      vera1.shadow(sw,sh,g);
  // if (sw<200) {
  //   sw++; }
  // if (sh<200) {
  //   sh++;
  //}
  
  
    ana1.show();
    vera1.show();
    // marolyn1.ghost();
    if(world == 1) {
    World1();
    marolyn1.ghost();  
  } else if (world ==2) {
    World2();
    marolyn1.planet();
  } else if (world == 3) {
    World3();
    marolyn1.moon();
  } else if (world == 4) {
    World4();
    // vera1.shadow(sw,sh);
  } else if (world == 5) {
    World = 1;
  }
  
}
  
  
  // if (ana1.height>600) {
  //  world++;
  // }


  // if (world == 1) {
  //   World1();
  // } else if (world == 2) {
  //   World2();
  // } else if (world == 3) {
  //   World3();
  // } else if (world == 4) {
  //   World4();
  // } else if (world == 5) {
  //   World = 1;
  // }

// ana1.show();
// marolyn1.show();
// vera1.show();  
 d= round(dist(ana1.anaX,ana1.anaY,vera1.veraX,vera1.veraY));
  print(d);
  if (d<90) {
  // sw ++ ;
  // sh ++ ;  
    
    g = g + 0.0001;
    
  }

if (keyIsPressed == true) {
  if (keyCode == UP_ARROW) {
    ana1.anaY -= 3;
  }
}
if (keyIsPressed == true) {
  if (keyCode == DOWN_ARROW) {
    ana1.anaY += 3;
  }
}
  if (keyCode ==LEFT_ARROW) {
    ana1.anaX--;
    }
    if (keyCode==RIGHT_ARROW) {
    ana1.anaX++;
    }
//this is the part where you have to add the traps
if (ana1.anaY < 0) {
  ana1.anaY = height;
  world++;
}
  
  if (keyIsPressed == true) {
  if (keyCode == UP_ARROW) {
    marolyn1.marolynY -= 2;
  }
}
if (keyIsPressed == true) {
  if (keyCode == DOWN_ARROW) {
    marolyn1.marolynY += 2;
  }
}

if (marolyn1.marolynY < 0) {
  marolyn1.marolynY = height;
  world++;
}

  }
  
  
function World0() {
text ("START", 200,200);
}

 function World1() {
  train1.move();
  train1.show();
  train1.checkCollision();

  train2.move();
  train2.show();
  train2.checkCollision();

  train3.move();
  train3.show();
  train3.checkCollision();
   
  //marolyn1.move();
  //marolyn1.show();
  
}
 function World2() {
  planet1.move();
  planet1.show();
  planet1.checkCollision();

  planet2.move();
  planet2.show();
  planet2.checkCollision();

  planet3.move();
  planet3.show();
  planet3.checkCollision();
  
  planet4.move();
  planet4.show();
  planet4.checkCollision();
}
 function World3() {
  stair1.move();
  stair1.show();
  stair1.checkCollision();

  stair2.move();
  stair2.show();
  stair2.checkCollision();

  stair3.move();
  stair3.show();
  stair3.checkCollision();
    
  stair4.move();
  stair4.show();
  stair4.checkCollision();
   //1st kind of trap is a loop
   //2nd 
  //trap1.show();
  //trap1.checkCollision(); 
   
   
 }  
 function World4() {
  cloud1.move();
  cloud1.show();
  cloud1.checkCollision();

  cloud2.move();
  cloud2.show();
  cloud2.checkCollision();

  cloud3.move();
  cloud3.show();
  cloud3.checkCollision();
  
  vera1.show();
  vera1.checkCollision();
  

}

 class Cloud {
  
  constructor(x, y, c) {
    this.cloudX = 300;
    this.cloudY = 300;
    this.cloudC = c;
  }
 show() {
   fill(255, 227, 248);
 ellipse(this.cloudX,this.cloudY,60);
  ellipse(this.cloudX-50,this.cloudY,60);
   ellipse(this.cloudX+50,this.cloudY,60);
   rect(this.cloudX,this.cloudY+20,115,20);
 }
  move() {
    this.cloudY += 2;

    if (this.cloudY > height) {
      this.cloudY = 0;
    }
  }
  checkCollision() {
    if ((this.cloudX > ana1.anaX - 25) && (this.cloudX < ana1.anaX + 25) && (this.cloudY > ana1.anaY - 15) && (this.cloudY < ana1.anaY + 15)) {
      ana1.anaY = height - 10;
        } }}
 class Train {
  
  constructor(x, y, c) {
    this.trainX = x;
    this.trainY = y;
    this.trainC = c;
  }
 
  move() {
    this.trainX += 1;

    if (this.trainX > width) {
      this.trainX = 0;
    }
  }
   show() {
    fill(this.trainC);
    rect(this.trainX, this.trainY, 790, 70);
  }

  checkCollision() {
    if ((this.trainX > ana1.anaX - 25) && (this.trainX < ana1.anaX + 25) && (this.trainY > ana1.anaY - 15) && (this.trainY < ana1.anaY + 15)) {
      ana1.anaY = height - 10;
    }
  }

}
 class Stair{
   
  constructor(x, y, c) {
    this.stairX = x;
    this.stairY = y;
    this.stairC = c;
  }
    show() {
//    fill(168, 55, 7);
//   rect(150,260,40,10);
//   rect(140,245,40,10);
//   rect(130,230,40,10);
//   rect(160,275,40,10); 
//   rect(120,215,40,10);
      
//   rect(150,295,40,10);
//   rect(140,245,40,10);
//   rect(130,230,40,10);
//   //rect(160,275,40,10); 
//   rect(120,215,40,10);
      fill(56, 57, 61);
       
      rect(360,200,5,510);
      rect(390,200,5,510);
      
      rect(250,180,5,510);
      rect(280,180,5,510);
      
      rect(200,200,5,510);
      rect(170,200,5,510);
      
      rect(90,200,5,510);
      rect(120,200,5,510);
 }

  move() {
    this.stairX += 1;

    if (this.stairX > width) {
      this.stairX = 0;
    }
  }
  checkCollision() {
    if ((this.stairX > ana1.anaX - 25) && (this.stairX < ana1.anaX + 25) && (this.stairY > ana1.anaY - 15) && (this.stairY < ana1.anaY + 15)) {
      ana1.anaY = height - 10;
        } }}
 class Planet{
   
  constructor(x, y, c) {
    this.planetX = x;
    this.planetY = y;
    this.planetC = c;
  }
    show() {
   fill(255,0,0);
 ellipse(20,20,20);
 }

  move() {
    this.planetX += 1;

    if (this.planetX > width) {
      this.planetX = 0;
    }
  }
  checkCollision() {
    if ((this.planetX > ana1.anaX - 25) && (this.planetX < ana1.anaX + 25) && (this.planetY > ana1.anaY - 15) && (this.planetY < ana1.anaY + 15)) {
      ana1.anaY = height - 10;
        } }
 }

class Ana {

  constructor(x, y) {
    this.anaX = x;
    this.anaY = y;
  }

  show() {
    fill(68, 183, 189);
    // ellipse(310,350,90,20);
    // triangle(300,350,340,360,250,380);
    // triangle(350,350,330,360,380,380);
    ellipse(this.anaX, this.anaY, 30, 30);
  }
}

class Marolyn {

  constructor(x, y) {
    this.marolynX = 70;
    this.marolynY = 300;
    //this.ghostX = 70;
    //this.ghostY = 300;
  }

  ghost() {
    
    fill(240, 246, 250);
    //ellipse(this.marolynX, this.marolynY, 30, 30);
    ellipse(this.marolynX+5,this.marolynY+50,25,60);
    rect(this.marolynX+5,this.marolynY+68,26,22);
    fill(197, 204, 209);
    ellipse(this.marolynX+10,this.marolynY+33,5,5);
    ellipse(this.marolynX,this.marolynY+33,5,5);
  }
  planet() {
    fill(242, 184, 207);
    ellipse(this.marolynX,this.marolynY,25,60);
  }
  moon() {
    fill(162, 232, 225);
    ellipse(this.marolynX+5,this.marolynY+50,25,60);
  }
  
  move() {
  
  }
}

class Vera {

  constructor(x, y) {
    this.veraX = x;
    this.veraY = y;
  }

  show() { 
    stroke(0);
    fill(39, 34, 107);
    triangle(550,70,570,130,540,130);
    //fill(230, 78, 32);
    //triangle(550,70,570,100,540,100);
   
     fill(39, 34, 107);
    //fill(230, 78, 32);
    //triangle(550,70,570,100,540,100);
    triangle(550,70,570,90,540,90);
    fill(227, 173, 157);
    ellipse(this.veraX,this.veraY,13);
    //ellipse(552,85,13);
     fill(39, 34, 107);
    //ellipse(this.veraX, this.veraY, 130, 30);
    fill(194, 19, 48);
    rect(552,110,5,37);
  }
    //shadow
    shadow(w,h,g) {
    noStroke();
    fill(106, 98, 130,120);
    
    push();  
    translate(width/2,height/2);
    scale(g);
      
    triangle(560,60,580,80,550,80);
    triangle(560,60,580,120,560,120);
    ellipse(0,0,w,h); 
    pop ();  
  }
  
    checkCollision() {
  if (this.veraX>ana1.anaX-25 && this.veraX < ana1.anaX +25 && this.anaY>ana1.anaY-15 && this.veraY <ana1.anaY+15) {
  fill(0);
  text('Winner!', width / 2, height /2);
  }
    
  }
}
class Trap {
  constructor(x,y){
    this.trapX=x;
    this.trapY=y;
  }
show() {  
  fill(39, 34, 107);
    ellipse(this.veraX, this.veraY, 130, 30);}
  
}
// class MPlanet{
// constructor(x,y) {
// this.mplanetX=x;
// this.mplanetY=y;  
// }
// }