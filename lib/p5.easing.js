// p5.easing.js Version 0.6.2
// Robert Penner's Easing Functions for p5.js
// Made by lovely people at Data Design + Art, @HSLU Luzern Switzerland

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["p5"], factory);
  } else if (typeof exports === "object") {
    // Node/CommonJS
    module.exports = factory(require("p5"));
  } else {
    // Browser globals
    factory(window.p5);
  }
})(function (p5) {
  ("use strict");

  console.log(
    "👋 Happy Coding with p5.easing! Made with ❤️ by data & design enthusiasts at Data Design+Art, HSLU Luzern Switzerland"
  );

  function _getP5Instance() {
    return (typeof window !== "undefined" && window._p5Instance) || p5.instance;
  }

  const EasingFunctions = {
    easeLinear: function (t, b, c, d) {
      return (c * t) / d + b;
    },
    easeInQuad: function (t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function (t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuartic: function (t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuartic: function (t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuartic: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuintic: function (t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuintic: function (t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuintic: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (t, b, c, d) {
      return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (t, b, c, d) {
      return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    },
    easeInExpo: function (t, b, c, d) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
      return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * 0.3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * 0.3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
      return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (!p) p = d * (0.3 * 1.5);
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
      if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
    },
    easeInBack: function (t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (t, b, c, d) {
      return c - EasingFunctions.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function (t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    },
    easeInOutBounce: function (t, b, c, d) {
      if (t < d / 2) return EasingFunctions.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
      return EasingFunctions.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    },
  };
  /**
   * Applies an easing function to calculate an intermediate value.
   * @param {number} startTime - The start time of the animation in milliseconds.
   * @param {number} duration - The duration of the animation in milliseconds.
   * @param {number} startValue - The starting value of the animation.
   * @param {number} endValue - The ending value of the animation.
   * @param {string} easingFunctionName - The name of the easing function to use.
   * @returns {number} The eased value at the current time.
   */
  p5.prototype.ease = function (startTime, duration, startValue, endValue, easingFunctionName) {
    if (startTime > this.millis()) return startValue;

    const easingFunction = EasingFunctions[easingFunctionName];

    const elapsedTime = this.millis() - startTime;
    const percent = Math.min(elapsedTime / duration, 1);

    if (typeof easingFunction === "function") {
      return easingFunction(percent, startValue, endValue - startValue, 1);
    } else {
      console.error(`Invalid easing function name: ${easingFunctionName}`);
      return NaN;
    }
  };

  /**
   * Calculates the number of steps for an animation based on duration and frame rate.
   * @param {number} milliseconds - The duration of the animation in milliseconds.
   * @param {number} [frameRate=60] - The frame rate of the animation.
   * @returns {number} The number of steps for the animation.
   */
  p5.prototype.calculateSteps = function (milliseconds, frameRate = 60) {
    const seconds = milliseconds / 1000;
    const frames = seconds * frameRate;
    return Math.ceil(frames);
  };

  /**
   * Applies an easing function based on frame count.
   * @param {number} startFrame - The starting frame of the animation.
   * @param {number} durationFrames - The duration of the animation in frames.
   * @param {number} startValue - The starting value of the animation.
   * @param {number} endValue - The ending value of the animation.
   * @param {string} easingFunctionName - The name of the easing function to use.
   * @returns {number} The eased value at the current frame.
   */
  p5.prototype.easeByFrameSteps = function (startFrame, durationFrames, startValue, endValue, easingFunctionName) {
    if (startFrame > this.frameCount) return startValue;

    const easingFunction = EasingFunctions[easingFunctionName];

    const frameDifference = this.frameCount - startFrame;
    const percent = Math.min(frameDifference / durationFrames, 1);

    if (typeof easingFunction === "function") {
      return easingFunction(percent, startValue, endValue - startValue, 1);
    } else {
      console.error(`Invalid easing function name: ${easingFunctionName}`);
      return NaN;
    }
  };

  /**
   * Applies an easing function based on custom steps.
   * @param {number} currentStep - The current step of the animation.
   * @param {number} startStep - The starting step of the animation.
   * @param {number} numSteps - The total number of steps in the animation.
   * @param {number} startValue - The starting value of the animation.
   * @param {number} endValue - The ending value of the animation.
   * @param {string} easingFunctionName - The name of the easing function to use.
   * @returns {number} The eased value at the current step.
   */
  p5.prototype.easeBySteps = function (currentStep, startStep, numSteps, startValue, endValue, easingFunctionName) {
    if (startStep > currentStep) return startValue;

    const easingFunction = EasingFunctions[easingFunctionName];

    const stepDifference = currentStep - startStep;
    const percent = Math.min(stepDifference / numSteps, 1);

    if (typeof easingFunction === "function") {
      return easingFunction(percent, startValue, endValue - startValue, 1);
    } else {
      console.error(`Invalid easing function name: ${easingFunctionName}`);
      return NaN;
    }
  };

  /**
   * Returns an array of all available easing function names.
   * @returns {string[]} An array of easing function names.
   */
  p5.prototype.getEasingFunctionNames = function () {
    return Object.keys(EasingFunctions);
  };

  // Return the modified p5 object
  return p5;
});
