let canvas;
let context;
let screenWidth;
let screenHeight;
let stars = [];
let fps = 50;
let starsNumb = 2000;

document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello world");
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;
  canvas = document.getElementById("my_canvas");
  canvas.height = screenHeight;
  canvas.width = screenWidth;
  context = canvas.getContext("2d");
  console.log(context);

  //Create all stars
  for (let i = 0; i < starsNumb; i++) {
    let x = Math.round(Math.random() * screenWidth);
    let y = Math.round(Math.random() * screenHeight);
    let opacity = Math.random();
    let length = 1 + Math.random() * 2;
    
    // Create a new star and draw
		var star = new Star(x, y, length, opacity);
		
		// Add the the stars array
		stars.push(star);
  }
  //setInterval(animate, 1000 / fps);
  
});


//Create a star class
function Star(x, y, length, opacity) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.length = parseInt(length);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * 0.03;
  }

  //Create a draw function on the class prototype
  Star.prototype.draw = function() {
    context.rotate((Math.PI * 1) / 10);
    //save the context
    context.save();

    //move to the middle of the canvas to make room
    context.translate(this.x, this.y);

    //change the opacity
    if (this.opacity > 1) {
      this.factor = -1;
    } else if (this.opacity <= 0) {
      this.factor = 1;
      this.x = Math.round(Math.random() * screenWidth);
      this.y = Math.round(Math.random() * screenHeight);
    }
    this.opacity += this.increment * this.factor;
    context.beginPath();
    for (var i = 5; i--; ) {
      context.lineTo(0, this.length);
      context.translate(0, this.length);
      context.rotate((Math.PI * 2) / 10);
      context.lineTo(0, -this.length);
      context.translate(0, -this.length);
      context.rotate(-((Math.PI * 6) / 10));
    }
      context.lineTo(0, this.length);
      context.closePath();
      context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
      context.shadowBlur = 5;
      context.shadowColor = "#ffff33";
      context.fill();
      context.restore();
  };

  /**
 * Animate the canvas
 */
function animate() {
	context.clearRect(0, 0, screenWidth, screenHeight);
	// $.each(stars, function() {
	// 	this.draw(context);
    // })
    stars.forEach(_, () => {
        this.draw(context)
    })
}