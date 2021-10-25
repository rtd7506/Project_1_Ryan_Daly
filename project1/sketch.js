// then make an array
// limit array size
// limit speed

let tx, ty;
let target2;
let dt1;

function setup() {
  createCanvas(800, 450);
  background(0);
  tx = 400;
  ty = 225;
  target_main = new Target2(400,225,100);
  dt1 = new Decoy_target(200,200,100);
}

function target(x,y,size)
{
  noStroke();
  fill(255,0,0);
  ellipse(x,y,size,size);
  fill(255);
  ellipse(x,y,size*2/3,size*2/3);
  fill(255,0,0);
  ellipse(x,y,size/3,size/3);
}

function draw() 
{
  //target(400,225,50);
  background(0);
  target_main.display();
  target_main.bounce();
  dt1.display();
  dt1.bounce();
  
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
    target(this.x,this.y,this.size,this.size);
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
  }

  display()
  {
    target(this.x,this.y,this.size,this.size);
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

    if (dist(this.x,this.y,target_main.x,target_main.y) < this.size)
    {
      let temp = this.velocity;
      this.velocity = target_main.velocity;
      target_main.velocity = temp;

    }
  }
}