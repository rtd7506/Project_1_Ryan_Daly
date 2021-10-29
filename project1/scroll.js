class Scroll 
{
    constructor(x_) 
    {
        this.scale = 100;
        this.x = x_;
        this.yScroll = 225;
        this.yInit = [-75, 75, 225, 375, 525, 675]
    }

    display() {
        //target(this.x-scale*1.5,225,scale,color(255,0,0));

        //target(this.x+scale*1.5,225,scale,color(255,0,0));

        //this.box(this.x,275,scale);
        //this.pent(this.x,350,scale);

        for (let j = 0; j < 2; j++) 
        {
            for (let i = 0; i < 6; i++) 
            {
                this.drawShape(this.x, this.yInit[i], this.scale, i);
                this.yInit[i] += 3
                if (this.yInit[i] > 675) 
                {
                    this.yInit[i] = -75;
                }
            }
        }


        //this.drawShape(this.x,this.yScroll+this.scale*1.5*0,this.scale,0);
        //target(this.x,this.yScroll,scale,color(255,0,0));
        //this.tri(this.x,this.yScroll+scale*1.5,scale*2/3);
        //this.hex(this.x,this.yScroll-scale*1.5,scale*2/3);
        //this.yScroll+=1;
        //if (this.yScroll>450+scale)
        //{
        //    this.yScroll = -scale;
        //}
    }

    drawShape(x, y, scale, type) 
    {
        switch (type) 
        {
            case 0:
                target(x, y, scale, color(255, 0, 0));
                //console.log(this.yInit);
                break;
            case 1:
                this.tri(x, y, scale * 2 / 3);
                break;
            case 2:
                this.box(x, y, scale * 2 / 3);
                break;
            case 3:
                this.pent(x, y, scale * 2 / 3);
                break;
            case 4:
                this.hex(x, y, scale * 2 / 3);
                break;

        }
    }

    tri(x, y, scale) 
    {
        fill(255, 255, 0);
        triangle(x, y - scale / 2, x + scale / 2, y + scale / 2, x - scale / 2, y + scale / 2);
    }

    box(x, y, scale) 
    {
        rectMode(CENTER);
        fill(0, 255, 0);
        rect(x, y, scale, scale);
    }

    pent(x, y, scale) 
    {
        fill(0, 255, 255);
        beginShape();
        for (let i = 0; i < TWO_PI; i += TWO_PI / 5) {
            let sx = x + cos(i - HALF_PI) * scale * 2 / 3;
            let sy = y + sin(i - HALF_PI) * scale * 2 / 3;
            vertex(sx, sy);
            //console.log(cos(TWO_PI/5)*scale*i);
        }
        endShape();
    }

    hex(x, y, scale) 
    {
        fill(255, 0, 255);
        beginShape();
        for (let i = 0; i < TWO_PI; i += TWO_PI / 6) {
            let sx = x + cos(i) * scale * 2 / 3;
            let sy = y + sin(i) * scale * 2 / 3;
            vertex(sx, sy);
            //console.log(cos(TWO_PI/5)*scale*i);
        }
        endShape();
    }
}