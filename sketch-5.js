let avstand = 3
let antall = 80

function setup(){
  createCanvas(800, 800)
  frameRate(10)
}

function draw() {
  fill(0);
  noStroke();
  rectMode(CENTER)
  translate(width/2, height/2)
 
  push()
  clear()
  for (let i=0; i<antall; i++){
    
    rect(i*avstand, 10, 35, 35);
    rotate(radians(10*mouseX/10));
  }
  pop()
}