$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.partnerUp').on('click', function(event) {
    // loop through all of the dancers
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      var currentDancerCoordinates = [currentDancer.$node.css('top'), currentDancer.$node.css('left')];
      var hypotenuses = [];
      // for each dancer, find its closest dancer 
      for (var j = 0; j < window.dancers.length; j++) {
        if (window.dancers[j] !== currentDancer) {
          // loop through all of the other dancers, and get the hypotenuse length
          var potentialPartner = window.dancers[j];
          var potentialPartnerCoordinates = [potentialPartner.$node.css('top'), potentialPartner.$node.css('left')];
          var currentDancerTop = currentDancerCoordinates[0].replace('px', '');
          var currentDancerLeft = currentDancerCoordinates[1].replace('px', '');
          var potentialPartnerTop = potentialPartnerCoordinates[0].replace('px', '');
          var potentialPartnerLeft = potentialPartnerCoordinates[1].replace('px', '');
          // get top diff
          var topDiff = Math.abs(currentDancerTop - potentialPartnerTop);
          // get left diff
          var leftDiff = Math.abs(currentDancerLeft - potentialPartnerLeft);
          
          // hypotenuse = square root of leftDiff squared + rightdiff squared
          var hypotenuse = Math.sqrt(Math.pow(topDiff, 2) + Math.pow(leftDiff, 2));
          hypotenuses.push([potentialPartner, hypotenuse]);
          
        }
      }
      // find the minimum
      // use that to find its pair
      
      
      

    }
    
    

    // add each of these pairs to a new array 

    // find the midpoint of each of these pairs locations

    // tell each of the pairs to move to the midpoint


  });

});

