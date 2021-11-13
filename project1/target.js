class Target2
{
  constructor()
  {
    this.position = createVector(width/2, height/2); //Got the new movement script from week 10 code
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
  }

  update()
  {
    let mouse = createVector(mouseX, mouseY);
    if (dist(mouse.x, mouse.y, this.position.x,this.position.y) < 100)
    {
      this.acceleration = p5.Vector.sub(mouse,this.position);
      this.acceleration.setMag(-1);
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);

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
  }

  display()
  {
    target(this.position.x, this.position.y,50,color(255,0,0));
  }

  spawnDecoys()
  {
    append(decoys, new Decoy_target(this.position,50,this.velocity,decoys.length));
  }

}