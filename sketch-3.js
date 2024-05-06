let bg = '#f3f5f7';
let fg = '#000000';

function setup(){
  createCanvas(800, 800)
  frameRate(10)
}

function draw() {
  background(bg);

  let tiles = 80;
  let step = 360 / tiles;
  fill(255, 0, 0);
  push();
  translate(width/2, height/2);
  noStroke();
  strokeWeight(20);
  noFill();

  for (let i = 0; i < tiles; i++) {
    fill(20, 20, 20); 

    push();
    rotate(radians(i*step * mouseX/10));
    translate(i*3, 0);
    rect(0, 0, 35, 35);
    pop();
  }
  pop();
}