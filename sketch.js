//var farm;

var rabbit;
var rabbitImage;

function preload(){
  rabbitImage = loadImage("Rabbit.png"); 
  //farm = loadImage("farm.jpg");

}

function setup() {
  createCanvas(600, 600);

  rabbit = createSprite(180,340,30,30);
  //rabbit.scale =0.09;
  rabbit.addImage(rabbitImage);
}

function draw() {
  //background (farm);
  background(34,139,34);
 // background(farmImage);
  for (let i = 0; i < allSprites.length; i++) {
    // gravity
    allSprites[i].addSpeed(0.1, 90);
    if (allSprites[i].position.y > height) {
      allSprites[i].velocity.y *= -1;
    }
    // any code that removes sprites should be
    // the *last* thing in the loop!
    if (allSprites[i].position.x > width ||
        allSprites[i].position.x < 0) {
      allSprites[i].remove();
    }
  }
  textAlign(RIGHT, TOP);
  text("rabbit count: " + allSprites.length,
    width-10, 10);
  drawSprites();
}
// function mousePressed() {
//   let spr = createSprite(width/2, height/2,
//     random(10, 50), random(10, 50));
//   spr.shapeColor = color(0);
//   spr.velocity.y = random(3);
//   spr.velocity.x = random(-3, 3);
//   spr.position.x = mouseX;
//   spr.position.y = mouseY;
// }


function mousePressed() {
  let rabbit = createSprite(width/2, height/2,
    random(10, 50), random(10, 50));
  
  rabbit.addImage(rabbitImage);
  
  // spr.shapeColor = color(0);
  rabbit.velocity.y = random(5);
  rabbit.velocity.x = random(-5, 5);
  rabbit.position.x = mouseX;
  rabbit.position.y = mouseY;
}
