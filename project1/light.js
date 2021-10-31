class Light
{
    constructor(scroll_)
    {
        this.scroll = scroll_;
    }

    display()
    {
        strokeWeight(5);
        stroke(0);
        fill(242, 221, 126); //color to yellow
        let ls = this.scroll;
        let width = ls*1/5;
        let y1 = ls;
        let y2 = ls + width;
        let x1 = ls * 2/3;
        let x2 = (ls + width) * 2/3;
        quad(400 + x1, 225 - y1, 400 + x2, 225 - y2, 400 - x2, 225 - y2, 400 - x1, 225 - y1);
        
    }

    iterate(rate)
    {
        
        this.scroll+=this.scroll*rate/200;
        //console.log(this.scroll);
        if (this.scroll > 225)
        {
            this.scroll = 1;
        }
    }
}