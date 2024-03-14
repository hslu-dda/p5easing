# p5.easing Library

Welcome to the p5.easing library, a collection of custom easing functions for p5.js based on Robert Penner's easing equations.

## Getting Started

1. **Installation:**

Include it in your HTML file:

```html
<script src="path/to/p5.easing.js"></script>
```

2. **Usage:**

   **_Easing by Time_**
   Easing by time allows you to smoothly transition between values over a specified duration. Here's how to use it:

   Initialize your p5.js sketch and set up the canvas:

   ```javascript
   // Define easing parameters
   const startTime = millis();
   const duration = 1000; // 1 second
   const startValue = 0;
   const endValue = 100;
   const easingFunction = "easeInOutQuad"; // Choose from available easing functions
   ```

   In your `draw()` function, use the `ease()` function to create animated effects:

   ```javascript
   function draw() {
     background(220);
     let v = ease(startTime, duration, startValue, endValue, easingFunction);
     circle(width / 2, height / 2, v);
   }
   ```

   Maybe you want to update the animation parameters on mouse click:

   ```javascript
   function mouseClicked() {
     startValue = endValue;
     endValue = random(width);
     startTime = millis();
   }
   ```

   You can experiment with different easing functions by changing the last parameter in the `ease()` function.

   **_Easing by Frames_**

   Easing by frames allows you to animate based on the number of frames, which is useful when rendering non-realtime animations. For instance, if you're saving your animation or working with a fixed, slow frame rate, you would use `easeByFrameSteps`. Here's how to use it:

   ```javascript
   // Define easing parameters
   const startFrame = frameCount;
   const durationFrames = 60; // 1 second at 60 frames per second
   const startValue = 0;
   const endValue = 100;
   const easingFunction = "easeInOutQuad"; // Choose from available easing functions

   // Call the easeByFrameSteps function to get the eased value
   const easedValue = easeByFrameSteps(
     startFrame,
     durationFrames,
     startValue,
     endValue,
     easingFunction
   );
   ```

   **_Easing by Steps_**

   easeBySteps is utilized for non-linear interpolation, where the easedValue represents the interpolated value between startValue and endValue based on the currentStep and numSteps parameters. This enables achieving smooth transitions or effects in your program that are not linearly related to time.

   ```javascript
   // Define easing parameters for non-linear interpolation
   const currentStep = stepCount; // This could represent any step value you want to interpolate
   const startStep = 0;
   const numSteps = 60; // Total number of steps
   const startValue = 0;
   const endValue = 100;
   const easingFunction = "easeInOutQuad"; // Choose from available easing functions

   // Call the easeBySteps function to perform non-linear interpolation
   const easedValue = easeBySteps(
     currentStep,
     startStep,
     numSteps,
     startValue,
     endValue,
     easingFunction
   );

   // Usage example: Non-linear interpolation
   // In this example, we use easing to interpolate a value between startValue and endValue
   // based on the currentStep and numSteps, achieving a non-linear interpolation effect.
   ```

3. **Easing Functions:**

The library provides various easing functions. You can explore them using the `getEasingFunctionNames()` function:

```javascript
console.log(getEasingFunctionNames());
```
