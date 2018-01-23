var makeSquareDancer = function(top, left, timeBetweenSteps) {

  makeRainbowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({'border-radius': 0});
  window.dancers.push(this.$node);
};

makeSquareDancer.prototype = Object.create(makeRainbowDancer.prototype);
makeSquareDancer.prototype.constructor = makeRainbowDancer;
