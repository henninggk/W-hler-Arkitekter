
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('#f1f1f1');
    fill(0);
    noStroke();
    translate(width/2, height/2);
    rect(mouseX,mouseY,20,20);
  }