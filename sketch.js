const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var score = 0;
function preload(){
  polygon_img=loadImage("pigpolygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
 
  //nivel uno
  block1 = new Block(400,275,30,40);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //nivel dos
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //nivel tres
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //parte superior
  block16 = new Block(490,155,30,40);



  //soporte poligonal con la resortera
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(50,100,250); 
 
  //Engine.update(motor);
 
  textSize(20);
  fill("lightyellow");
  text("Puntuacion : "+ score, 650, 150);
  text("PIG REVENGE 2!!!",360,30);
  text("Usa el cerdo para derribar a las aves",300,50);
  textSize(15);
  text("Presiona  la tecla P para volver a jugar",600 ,250);
  ground.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block13.score();
  block14.score();
  block15.score();
  fill("grey");
  block16.display();
  block16.score();
  fill("skyblue");
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 80){
      slingShot.attach(this.polygon);
  }
}
