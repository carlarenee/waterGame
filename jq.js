$(document).ready(function() {

//getting input from page 1 into page 2
var url = window.location.search.substring(1);
var retrieve = url.split('&');
var name = retrieve[0].split('=');
$('#playerName').append(name[1]);

var start = $('#start');

// Turn cursor into weapon when hovering over a div
// var wholePage = $('body');
// var crossHair = function () {
//     wholePage.css( 'cursor' , 'url(assets/pow.png), crossHair');
//   };

// variables

var score = 0;
var mon1 = $('#monster1');
var mon2 = $('#monster2');
var mon3 = $('#monster3');
var mon4 = $('#monster4');
var friend = $('#friend');
var badGuy = $('.badGuys');

// movement functions, set fish swimming from side to side at varying speeds.
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
var swimfriend = function() {
  var distance = 0;
  setInterval(function() {
    friend.css('left', distance + 'px');
    if (distance > 920) {
      distance = 0;
    } else {
      distance += 5;
    }
  }, 30);
};

// reset function to turn bad fish back to fish after they explode
var reset1 = function() {
  mon1.css('background-image', 'url(assets/badfish.gif');
}
var reset2 = function() {
  mon2.css('background-image', 'url(assets/squid.gif');
}
var reset3 = function() {
  mon3.css('background-image', 'url(assets/squid.gif');
}
// explosion animation when bad fish are hit, then reset
var blowup1 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset1, 1000);
}
var blowup2 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset2, 1000);
}
var blowup3 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset3, 1000);
}


// adding and subtracting points
var $showScore = $('#playerScore');
var $score = 0;
// if player hits monster 1, add 3 points
var hitMon1 = function() {
  $score +=3;
  $showScore.text($score + " points");
}
// if player hits monster 1, add 2 points
var hitMon2 = function() {
  $score +=2;
  $showScore.text($score + " points");
}
// if player hits monster 1, add 1 points
var hitMon3 = function() {
  $score +=1;
  $showScore.text($score + " points");
}
// if player hits monster 1, add 4 points
var hitMon4 = function() {
  $score +=4;
  $showScore.text($score + " points");
}
// if player hits friend, subract 3 points
var hitfriend = function() {
  $score -=3;
  $showScore.text($score + " points");
}

// Timer
var $seconds = 20;
var $display = $('#playerTime');
var countDown = function() {
  setInterval(function(){
  $seconds--;
  if ($seconds < 0) {
    clearInterval();
    if ($score >= 30) {
      console.log('winner');
      $('#winner').animate({
        height: '500px',
        width : '500px'
      }, 1000);} else {
        console.log('loser');
        $('#loser').animate({
        height: '500px',
        width : '500px'
      }, 1000);
      }
    return;
    }
  $display.text($seconds + " seconds");
  }, 1000);
}

// event listeners
//wholePage.hover(crossHair);
start.click(countDown);
start.click(swim1);
start.click(swim2);
start.click(swim3);
start.click(swim4);
start.click(swimfriend);
mon1.click(blowup1);
mon1.click(hitMon1);
mon2.click(blowup2);
mon2.click(hitMon2);
mon3.click(blowup3);
mon3.click(hitMon3);
mon4.click(blowup);
mon4.click(hitMon4);
friend.click(blowup);
friend.click(hitfriend);
});


