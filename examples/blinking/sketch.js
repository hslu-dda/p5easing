let starttime = 0;
let duration = 1000;
let from = 0;
let to = 255;

function setup() {
  createCanvas(400, 400);
  console.log(getEasingFunctionNames());
}

function draw() {
  background(220);

  let alpha = ease(starttime, duration, from, to, "easeInOutQuintic");
  if (millis() > starttime + duration) {
    starttime = millis();
    [from, to] = [to, from];
  }
  // Draw blinking rectangle
  fill(255, 0, 0, alpha);
  rect(150, 150, 100, 100);
}
