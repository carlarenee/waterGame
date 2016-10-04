$(document).ready(function() {

// Turn cursor into weapon when hovering over a div
var wholePage = $('body');
// var circle = $('#target');
// var crossHair = function () {
//     circle.css( 'cursor' , 'url(assets/pow-01.png), crossHair');
//   };
var crossHair = function () {
    wholePage.css( 'cursor' , 'url(assets/pow-01.png), crossHair');
  };



// Call functions here
//circle.hover(crossHair);
wholePage.hover(crossHair);

});


