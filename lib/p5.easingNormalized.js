// p5.easing.js Version 1.0.0
// Robert Penner's Easing Functions for p5.js
// Made by lovely people at Data Design + Art, @HSLU Luzern Switzerland
//
// API: ease(start, stop, t, fnName)
//   start   - start value
//   stop    - end value
//   t       - progress 0→1 (you compute this, like lerp's amt)
//   fnName  - easing function name, e.g. "easeInOutQuad"
//
// Example:
//   let t = (millis() - startTime) / duration;  // 0 → 1
//   let x = ease(0, width, t, "easeInOutQuad");

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["p5"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("p5"));
  } else {
    factory(window.p5);
  }
})(function (p5) {
  "use strict";

  console.log(
    "👋 Happy Coding with p5.easing! Made with ❤️ by data & design enthusiasts at Data Design+Art, HSLU Luzern Switzerland",
  );

  // Internal easing functions — all expect t in 0→1, b=start, c=change, d=1
  const EasingFunctions = {
    easeLinear: (t, b, c, d) => (c * t) / d + b,

    easeInQuad: (t, b, c, d) => c * (t /= d) * t + b,
    easeOutQuad: (t, b, c, d) => -c * (t /= d) * (t - 2) + b,
    easeInOutQuad: (t, b, c, d) => {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    },

    easeInCubic: (t, b, c, d) => c * (t /= d) * t * t + b,
    easeOutCubic: (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b,
    easeInOutCubic: (t, b, c, d) => {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    },

    easeInQuartic: (t, b, c, d) => c * (t /= d) * t * t * t + b,
    easeOutQuartic: (t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b,
    easeInOutQuartic: (t, b, c, d) => {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    },

    easeInQuintic: (t, b, c, d) => c * (t /= d) * t * t * t * t + b,
    easeOutQuintic: (t, b, c, d) => c * ((t = t / d - 1) * t * t * t * t + 1) + b,
    easeInOutQuintic: (t, b, c, d) => {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    },

    easeInSine: (t, b, c, d) => -c * Math.cos((t / d) * (Math.PI / 2)) + c + b,
    easeOutSine: (t, b, c, d) => c * Math.sin((t / d) * (Math.PI / 2)) + b,
    easeInOutSine: (t, b, c, d) => (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b,

    easeInExpo: (t, b, c, d) => (t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b),
    easeOutExpo: (t, b, c, d) => (t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b),
    easeInOutExpo: (t, b, c, d) => {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },

    easeInCirc: (t, b, c, d) => -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b,
    easeOutCirc: (t, b, c, d) => c * Math.sqrt(1 - (t = t / d - 1) * t) + b,
    easeInOutCirc: (t, b, c, d) => {
      if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
      return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },

    easeInElastic: (t, b, c, d) => {
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      const p = d * 0.3;
      const s = p / 4;
      return -(c * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    },
    easeOutElastic: (t, b, c, d) => {
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      const p = d * 0.3;
      const s = p / 4;
      return c * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    },
    easeInOutElastic: (t, b, c, d) => {
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      const p = d * (0.3 * 1.5);
      const s = p / 4;
      if (t < 1) return -0.5 * (c * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
      return c * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
    },

    easeInBack: (t, b, c, d, s = 1.70158) => c * (t /= d) * t * ((s + 1) * t - s) + b,
    easeOutBack: (t, b, c, d, s = 1.70158) => c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b,
    easeInOutBack: (t, b, c, d, s = 1.70158) => {
      if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },

    easeInBounce: (t, b, c, d) => c - EasingFunctions.easeOutBounce(d - t, 0, c, d) + b,
    easeOutBounce: (t, b, c, d) => {
      if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
      else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      else return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    },
    easeInOutBounce: (t, b, c, d) => {
      if (t < d / 2) return EasingFunctions.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
      return EasingFunctions.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    },
  };

  /**
   * Eases a value from start to stop, like lerp() but with a curve.
   *
   * @param {number} start            - The start value.
   * @param {number} stop             - The end value.
   * @param {number} t                - Progress from 0 to 1 (you compute this).
   * @param {string} easingFunctionName - Name of the easing function to use.
   * @returns {number} The eased value.
   *
   * @example
   * // Fade alpha over 500ms
   * let t = (millis() - startTime) / 500;  // 0 → 1
   * let alpha = ease(0, 255, t, "easeInOutQuad");
   */
  p5.prototype.ease = function (start, stop, t, easingFunctionName) {
    t = this.constrain(t, 0, 1);
    const fn = EasingFunctions[easingFunctionName];
    if (typeof fn === "function") {
      return fn(t, start, stop - start, 1);
    } else {
      console.error(
        `p5.easing: unknown function "${easingFunctionName}". Call getEasingFunctionNames() for a full list.`,
      );
      return NaN;
    }
  };

  /**
   * Returns an array of all available easing function names.
   * @returns {string[]}
   */
  p5.prototype.getEasingFunctionNames = function () {
    return Object.keys(EasingFunctions);
  };

  return p5;
});
