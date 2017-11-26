function Platform(x, altitude, size, color) {

  this.x = x;
  this.altitude = altitude;

  this.size = size;
  this.color = color;

  this.onScreen = true;
}

/**
 * draws platform at altitude
 */
Platform.prototype.draw = function(altitude) {

  stroke(255);
  strokeWeight(3);
  fill(this.color);

	// relative to player
  if (altitude - this.altitude < height / 2) {
		// on-screen

    rect(this.x, (altitude - this.altitude + height / 2) , this.size, 15);
  } else {
    this.onScreen = false;
  }
};

/**
 * returns whether passed McQueen hits the platform
 */
Platform.prototype.collidesWith = function(McQueen) {

  var platformTop = this.altitude;
  var McQueenBottom = McQueen.location.y - McQueen.size / 2 ;

  stroke("#FF0000");
  strokeWeight(10);

  if (Math.abs(platformTop - McQueenBottom) < -McQueen.velocity.y && platformTop < McQueenBottom) {

    var platformLeftX = this.x; // platform lefter-most x bound
    var platformRightX = this.x + this.size; // platform righter-most x bound

    var McQueenLeftX = McQueen.location.x - McQueen.size / 2; // McQueen lefter-most x bound
    var McQueenRightX = McQueen.location.x + McQueen.size / 2; // McQueen righter-most x bound

    return ((McQueenLeftX >= platformLeftX && // if the McQueen's left X falls between the platform
			McQueenLeftX <= platformRightX) ||
			(McQueenRightX >= platformLeftX && // if the McQueen's right X falls between the platform
			McQueenRightX <= platformRightX));
  }

  return false;
};
