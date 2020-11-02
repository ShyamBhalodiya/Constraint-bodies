class sphere{
    constructor(x,y,width){
        var option ={
            isStatic : false,
            mass : 100
        }
        this.body = Bodies.circle(x,y,width,option);
        this.radius = width;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        ellipseMode(CENTER);
        translate(pos.x,pos.y);
        fill(150,255,100);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}