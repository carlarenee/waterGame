$(document).ready(function() {

//getting input from page 1 into page 2
var url = window.location.search.substring(1);
var retrieve = url.split('&');
console.log(retrieve);
var name = retrieve[0].split('=');
$('#playerName').append(name[1]);
console.log(name);

var start = $('#start');
// Turn cursor into weapon when hovering over a div
var wholePage = $('body');
var crossHair = function () {
    wholePage.css( 'cursor' , 'url(assets/pow.png), crossHair');
  };
// variables
var mon1 = $('#monster1');
var badGuy = $('.badGuys')
//functions


var swimMonsterLeft = function() {
  var distance = 1000;
  setInterval(function() {
    mon1.css('left', distance + 'px');
    if (distance < 0) {
      distance = 920;
    } else {
      distance -= 5;
    }
  }, 80);
};

var blowup = function() {
  $(this).css('background-color', 'white');
}




wholePage.hover(crossHair);
start.click(swimMonsterLeft);
mon1.click(blowup);


});


