# p5.easing Library

Welcome to the p5.easing library, a collection of custom easing functions for p5.js based on Robert Penner's easing equations.

**Easing Function Parameters:**

The `ease()` function takes five parameters:

- `startTime`: The start time for the easing animation, measured in milliseconds.
- `duration`: The total duration of the easing animation in milliseconds.
- `startValue`: The starting value of the animation.
- `endValue`: The ending value of the animation.
- `easingFunctionName`: The name of the easing function to use. This determines the shape of the easing curve.

```javascript
let easedValue = ease(
  startTime,
  duration,
  startValue,
  endValue,
  easingFunctionName
);
```

## Getting Started

1. **Installation:**

- Include it in your HTML file:

  ```html
  <script src="path/to/p5.easing.js"></script>
  ```

2. **Usage:**

- Initialize your p5.js sketch and set up the canvas:

  ```javascript
  let startTime = 0;
  let startValue = 0;
  let endValue = 200;

  function setup() {
    createCanvas(400, 400);
    console.log(getEasingFunctionNames());
  }
  ```

- In your `draw()` function, use the `ease()` function to create animated effects:

  ```javascript
  function draw() {
    background(220);
    let v = ease(startTime, 2000, startValue, endValue, "easeOutBounce");
    circle(width / 2, height / 2, v);
  }
  ```

- Update the animation parameters on mouse click:

  ```javascript
  function mouseClicked() {
    startValue = endValue;
    endValue = random(width);
    startTime = millis();
  }
  ```

- You can experiment with different easing functions by changing the last parameter in the `ease()` function.

3. **Easing Functions:**

The library provides various easing functions. You can explore them using the `getEasingFunctionNames()` function:

```javascript
console.log(getEasingFunctionNames());
```
