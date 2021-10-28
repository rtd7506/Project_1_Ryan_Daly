// then make an array
// limit array size
// limit speed

let tx, ty;
let target2;
let decoys = [];
let fadeTimer = 0;
let transition = false;
let t2 = false;
let changeTimer = 0;
let stageCount = 0;

function setup() 
{
  createCanvas(800, 450);
  background(0);
  tx = 400;
  ty = 225;
  target_main = new Target2(400,225,50);
  spawnDecoys(stageCount);
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
  target_main.display();
  
  for (let i=0; i<decoys.length; i++)
  {
    decoys[i].display();
  }
  

  if (dist(touchX,touchY,target_main.x,target_main.y)<75)
  {
    console.log("GET AWAY FROM ME YOU HEATHEN!");
    transition = true;
    //fadeOut();
  }
  if (transition == true || changeTimer > 300)
  {
    fadeOut();
    
  }
  else
  {
    if (stageCount > 0)
    {
      target_main.bounce();
    }
    for (let i=0; i<decoys.length; i++)
    {
      decoys[i].bounce();
    }
    t2=false;
    changeTimer+=1;
    console.log(changeTimer);
  }
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
    console.log(map((fadeTimer-1600),0,850,255,0));
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


function mousePressed()
{

}


