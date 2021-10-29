// then make an array
// limit array size
// limit speed

//General
let screen = 2;
let tTimer = 0;
//Screen1
let tx, ty;
let target2;
let decoys = [];
let fadeTimer = 0;
let transition = false;
let t2 = false;
let changeTimer = 0;
let stageCount = 0;
//Screen2
let scrolls = [];
let scrollTimer = 0;
let scrollCount = 0;


function setup() 
{
  createCanvas(800, 450);
  background(0);
  tx = 400;
  ty = 225;
  //Screen1
  target_main = new Target2(400,225,50);
  for (let j = 0; j < 3; j++) 
  {
    append(scrolls, new Scroll(100+j*150))
  }
  spawnDecoys(stageCount);
  steps = [30*2,30*(int(random(1,5))+5),30*(int(random(1,5)+10))]
  scrollRand();
  //steps = [30,180,330];
}

function target(x,y,size,color)
{
  noStroke();
  fill(color);
  //console.log(color);
  ellipse(x,y,size,size);
  fill(255);
  ellipse(x,y,size*2/3,size*2/3);
  fill(color);
  ellipse(x,y,size/3,size/3);

}
function draw() 
{
  background(0);
  if (screen == 0)
  {
    target_main.display();
    for (let i = 0; i < decoys.length; i++) {
      decoys[i].display();
    }
    if (dist(touchX, touchY, target_main.x, target_main.y) < 75) {
      //console.log("GET AWAY FROM ME YOU HEATHEN!");
      transition = true;
      //fadeOut();
    }
    if (transition == true || changeTimer > 300) {
      fadeOut();
    }
    else {
      if (stageCount > 0) {
        target_main.bounce();
      }
      for (let i = 0; i < decoys.length; i++) {
        decoys[i].bounce();
      }
      t2=false;
      changeTimer+=1;
      //console.log(changeTimer);
    }
  }
  else if (screen == 1)
  {
    scrollUI();
    //Scroll Timer
    if (steps[2] < 0)
    {
      scrollTimer+=1;
    }
    else
    {
      scrollTimer = 0;
    }
    if (scrollTimer > 300)
    {
      scrollRand();
    }
    
    //Scroll
    for (let j = 0; j < 3; j++) 
    {
      scrolls[j].display();
      if (steps[j] >= 0)
      {
        steps[j]-=1;
        scrolls[j].scroll();
      }
    }

    if (scrollCount > 7)
    {
      screenChange(450,225);
    }
  }
  else if (screen == 2)
  {
    //Still Elements
    strokeWeight(10);
    stroke(0);
    fill(255,255,200);
    triangle(0,0,400,225,0,450);
    triangle(800,0,400,225,800,450);
    fill(200,200,150);
    triangle(0,0,400,225,800,0);
    fill(100,100,50);
    triangle(0,450,400,225,800,450);
    //fill(50,50,0);
    //noStroke();
    //ellipse(400,285,100,50)
    target(400,225,75,color(255,0,0));
    
  }
}

function scrollUI()
{
  //UI
  //Button
  strokeWeight(10);
  if (steps[2] > 0) 
  {
    fill(150);
    stroke(100);
    rect(625, 350, 225, 90);
  }
  else 
  {
    fill(200);
    stroke(150);
    rect(625, 350, 250, 100);
  }
  textSize(32);
  if (steps[2] < 0) 
  {
    fill(255);
    stroke(150);
    strokeWeight(10);
    textAlign(CENTER, CENTER);
    text("Click to Spin!", 625, 350);
  }
  //Info Box
  stroke(150);
  fill(200);
  rect(625, 150, 225, 225)
  fill(255);
  stroke(150);
  textAlign(CENTER, CENTER);
  textSize(40);
  strokeWeight(10);
  text("Get Three", 625, 75);
  //strokeWeight(0);
  text("To Win!", 625, 225);
  noStroke();
  fill(200);
  rect(625, 185, 40, 35);
  rect(625, 249, 40, 17);
  textSize(42);
  //Overlay
  fill(200, 75);
  noStroke();
  rect(250, 225, 425, 125);
  //Example Target
  fill(150);
  ellipse(625, 145, 90, 90);
  if (dist(touchX, touchY, 625, 145) < 75) 
  {
    textSize(30);
    fill(255);
    stroke(150);
    text("No!", 625,145)
  }
  else
  {
    target(625,145,75,color(255,0,0));
  }
}

