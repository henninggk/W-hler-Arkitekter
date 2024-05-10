let avstand = 3
let antall = 80

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  
  slider = createSlider(0, 255);
  slider.position(10, 600);
  slider.size(580);
  
  let button = createButton('EKSPORTER');
  button.position(10, 630);
  button.style('font-size', '25px');
  button.style('font-family', 'manrope');
  button.style('font-weight', '800');
  button.style('background-color', 'rgb(20, 20, 20');
  button.style('color', 'rgb(250, 250, 250');
  button.style('border-radius', '0px');
  button.style('padding', '8px 12px 8px 12px');
  button.style('border', 'none');
  button.style('cursor', 'pointer');

  
  button.mousePressed(eksporter);
}

function draw() {
  
  let g = slider.value();
  
  fill(20);
  noStroke();
  rectMode(CENTER)
  translate(width/2, height/2)
  
  push()
  clear()
  for (let i=0; i<antall; i++){
    rect(i*avstand, 10, 35, 35);
    rotate(radians(10*g/10));
  }
  pop()
}


function eksporter() { 
    save("MinWøhlerLogo.png"); 
    print("saved png");
    noLoop(); // we just want to export once
}
