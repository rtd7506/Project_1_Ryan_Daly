class Door
{
    constructor(dir_,scroll_)
    {
        this.dir = dir_;
        this.scroll = scroll_;
    }

    display()
    {
        strokeWeight(5);
        stroke(0);
        fill(200,200,100);
        let ds = this.scroll;
        let width = ds / 2;
        let x1 = ds;
        let x2 = ds + width;
        let y1 = ds * 9 / 16;
        let y2 = (ds + width) * 9 / 16;
        quad(400 + x1*this.dir, 225 + y1, 400 + x2*this.dir, 225 + y2, 400 + x2*this.dir, 225 - y2, 400 + x1*this.dir, 225 - y1);
    }

    iterate()
    {
        
        this.scroll+=this.scroll/200;
        console.log(this.scroll);
        if (this.scroll > 400)
        {
            this.scroll = 1;
        }
    }
}