let width = 500;
let height = 500;

let min = 50;
let max = width - 50;
let duration = 1500;

const sketch = function (p) {
  let startTime = 0;
  let startValue = 0;
  let endValue = min;

  p.setup = function () {
    // Set up a global object to capture this instance.
    window._p5Instance = p;
    p.createCanvas(width, height);
    console.log(p.getEasingFunctionNames());
  };

  p.draw = function () {
    p.background(240);
    let v = p.ease(startTime, duration, startValue, endValue, "easeOutBounce");
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

    p.createCanvas(width, height);
  };

  p.draw = function () {
    p.background(240);
    let v = p.ease(startTime, duration, startValue, endValue, "easeOutBounce");
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

    p.createCanvas(width, height);
  };

  p.draw = function () {
    p.background(240);
    for (let i = 0; i < numberOfEasingFunctions; i++) {
      let initialY = p.map(
        i,
        0,
        numberOfEasingFunctions - 1,
        50,
        p.height - 50
      );

      let easingFunctionName = easingFunctionNames[i % numberOfEasingFunctions];
      let v = p.ease(
        startTime,
        duration,
        startValue,
        endValue,
        easingFunctionName
      );
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

const sketch4 = function (p) {
  let startTime = 0;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let targetX = 200;
  let targetY = 200;

  p.setup = function () {
    // Set up a global object to capture this instance.
    window._p5Instance = p;
    p.createCanvas(width, height);
    targetX = p.width / 2;
    targetY = p.height / 2;
  };

  p.draw = function () {
    p.background(240);
    currentX = p.ease(startTime, duration, startX, targetX, "easeOutQuintic");
    currentY = p.ease(startTime, duration, startY, targetY, "easeOutQuintic");

    p.circle(currentX, currentY, 10);
  };

  p.mouseClicked = function () {
    startTime = p.millis();
    startX = currentX;
    startY = currentY;
    targetX = p.mouseX;
    //constrain the x/y coordinates to the canvas
    targetX = p.constrain(p.mouseX, 0, p.width);
    targetY = p.constrain(p.mouseY, 0, p.height);
  };
};
// Create a p5 instance with the sketch
new p5(sketch4, "sketch-container-4");

const sketch5 = function (p) {
  let startTime = 0;
  let startHue = 0;
  let targetHue = 60;

  let hues = [];

  p.setup = function () {
    // Set up a global object to capture this instance.
    window._p5Instance = p;
    p.createCanvas(width, height);
    p.rectMode(p.CENTER);
    p.colorMode(p.HSB, 360, 100, 100);
    hues = [
      { hue: 0, easingFunction: "easeLinear" },
      { hue: 0, easingFunction: "easeInSine" },
      { hue: 0, easingFunction: "easeInQuad" },
      { hue: 0, easingFunction: "easeInCubic" },
      { hue: 0, easingFunction: "easeInQuartic" },
      { hue: 0, easingFunction: "easeInQuintic" },
    ];

    p.noStroke();
  };

  p.draw = function () {
    p.background(0, 0, 94);

    hues.forEach((element, index) => {
      let h = p.ease(
        startTime,
        duration,
        startHue,
        targetHue,
        element.easingFunction
      );

      element.hue = h;
      let c = p.color(element.hue, 100, 100);
      let x = p.map(index, 0, hues.length - 1, 75, p.width - 75);
      p.fill(c);
      p.rect(x, p.height / 2, 50);
    });
  };

  p.mouseClicked = function () {
    startTime = p.millis();
    startHue = hues[0].hue;
    targetHue = (targetHue + 60) % 360;
  };
};
// Create a p5 instance with the sketch
new p5(sketch5, "sketch-container-5");
