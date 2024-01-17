let startTime = 0;
let startValue = 0;
let endValue = 200;

function setup() {
  createCanvas(400, 400);
  console.log(getEasingFunctionNames());
}

function draw() {
  background(220);
  let v = ease(startTime, 2000, startValue, endValue, "easeOutBounce");
  circle(width / 2, height / 2, v);
}

function mouseClicked() {
  let v = ease(startTime, 2000, startValue, endValue, "easeOutBounce");
  startValue = v;
  endValue = random(width);
  startTime = millis();
}
