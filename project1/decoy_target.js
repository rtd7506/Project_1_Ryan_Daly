class Decoy_target
{
  constructor(pos_,size_,dir_,id_)
  {
    this.position = createVector(pos_.x,pos_.y);//pos_; 
    this.size = size_;
    this.velocity = createVector(dir_.x,dir_.y);
    //this.velocity.normalize();
    this.color = color(random(0,255),random(0,255),random(0,255));
    //this.id = id_; //this ,makes sure it doesn't collide with itself
  }

  display()
  {
    target(this.position.x,this.position.y,this.size,this.color);
  }

  bounce() //bouncy ball behavior
  {
    

    if (this.position.x > width+50)
    {
      this.position.x = -50;
    }
    if (this.position.x < -50)
    {
      this.position.x = width+50;
    }
    if (this.position.y > height+50)
    {
      this.position.y = -50;
    }
    if (this.position.y < -50)
    {
      this.position.y = height+50;
    }
    /*
    if(this.x < this.size/2 || this.x > 800-this.size/2)
    {
      this.velocity.x = this.velocity.x*-1
    }
    if(this.y < this.size/2 || this.y > 450-this.size/2)
    {
      this.velocity.y = this.velocity.y*-1
    }
    */
    
    for (let i=0; i<decoys.length; i++)
    {
      let d = dist(this.position.x,this.position.y,decoys[i].position.x,decoys[i].position.y);
      if (d < this.size && d != 0)
      {
        
        let temp = this.velocity;
        this.velocity = decoys[i].velocity;
        decoys[i].velocity = temp;
        

      }
      
      /*
      if (d < 10 && this.id != i)
      {
        target_main.acceleration.mult(-1);
        this.velocity.mult(-1);
        console.log("test");
      }
      */
    }
    
    
    
    this.velocity.limit(2.5);
    this.position.add(this.velocity);
    
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