function screenChange(x,y)
{
  tTimer+=40;
  fill(255);
  noStroke();
  if (tTimer>1600)
  {
    fill(255,map((tTimer-1600),0,850,255,0));
    
  }
  if (tTimer == 1640)
  {
    screen+=1;
    console.log(screen);
  }
  if (tTimer>2400)
  {
    tTimer = 0;
    
  }
  ellipse(x,y, tTimer,tTimer);
}

function spawnDecoys(count)
{
  for (let i=0; i<count; i++)
  {
    let sx = 0;
    let sy = 0;
    let clear = false;
    while (clear == false)
    {
      let temp = true // temp variable to store whether to stop the loop
      sx = random(25,775); //spawn x and y
      sy = random(25,425);
      for (let j=0; j<decoys.length; j++)
      {
        if (dist(sx,sy,decoys[j].x,decoys[j].y) < 50 || dist(sx,sy,target_main.x,target_main.y) < 50)
        {
          temp = false;
          //break; //APPARENTLY BREAK DOESNT EXIST IN P5JS
        }
        //console.log());
      }
      clear = temp;
    }
    append(decoys, new Decoy_target(sx, sy,50));
  }
}

function fadeOut()
{
  
  fadeTimer+=40;
  fill(255);
  noStroke();
  if (fadeTimer>1600)
  {
    if (t2 == false)
    {
      decoys = [];
      target_main.x = random(25,775);
      target_main.y = random(25,425);
      stageCount+=1;
      spawnDecoys(stageCount*2);
      t2 = true;
    }
    fill(255,map((fadeTimer-1600),0,850,255,0));
    //console.log(map((fadeTimer-1600),0,850,255,0));
  }
  if (fadeTimer == 1600 && stageCount >7)
  {
    screen+=1;
  }
  if (fadeTimer>2400)
  {
    fadeTimer = 0;
    transition = false;
    changeTimer = 0;
  }
  ellipse(target_main.x,target_main.y, fadeTimer,fadeTimer);
}

function test1()
{
  if(dist(tx,ty,touchX,touchY) < 100)
  {
    tx-=(touchX-tx)/10;
    ty-=(touchY-ty)/10;
    if (tx<0 || tx>800 || ty<0 || ty>450)
    {
      tx=400;
      ty=225;
    }
  }
  background(0);
  ellipse(tx,ty,50,50);
}

function scrollRand()
{
  scrollCount+=1;
  console.log(scrollCount);
  let test = int(random(0,6));
  let currOrder = [0,0,0];
  let desOrder = [2,1,1];
  for (let i=0; i<3; i++)
  {
    currOrder[i] = int((scrolls[i].yInit[0]+75)/150);
  }
  //console.log(test);
  switch(test)
  {
    case 0:
      desOrder = [2,1,1];
      break;
    case 1:
      desOrder = [0,1,1];
      break;
    case 2:
      desOrder = [1,2,1];
      break;
    case 3:
      desOrder = [1,0,1];
      break;
    case 4:
      desOrder = [1,1,0];
      break;
    case 5:
      desOrder = [1,1,2];
      break;
      
  }
  for (let j=0; j<3; j++)
  {
    steps[j] = (6-currOrder[j]+desOrder[j])*15+j*150-1;//+j*225; // change *15 in tandem with the speed of the scroll // the -1 at the end stops it from offsetting every cycle
    //console.log((6-currOrder[j]+desOrder[j])*30); 
  }
}

function touchStarted()
{
  //console.log(steps);
  if (screen == 1 && steps[2] == -1)
  {
    scrollRand();
  }
}


