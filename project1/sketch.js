// then make an array
// limit array size
// limit speed

let tx, ty;
let target2;
let decoys = [];

function setup() {
  createCanvas(800, 450);
  background(0);
  tx = 400;
  ty = 225;
  target_main = new Target2(400,225,50);
  for (let i=0; i<10; i++)
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
  //target(400,225,50);
  background(0);
  target_main.display();
  target_main.bounce();
  for (let i=0; i<decoys.length; i++)
  {
    decoys[i].display();
    decoys[i].bounce();
  }
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

class Target2
{
  constructor(x_,y_,size_)
  {
    this.x = x_;
    this.y = y_;
    this.size = size_;
    this.velocity = createVector(random(-1,1),random(-1,1))
    this.velocity.normalize();
  }

  display()
  {
    target(this.x,this.y,this.size,color(255,0,0));
  }

  bounce() //bouncy ball behavior
  {
    this.x += this.velocity.x*2.5;
    this.y += this.velocity.y*2.5;
    
    if(this.x < this.size/2 || this.x > 800-this.size/2)
    {
      this.velocity.x = this.velocity.x*-1
    }
    if(this.y < this.size/2 || this.y > 450-this.size/2)
    {
      this.velocity.y = this.velocity.y*-1
    }
  }
}

class Decoy_target
{
  constructor(x_,y_,size_)
  {
    this.x = x_;
    this.y = y_;
    this.size = size_;
    this.velocity = createVector(random(-1,1),random(-1,1))
    this.velocity.normalize();
    this.color = color(random(0,255),random(0,255),random(0,255));
  }

  display()
  {
    target(this.x,this.y,this.size,this.color);
  }

  bounce() //bouncy ball behavior
  {
    this.x += this.velocity.x*2.5;
    this.y += this.velocity.y*2.5;
    
    if(this.x < this.size/2 || this.x > 800-this.size/2)
    {
      this.velocity.x = this.velocity.x*-1
    }
    if(this.y < this.size/2 || this.y > 450-this.size/2)
    {
      this.velocity.y = this.velocity.y*-1
    }

    for (let i=0; i<decoys.length; i++)
    {
      let d = dist(this.x,this.y,decoys[i].x,decoys[i].y);
      if (d < this.size && d != 0)
      {
        let temp = this.velocity;
        this.velocity = decoys[i].velocity;
        decoys[i].velocity = temp;
      }
    }
    
    if (dist(this.x,this.y,target_main.x,target_main.y) < this.size)
    {
      let temp = this.velocity;
      this.velocity = target_main.velocity;
      target_main.velocity = temp;

    }
    
  }
}