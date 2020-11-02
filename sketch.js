const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var world, engine;

function setup() {
    var canvas = createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;

    Roof = new roof(250, 50, 200, 20);
    sphere1 = new sphere(250, 75, 50);
    sphere2 = new sphere(250, 90, 50);
    sphere3 = new sphere(250, 105, 50);
    sphere4 = new sphere(250, 120, 50);
    sphere5 = new sphere(250, 135, 50);
    constraint1 = new chain(Roof.body, sphere1.body);
    constraint2 = new chain(sphere1.body, sphere2.body);
    constraint3 = new chain(sphere2.body, sphere3.body);
    constraint4 = new chain(sphere3.body, sphere4.body);
    constraint5 = new chain(sphere4.body, sphere5.body);

    const mousey = Mouse.create(canvas.elt);
    mousey.pixelRatio = pixelDensity();
    var option = {
        mouse: mousey
    }
    mousec = MouseConstraint.create(engine, option);
    World.add(world, mousec);

    Engine.run(engine);
}
function draw() {
    background(0);
    Roof.display();
    sphere1.display();
    sphere2.display();
    sphere3.display();
    sphere4.display();
    sphere5.display();
    
    constraint1.display();
    constraint2.display();
    constraint3.display();
    constraint4.display();
    constraint5.display();

}