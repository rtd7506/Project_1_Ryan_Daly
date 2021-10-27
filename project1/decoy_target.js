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