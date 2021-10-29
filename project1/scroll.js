class Scroll
{
    constructor(x_)
    {
        scale = 100;
        this.x = x_;
    }

    display()
    {
        target(this.x-scale*1.5,225,scale,color(255,0,0));
        target(this.x,225,scale,color(255,0,0));
        target(this.x+scale*1.5,225,scale,color(255,0,0));
        this.tri(this.x,225+scale*1.5,scale*2/3);
        //this.box(this.x,275,scale);
        //this.pent(this.x,350,scale);
        this.hex(this.x,225-scale*1.5,scale*2/3);
    }

    tri(x,y,scale)
    {
        fill(255,255,0);
        triangle(x,y-scale/2,x+scale/2,y+scale/2,x-scale/2,y+scale/2);
    }

    box(x,y,scale)
    {
        rectMode(CENTER);
        fill(0,255,0);
        rect(x,y,scale,scale);
    }

    pent(x,y,scale)
    {
        fill(0,255,255);
        beginShape();
        for (let i=0; i<TWO_PI; i+=TWO_PI/5)
        {
            let sx = x + cos(i-HALF_PI) * scale*2/3;
            let sy = y + sin(i-HALF_PI) * scale*2/3;
            vertex(sx,sy);
            //console.log(cos(TWO_PI/5)*scale*i);
        }
        endShape();
    }

    hex(x,y,scale)
    {
        fill(255,0,255);
        beginShape();
        for (let i=0; i<TWO_PI; i+=TWO_PI/6)
        {
            let sx = x + cos(i) * scale*2/3;
            let sy = y + sin(i) * scale*2/3;
            vertex(sx,sy);
            //console.log(cos(TWO_PI/5)*scale*i);
        }
        endShape();
    }
}