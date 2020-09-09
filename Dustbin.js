class Dustbin{
    constructor(){
        this.Bottombody = Bodies.rectangle(700,670,170,20,{isStatic:true});
        this.Rightbody = Bodies.rectangle(780,630,15,100,{isStatic:true});
        this.Leftbody = Bodies.rectangle(610,630,15,100,{isStatic:true});
        World.add(world,  this.Bottombody);
        World.add(world,this.Rightbody);
        World.add(world,this.Leftbody);
    }
    
    display() {
        var pos1 =   this.Bottombody.position;
        var pos2 =   this.Rightbody.position;
        var pos3 =   this.Leftbody.position;
        fill("yellow");
        rectMode(CENTER);
        rect(pos1.x,pos1.y, 170,20);
        rect(pos2.x,pos2.y, 15,100);
        rect(pos3.x,pos3.y, 15,100);
    }
}