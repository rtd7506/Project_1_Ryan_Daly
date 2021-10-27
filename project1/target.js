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