var chickHicks;
var speed = -5;
var mcqueen;
var Mcqueen = {
  h: 630 - 74.4,
  w: 480
}
var platforms = []
var key_left;
var key_right;

function setup() {
  createCanvas(1000, 800);
  mcqueen = createImg("McQueen.png");
  colorMode(HSB);
  mcqueen.show();
  chickHicks = createImg("Chick_Hicks.png");
  for (i = 0; i < 100; i++) {
    platforms[i] = new Platforms(i);
  }
}
function draw() {
  //platforms();
  speed;
  keyPressed();
  borders();
  Mcqueen.h -= speed;
  mcqueen.position(Mcqueen.w, Mcqueen.h);
  mcqueen.size(124, 74.4);
  for (i = 0; i < 100; i++) {
    platforms[i].drawPlatforms();
  }
  playerMoves();
//  playerLands();
}

function borders() {
  var x = 250;
  fill(0);
  rect(0, 0, x, 800);
  fill(0);
  rect(3*x, 0, x, 800);
  if (Mcqueen.w < 126) {
    Mcqueen.w = 750;
  }
  if (Mcqueen.w > 750) {
    Mcqueen.w = 126;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    speed += 5;
    mySound.setVolume(1000);
    mySound.play();
  }
  if (keyCode == 37) {
    key_left = true;
    }
  else if (keyCode == 39) {
    key_right = true;
  }
}
function preload() {
  soundFormats('mp3');
  mySound = loadSound("Kachow.mp3");
}
function Platforms() {
  this.x = random(250, 740);
  this.y = 625-random(30, 50)*i;
  this.drawPlatforms = function() {
    fill(0);
    rect(this.x, this.y, 50, 10);
  }
}
// function playerLands() {
//   if (Mcqueen.h >= (Platforms.y + 10) && Mcqueen.h <= (Platforms.y - 10) && Mcqueen.x >= (Platforms.x - 10) && Mcqueen.x <= (Platforms.x +10)) {
//     speed = 0;
//   }
// }
function playerDeath() {
  if (Mcqueen.h > 1000) {
    chickHicks.show();
    chickHicks.position(750, 400);
    for(i = 0; i < 20; i++){
      chickHicks.size(50*i, 50*i);
    }
  }
}

// function handleKeyDown(event) {
//   if (event.keycode == 37) {
//     key_left = true;
//   }
//   else if (event.keycode == 39) {
//     key_right = true;
//   }
// }
// function handleKeyUp(event) {
//   if (event.keycode == 37) {
//     key_left = false;
//   }
//   else if (event.keycode == 39) {
//     key_right = false;
//   }
// }
function keyReleased() {
  if (keyCode == 37) {
    key_left = false;
  }
  else if (keyCode == 39) {
    key_right = false;
  }
}
function playerMoves() {
  if (key_left == true) {
    Mcqueen.w = (Mcqueen.w - 10);
    console.log("left key is being pressed");
  }
  else if (key_right == true) {
    Mcqueen.w = (Mcqueen.w + 10);
    console.log("right key is being pressed");
  }
}
