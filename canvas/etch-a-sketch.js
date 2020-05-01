// Select the elements on the page - canvas, shake button
const shake = document.querySelector('.shake');
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;

// Setup our canvas for drawing

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;

// write a draw function

function drawTheLine(xStart, yStart, xEnd, yEnd) {
  hue += 5;
  ctx.beginPath();
  ctx.lineWidth = 50;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
  ctx.closePath();
}

// write a handler for the keys
const key = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
};

function keyDown(event) {
  const moveAmount = 20;
  event.preventDefault();

  switch (event.keyCode) {
    case key.up:
      drawTheLine(x, y, x, y - moveAmount);
      y -= moveAmount;
      break;

    case key.down:
      drawTheLine(x, y, x, y + moveAmount);
      y += moveAmount;
      break;

    case key.left:
      drawTheLine(x, y, x - moveAmount, y);
      x -= moveAmount;
      break;

    case key.right:
      drawTheLine(x, y, x + moveAmount, y);
      x += moveAmount;
      break;
    default:
      break;
  }
  console.log(x, y);
}

// clear / shake function

function shakeCanvas() {
  canvas.classList.toggle('shake');
  const localClickClass = canvas.classList;
  setTimeout(() => {
    localClickClass.remove('shake');
  }, 500);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// listen for arrow keys
shake.addEventListener('click', shakeCanvas);
document.addEventListener('keydown', keyDown);
