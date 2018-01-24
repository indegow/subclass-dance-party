describe('squareDancer', function() {

  var squareDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squareDancer = new makeSquareDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node cycle through colors', function() {
    sinon.spy(squareDancer.$node, 'css');
    squareDancer.step();
    expect(squareDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(squareDancer, 'step');
      expect(squareDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });
  });
});
