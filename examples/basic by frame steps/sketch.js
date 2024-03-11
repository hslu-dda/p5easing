let startFrame = 0;
let startValue = 0;
let endValue = 200;

function setup() {
  createCanvas(400, 400);
  console.log(getEasingFunctionNames());
  frameRate(10);
}

function draw() {
  background(220);
  // ease by steps. usefull if you dont run at 60fps while saving frames to generate a 60fps video
  let steps = calculateSteps(2000); //optional default fps param  let steps = calculateSteps(2000,30);
  let v = easeByFrameSteps(
    startFrame,
    steps,
    startValue,
    endValue,
    "easeOutBounce"
  );
  circle(width / 2, height / 2, v);
}

function mouseClicked() {
  let v = easeByFrameSteps(
    startFrame,
    calculateSteps(2000),
    startValue,
    endValue,
    "easeOutBounce"
  );
  startFrame = frameCount;
  startValue = v;
  endValue = random(width);
}
