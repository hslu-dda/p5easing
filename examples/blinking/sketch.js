function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Calculate alpha using easing - cycles every 1000ms (1 second)
  let alpha = ease(millis() % 1000, 500, 0, 255, "easeInOutQuad");

  // Draw blinking rectangle
  fill(255, 0, 0, alpha);
  rect(150, 150, 100, 100);
}
