const canvas = document.getElementById("my_canvas");
const ctx = canvas.getContext("2d");

// canvas.style.border = "1px solid red";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.style.width = '100vw'
// canvas.style.height = '100vh'
canvas.style.background = '#222';

//ctx.fillRect(x, y, width, height)
// ctx.fillStyle = "mediumseagreen";
// ctx.fillRect(500, 200, 100, 100);

// ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise?:boolean)
// ctx.arc(95, 50, 40, 0, 2 * Math.PI)
// ctx.strokeStyle = 'maroon'
// ctx.stroke()

// Creating multiple circles

function randomColor() {
    return Math.floor(Math.random() * 255)
}

  for (let i = 0; i <= 2000; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let radius = Math.random() * 1
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgb(' + randomColor() + "," + randomColor() + ","  + randomColor() +')';
    ctx.stroke();
  }

  console.log(canvas);