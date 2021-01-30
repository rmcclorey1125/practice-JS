const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

// Engine - current state to new state
// Render - draw in screen
// Runner - coordinate updates between engine and world
// Bodies - all the shapes
const width = 800;
const height = 600;

const engine = Engine.create();
// engine creates world
const { world } = engine;
const render = Render.create({
    element: document.body,
    //render into body the element created is a canvas element 
    engine: engine,
    //what engine to use
    options: {
        wireframes: false, 
        width: width,
        height: height
    }
    // width and height of canvas created
});

Render.run(render);

Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));

// Walls
const walls = [
    Bodies.rectangle(400, 0, 800, 40, {isStatic: true}),
    Bodies.rectangle(400, 600, 800, 40, {isStatic: true}),
    Bodies.rectangle(0, 300, 40, 600, {isStatic: true}),
    Bodies.rectangle(800, 300, 40, 600, {isStatic: true})
];

World.add(world, walls)

//200 is position x and y axis of center
//50 is width and height
//used bodies to create a shape (rectangle)
//defaulted with gravity


// need to add to world

// Random Shapes
for(let i = 0; i < 10; i++) {
    if (Math.random() > 0.5){
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 100, 100))
    } else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 40))

    }
}