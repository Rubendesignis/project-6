let g;
function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 450, 250, 100, 150);
  angleMode(DEGREES);
  noSmooth();
  g = createGraphics(width * sqrt(2), height * sqrt(2));
  g.colorMode(HSB, 360, 100, 250, 200);
  g.angleMode(DEGREES);
  g.background(150, 70, 255);
  drawGraphic(g);
}

function draw() {
  background(0, 0, 100);
  let rMax = width * sqrt(2);
  for (let r = rMax; r > 0; r -= 30) {
    push();
    translate(width / 2, height / 2);
    rotate(-frameCount+map(r, rMax, 100, 200,290) * tan((frameCount/5+75-(r / rMax) * 80))%80);
    noStroke();
    fill(0, 0, 100, 0);
    circle(0, 0, r);
    drawingContext.clip();
    imageMode(CENTER);
    image(g, 0, 0);
    imageMode(CORNER);
    pop();
  }
}

function drawGraphic(target) {
  target.push();
  target.translate(target.width / 2, target.height / 2);
  target.noStroke();
  target.fill(255, 80, 200);
  let r = sqrt(sq(target.width) + sq(target.height));
  let angleStep = 80;
  let rMin = 0;
  for (let angle = 0; angle < 360; angle += angleStep) {
    target.triangle(
      cos(angle) * rMin,
      sin(angle) * rMin,
      cos(angle - angleStep / 4) * r,
      sin(angle - angleStep / 4) * r,
      cos(angle + angleStep / 4) * r,
      sin(angle + angleStep / 4) * r
    );
  }
  target.pop();
}
