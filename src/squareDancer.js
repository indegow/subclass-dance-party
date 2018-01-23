var makeSquareDancer = function(top, left, timeBetweenSteps) {

  makeRainbowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({'border-radius': 0});
};

makeSquareDancer.prototype = Object.create(makeRainbowDancer.prototype);
makeSquareDancer.prototype.constructor = makeRainbowDancer;
