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

  deflect()
  {
    if (dist(mouseX,mouseY,this.x,this.y)<100)
    {
      /*
      this.tempX = map(this.x-mouseX,-100,100,1,-1);
      this.tempY = map(this.y-mouseY,-100,100,1,-1);
      console.log(1/(this.x-mouseX));//this.tempX);
      this.velocity.x += 1/(this.x-mouseX);
      this.velocity.y += 1/(this.y-mouseY);
      */
      this.tempV = createVector((mouseX-this.x)/100,(mouseY-this.y)/100);
      //console.log(this.velocity);
      //this.x-=(mouseX-this.x)/10;
      //this.y-=(mouseY-this.y)/10;
      this.velocity.sub(this.tempV);
      //this.velocity.normalize();
    }
  }

  display()
  {
    target(this.x,this.y,this.size,color(255,0,0));
    this.x += this.velocity.x*2.5;
    this.y += this.velocity.y*2.5;
    this.velocity.x = this.velocity.x *.99;
    this.velocity.y = this.velocity.y *.99;
  }

  bounce() //bouncy ball behavior
  {
    
    
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