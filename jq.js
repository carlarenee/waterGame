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
var mon2 = $('#monster2');
var mon3 = $('#monster3');
var mon4 = $('#monster4');
var badGuy = $('.badGuys');

// movement functions
// monster to swim from right to left
var swim1 = function() {
  var distance = 920;
  setInterval(function() {
    mon1.css('left', distance + 'px');
    if (distance < 0) {
      distance = 920;
    } else {
      distance -= 5;
    }
  }, 40);
};

// monster to swim left to right
var swim2 = function() {
  var distance = 0;
  setInterval(function() {
    mon2.css('left', distance + 'px');
    if (distance > 920) {
      distance = 0;
    } else {
      distance += 5;
    }
  }, 20);
};

var swim3 = function() {
  var distance = 920;
  setInterval(function() {
    mon3.css('left', distance + 'px');
    if (distance < 0) {
      distance = 920;
    } else {
      distance -= 5;
    }
  }, 10);
};

var swim4 = function() {
  var distance = 0;
  setInterval(function() {
    mon4.css('left', distance + 'px');
    if (distance > 920) {
      distance = 0;
    } else {
      distance += 10;
    }
  }, 10);
};


// shoot functions
var blowup = function() {
  $(this).css('background-color', 'white');
}

// Timer
var $seconds = 30;
var $display = $('#playerTime')
setInterval(function(){ countDown }, 1000);

var countDown = function() {
  $seconds--;
  if ($seconds === 0) {
    clearInterval(countDown);
  }
  $display.text($seconds + " seconds");
}






// event listeners
//wholePage.hover(crossHair);
start.click(swim1);
start.click(swim2);
start.click(swim3);
start.click(swim4);
mon1.click(blowup);
mon2.click(blowup);
start.click(countDown);

});


