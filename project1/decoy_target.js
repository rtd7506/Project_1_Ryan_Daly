class Decoy_target
{
  constructor(pos_,size_,dir_)
  {
    this.position = pos_; 
    this.size = size_;
    this.dir = dir_;
    
    this.velocity = this.dir;
    console.log(this.dir);
    //this.velocity.normalize();
    this.color = color(random(0,255),random(0,255),random(0,255));
  }

  display()
  {
    target(this.position.x,this.position.y,this.size,this.color);
  }

  bounce() //bouncy ball behavior
  {
    this.velocity.limit(5);
    this.position.add(this.velocity);
    /*
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
    */
    /*
    if (dist(this.x,this.y,target_main.x,target_main.y) < this.size)
    {
      let temp = this.velocity;
      this.velocity = target_main.velocity;
      target_main.velocity = temp;

    }
    */
    
  }
}