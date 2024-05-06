let bg = '#f3f5f7';
let fg = '20';
let canvasHeight;

function setup(){
  canvasHeight = windowHeight - 180;
  createCanvas(windowWidth, canvasHeight);
}

function draw() {
  background(bg);
  noStroke();
  fill(25);

  // Begrens musepekerens posisjon til å være innenfor canvaset
  let mouseX_constrained = constrain(mouseX, 0, width);
  let mouseY_constrained = constrain(mouseY, 0, height);

  let tilesX = max(mouseX_constrained / 30, 1); // Sjekk at det er minst én kolonne
  let tilesY = max(mouseY_constrained / 30, 1); // Sjekk at det er minst én rad

  let tileW = width / ceil(tilesX);
  let tileH = height / ceil(tilesY);
  translate(tileW/2, tileH/2);
  
  for (let x = 0; x < ceil(tilesX); x++) {
    for (let y = 0; y < ceil(tilesY); y++) {
      ellipse(x*tileW, y*tileH, tileW * 0.9, tileH * 0.9);
    }
  }
}
