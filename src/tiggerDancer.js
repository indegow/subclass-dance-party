var makeTiggerDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="tigger.jpg">');
  var random = Math.floor(Math.random() * 1000);
  var random2 = Math.floor(Math.random() * 1000);
  var speed = Math.floor(Math.random() * 5000);
  var height = Math.floor(Math.random() * 500);
  var width = Math.floor(Math.random() * 500);
  this.$node.css({'border': 'none', 'height': height, 'width': width});
  $("img").css({'transform': 'rotate(-180deg)'});
  // $(".dancer").rotate({'angle':'0', 'animateTo':'360'});
  this.$node.animate({top: random, left: random2}, 2000);
};

makeTiggerDancer.prototype = Object.create(makeDancer.prototype);
makeTiggerDancer.prototype.constructor = makeTiggerDancer;
