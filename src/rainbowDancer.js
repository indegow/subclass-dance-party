var makeRainbowDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="rainbowDancer"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);
makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.oldStep = makeDancer.prototype.step;

makeRainbowDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  var colorArray = ['red', 'blue', 'green', 'yellow'];
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var color = colorArray[Math.floor(Math.random() * 4)];

  this.$node.css({"border-color": color});
};