let avstand = 3;
let antall = 80;
let scaleFactor;

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  scaleFactor = width / 1600; // Skaleringsfaktor basert på standard canvas bredde (800)
}

function draw() {
  fill(0);
  noStroke();
  rectMode(CENTER);
  translate(width/2, height/2);
 
  push();
  clear();
  for (let i = 0; i < antall; i++){
    rect(i * avstand * scaleFactor, 10 * scaleFactor, 35 * scaleFactor, 35 * scaleFactor);
    rotate(radians(10 * mouseX / 10));
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = width / 800; // Oppdaterer skaleringsfaktoren når vindustørrelsen endres
}
