class chain {
    constructor(bodyA, bodyB){
        var option ={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 100,
            stiffness : 0.1
        }
        this.body = Constraint.create(option);
        World.add(world,this.body);
    }
    display(){
        var bodya = this.body.bodyA.position;
        var bodyb = this.body.bodyB.position;
        push();
        stroke(75);
        line(bodya.x,bodya.y,bodyb.x,bodyb.y);
        pop();
    }
}