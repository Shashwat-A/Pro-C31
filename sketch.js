const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bound1, bound2, ground;
var plinko = [];
var division = [];
var particle = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //making the ground
  ground = new Ground(240, 795, 480, 20);

  //making the boundries of the canvas
  bound1 = new Ground(0,400, 10, 800);
  bound2 = new Ground(480,400, 10, 800);

  // MAKING THE PLINKOS - top row
  for(var j = 40; j <= width; j=j+50) {
    plinko.push(new Plinko(j, 75))
  }

  // MAKING THE PLINKOS - second row
  for(var j = 40; j <= width; j=j+45) {
    plinko.push(new Plinko(j, 175))
  }

  // MAKING THE PLINKOS - second last row
  for(var j = 40; j <= width; j=j+50) {
    plinko.push(new Plinko(j, 275))
  }

  //MAKING THE PLININKOS - last row
  for(var j = 40; j <= width; j=j+45) {
    plinko.push(new Plinko(j, 375))
  }

  //making the divisions
  for(var k = 80; k < width; k= k + 80) {
    division.push(new Division(k, 700, 10, 300))
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  // ground 
  ground.display();

  //boundries
  bound1.display();
  bound2.display();

  console.log(frameCount);

  //First Plinko Row
  for(var j = 0; j < plinko.length; j++) {
    plinko[j].display();
  }

  for(var j = 0; j < plinko.length; j++) {
    plinko[j].display();
  }

  for(var j = 0; j < plinko.length; j++) {
    plinko[j].display();
  }

  for(var j = 0; j < plinko.length; j++) {
    plinko[j].display();
  }

  for(var j = 0; j < division.length; j++) {
    division[j].display();
  }

  // making the particles falling from top in equal intervals
  if(frameCount % 60 === 0) {
    particle.push(new Particle(random(width/2 - 10, width/2 + 10), 10))
  }

  for(var j = 0; j < particle.length; j++) {
    particle[j].display();
  } 
  
}