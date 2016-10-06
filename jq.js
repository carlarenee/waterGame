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
var score = 0;
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
  }, 30);
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
  }, 20);
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
  }, 15);
};


// shoot functions
var blowup = function() {
  $(this).css('background-color', 'white');
}

// Timer
var $seconds = 20;
var $display = $('#playerTime')
var countDown = function() {
  setInterval(function(){
  $seconds--;
  if ($seconds < 0) {
    clearInterval();
    return;
  }
  $display.text($seconds + " seconds");
  }, 1000);
}

// adding and subtracting points
var $showScore = $('#playerScore');
var $score = 0;
var hitMon1 = function() {
  $score +=3;
  $showScore.text($score + " points");
}

var hitMon2 = function() {
  $score +=2;
  $showScore.text($score + " points");
}

var hitMon3 = function() {
  $score +=1;
  $showScore.text($score + " points");
}

var hitMon4 = function() {
  $score +=4;
  $showScore.text($score + " points");
}


// event listeners
//wholePage.hover(crossHair);
start.click(swim1);
start.click(swim2);
start.click(swim3);
start.click(swim4);
mon1.click(blowup);
mon1.click(hitMon1);
mon2.click(blowup);
mon2.click(hitMon2);
mon3.click(blowup);
mon3.click(hitMon3);
mon4.click(blowup);
mon4.click(hitMon4);
start.click(countDown);

});


