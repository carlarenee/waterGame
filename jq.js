$(document).ready(function() {

//getting input from page 1 into page 2
const url = window.location.search.substring(1);
const retrieve = url.split('&');
const name = retrieve[0].split('=');
$('#playerName').text(name[1]);

const start = $('#start');

//Turn cursor into weapon when hovering over a div
const wholePage = $('#box');
const crossHair = function () {
    wholePage.css( 'cursor' , 'url(assets/pow.png), crossHair');
  };

// variables
let score = 0;
const mon1 = $('#monster1');
const mon2 = $('#monster2');
const mon3 = $('#monster3');
const mon4 = $('#monster4');
const friend = $('#friend');
const friend2 = $('#friend2');
const badGuy = $('.badGuys');
let myInt;
let myInt2;
let myInt3;
let myInt4;
let myInt5;
let myInt6;

// movement functions, set fish swimming from side to side at varying speeds.
let swim1 = function() {
  let distance = 920;
  myInt = setInterval(function() {
    mon1.css('left', distance + 'px');
    if (distance < 0) {
      distance = 920;
    } else {
      distance -= 5;
    }
  }, 25);
};
let swim2 = function() {
  let distance = 0;
  myInt2 = setInterval(function() {
    mon2.css('left', distance + 'px');
    if (distance > 920) {
      distance = 0;
    } else {
      distance += 5;
    }
  }, 30);
};
let swim3 = function() {
  let distance = 920;
  myInt3 = setInterval(function() {
    mon3.css('left', distance + 'px');
    if (distance < 0) {
      distance = 920;
    } else {
      distance -= 5;
    }
  }, 20);
};
let swim4 = function() {
  let distance = 0;
  myInt4 = setInterval(function() {
    mon4.css('left', distance + 'px');
    if (distance > 920) {
      distance = 0;
    } else {
      distance += 10;
    }
  }, 25);
};
let swimfriend = function() {
  let distance = 0;
  myInt5 = setInterval(function() {
    friend.css('left', distance + 'px');
    if (distance > 920) {
      distance = 0;
    } else {
      distance += 5;
    }
  }, 20);
};
let swim6 = function() {
  let distance = 920;
  myInt6 = setInterval(function() {
    friend2.css('left', distance + 'px');
    if (distance < 0) {
      distance = 920;
    } else {
      distance -= 5;
    }
  }, 40);
};

// reset function to turn bad fish back to fish after they explode
let reset1 = function() {
  mon1.css('background-image', 'url(assets/badfish.gif');
}
let reset2 = function() {
  mon2.css('background-image', 'url(assets/squid.gif');
}
let reset3 = function() {
  mon3.css('background-image', 'url(assets/orangefish.gif');
}
let reset4 = function() {
  mon4.css('background-image', 'url(assets/greenfish.gif');
}
let reset5 = function() {
  friend.css('background-image', 'url(assets/happyfish.gif');
}
let reset6 = function() {
  friend2.css('background-image', 'url(assets/happyfish.gif');
}
// explosion animation when bad fish are hit, then reset
let blowup1 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset1, 1000);
}
let blowup2 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset2, 1000);
}
let blowup3 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset3, 1000);
}
let blowup4 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset4, 1000);
}
let blowup5 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset5, 1000);
}
let blowup6 = function() {
  $(this).css('background-image', 'url(assets/explode.gif');
  setTimeout(reset6, 1000);
}
// adding and subtracting points
let $showScore = $('#playerScore');
let $score = 0;
// if player hits monster 1, add 3 points
let hitMon1 = function() {
  $score +=3;
  $showScore.text($score + " points");
}
// if player hits monster 1, add 2 points
let hitMon2 = function() {
  $score +=2;
  $showScore.text($score + " points");
}
// if player hits monster 1, add 1 points
let hitMon3 = function() {
  $score +=1;
  $showScore.text($score + " points");
}
// if player hits monster 1, add 4 points
let hitMon4 = function() {
  $score +=4;
  $showScore.text($score + " points");
}
// if player hits friend, subract 3 points
let hitfriend = function() {
  $score -=3;
  $showScore.text($score + " points");
}
let hitfriend2 = function() {
  $score -=3;
  $showScore.text($score + " points");
}

// Timer
let $seconds = 20;
let $display = $('#playerTime');
let countDown = function() {
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
        if ($seconds < 1) {
          clearInterval(myInt);
          clearInterval(myInt2);
          clearInterval(myInt3);
          clearInterval(myInt4);
          clearInterval(myInt5);
          clearInterval(myInt6);
        };
      }
    return;
    }
  $display.text($seconds + " seconds");
  }, 1000);
}

// instruction pop up
$('#instruct').click(function(){
    $('#popup').toggle();
});

// reset game by reloading page
let startover = $('#reset');
let reload = function() {
    location.reload();
    console.log('resetting');
};

// event listeners
wholePage.hover(crossHair);
start.click(countDown);
start.click(swim1);
start.click(swim2);
start.click(swim3);
start.click(swim4);
start.click(swimfriend);
start.click(swim6);
mon1.click(blowup1);
mon1.click(hitMon1);
mon2.click(blowup2);
mon2.click(hitMon2);
mon3.click(blowup3);
mon3.click(hitMon3);
mon4.click(blowup4);
mon4.click(hitMon4);
friend.click(blowup5);
friend.click(hitfriend);
friend2.click(blowup6);
friend2.click(hitfriend2);
startover.click(reload);
});


