var makeRainbowDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.oldStep = makeDancer.prototype.step;

makeRainbowDancer.prototype.step = function() {
  this.oldStep();
  var colorArray = ['red', 'blue', 'green', 'yellow', 'gold', 'silver'];

  var color = colorArray[Math.floor(Math.random() * 6)];

  this.$node.css({'border-color': color});
};