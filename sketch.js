let source;
let tileW;
let tileH;
let canvasWidth = 615; // Default canvas width
let canvasHeight = 411; // Default canvas height
let waveHeight = 10; // Magnitude of the wave
let isMousePressed = false;

function preload() {
  source = loadImage("Bilder/henninggk_minimalist_architectural_composition_showcasing_the_i_20eb6c84-650c-4bc5-8587-3c6c04cc86ce.png");
}

function setup() {
  // Dynamisk justering av canvas størrelse basert på skjermens bredde og opprettholder sideforhold
  canvasWidth = min(windowWidth, windowHeight * (source.width / source.height)); // Sett canvas bredde til 80% av skjermens bredde, men ikke mer enn 80% av skjermens høyde
  canvasHeight = canvasWidth * (source.height / source.width); // Beregn canvas høyde basert på bilde sideforholdet
  createCanvas(canvasWidth, canvasHeight, WEBGL);

  if (pixelDensity() === 2) {
    pixelDensity(1);
  }

  // Set the amount of tiles
  source.resize(40, 40);

  tileW = width / source.width;
  tileH = height / source.height;
}

function draw() {
  background("#f3f5f7");
  noStroke();

  let tilting = 10;

  // Beregn rotasjon basert på museposisjonen på både x- og y-aksen
  let rotasjonX = map(mouseX, 0, width, -PI / tilting, PI / tilting);
  let rotasjonY = map(mouseY, 0, height, PI / tilting, -PI / tilting);

  rotateY(rotasjonX);
  rotateX(rotasjonY);

  for (let x = 0; x < source.width; x++) {
    for (let y = 0; y < source.height; y++) {
      //fanger fargene fra bildet
      let c = source.get(x, y);

      //kalkulerer brighntess fra bildet
      let b = brightness(c);

      //kalkulerer lyse og mørke punkter
      let s = map(b, 0, 255, 0.6, 0);

      //kalkulerer z-posisjon basert på brightness
      let z = map(b, 0, 255, -200, 200);

      // Sjekker om pikselen er mørkere enn 100
      if (b < 100) {
        fill(20, 20, 20);
        let waveOffset = 0;
        if (isMousePressed) {
          waveOffset = map(sin(frameCount * 0.1 + x * 0.1 + y * 0.1), -1, 1, -waveHeight, waveHeight);
        }
        push();
        translate(-width / 2, -height / 2 + waveOffset, z);
        push();
        translate(x * tileW, y * tileH);
        box(tileW * s);
        pop();
        pop();
      }
    }
  }
}

// Responsivitet - Juster canvas størrelse når vindusstørrelsen endres
function windowResized() {
  canvasWidth = min(windowWidth, windowHeight * (source.width / source.height));
  canvasHeight = canvasWidth * (source.height / source.width);
  resizeCanvas(canvasWidth, canvasHeight);
  tileW = width / source.width;
  tileH = height / source.height;
}

// Set isMousePressed to true when mouse is pressed
function mousePressed() {
  isMousePressed = true;
}

// Set isMousePressed to false when mouse is released
function mouseReleased() {
  isMousePressed = false;
}
