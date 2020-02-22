var box1,box2,box4,box5,box6,box7,box8,box3;
var brick1,brick2,brick3,brick4,brick5,brick6;
var cube1,cube2,cube3;
var top1;


function setup() {
  createCanvas(800,400);
  var options={
    'stroke':10,
    'strokeWeight':4

  }
  var box1=new box(100,400,options);
  var box3=new box(200,400,options);
  var box4=new box(300,400,options);
  var box5=new box(400,400,options);
  var box6=new box(500,400,options);
  var box7=new box(600,400,options);
  var box8=new box(700,400,options);
  var box2=new box(800,400,options);
  
  var brick1=new box(600,300,options);
  var brick2=new box(500,300,options);
  var brick3=new box(400,300,options);
  var brick4=new box(300,300,options);
  var brick5=new box(200,300,options);
  var brick6=createSprite(650,300,0.5,100);


  var cube1=new box(200,200,options);
  var cube2=new box(400,200,options);
  var cube3=new box(600,200,options);
}

function draw() {
  background(255,255,255);

  

 
  drawSprites();
}
/*The great wall of Kannan
The great wall of Kannan is a massive castle-like structure in New Kannan city. This monument dates back to the Kannan Dynasty Era(1556-1795CE)
,where it was built by Kannan the great 2.0(1575-1567CE).
It is said that it was bulit for protection, however recent studies say that the castle was originally a pyramid but it became a castle for an unknown reason
Here are some possible outcomes:
-The building was never finished
-It was destroyed by foriegn powers
-It was destroyed by eniemies; The Kannan Dynasty did have lot of eniemies
-It was built by mistake by a amateur coder from the future trying to build a pyramid on p5 editor/VCS studio
credits to:Kannan R Vaibhav*/ 