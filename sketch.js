  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var Engine = Matter.Engine
var particle;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var particles=[];
var turn=0;
var score =0;
var count=0;
var gamestate="PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");

  Engine.update(engine);
  textSize(20)
 text("Score : "+score,20,30);
   textSize(35);
   text("500",5,550);
   text("500",85,550);
   text("500",165,550);
   text("500",245,550);
   text("100",327,550);
   text("100",407,550);
   text("100",487,550);
   text("200",565,550);
   text("200",645,550);
   text("200",725,550);
   ground.display();

   if (gamestate =="END"){
     fill("lime");
     textSize(100);
     text("GAME OVER",200,400);
   }
   
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
      
     if(particle!=null){
       particle.display();
     }
     if(particle.position.y>700){
       if(particle.body.position.x<300){
         score=score+500;
         particle=null;
         if(count>=5)
         {gamestate="END";}
       }
     }
     else if(particle.body.position.x<600 && particle.body.position.x >301){
         score=score+100;
         particles=null;
         if(count>=5){gamestate="END";
     }
     }
     else if(particle.body.position.x<900 && particle.body.position.x >601){
      score=score+200;
      particles=null;
      if(count>=5){gamestate="END";}
     }
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gamestate!=="end"){
    count++;
    particle=new Particle(mouseX,10,10);
  }
}