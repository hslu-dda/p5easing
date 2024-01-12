let min = 20;
let max = 380;

const sketch = function (p) {
  let startTime = 0;
  let startValue = 0;
  let endValue = min;

  p.setup = function () {
    // Set up a global object to capture this instance.
    window._p5Instance = p;
    p.createCanvas(400, 400);
    console.log(p.getEasingFunctionNames());
  };

  p.draw = function () {
    p.background(220);
    let v = p.ease(startTime, 2000, startValue, endValue, "easeOutBounce");
    p.circle(p.width / 2, p.height / 2, v);
  };

  p.mouseClicked = function () {
    startTime = p.millis();
    startValue = endValue;
    endValue == min ? (endValue = max) : (endValue = min);
  };
};
// Create a p5 instance with the sketch
new p5(sketch, "sketch-container-1");

const sketch2 = function (p) {
  let startTime = 0;
  let startValue = 0;
  let endValue = max;

  p.setup = function () {
    window._p5Instance = p;

    p.createCanvas(400, 400);
    console.log(p.getEasingFunctionNames());
  };

  p.draw = function () {
    p.background(220);
    let v = p.ease(startTime, 2000, startValue, endValue, "easeOutBounce");
    p.circle(p.width / 2, p.height / 2, v);
  };

  p.mouseClicked = function () {
    startTime = p.millis();
    startValue = endValue;
    endValue == min ? (endValue = max) : (endValue = min);
  };
};
// Create a p5 instance with the sketch
new p5(sketch2, "sketch-container-2");

const sketch3 = function (p) {
  const easingFunctionNames = p.getEasingFunctionNames(); // Array of easing function names
  const numberOfEasingFunctions = easingFunctionNames.length; // Number of easing functions
  let startTime = 0;
  let startValue = 0;
  let endValue = max;
  p.setup = function () {
    window._p5Instance = p;

    p.createCanvas(400, 400);
    console.log(p.getEasingFunctionNames());
  };

  p.draw = function () {
    p.background(220);
    for (let i = 0; i < numberOfEasingFunctions; i++) {
      let initialY = p.map(
        i,
        0,
        numberOfEasingFunctions - 1,
        50,
        p.height - 50
      );

      let easingFunctionName = easingFunctionNames[i % numberOfEasingFunctions];
      let v = p.ease(startTime, 2000, startValue, endValue, easingFunctionName);
      p.circle(v, initialY, 5);
    }
  };

  p.mouseClicked = function () {
    startTime = p.millis();
    startValue = endValue;
    endValue == min ? (endValue = max) : (endValue = min);
  };
};
// Create a p5 instance with the sketch
new p5(sketch3, "sketch-container-3");
