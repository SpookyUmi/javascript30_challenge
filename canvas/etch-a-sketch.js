// Select the elements on the page - canvas, shake button
const shake = document.querySelector('.shake');
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');

// Setup our canvas for drawing
let x = 150;
let y = 150;

// write a draw function

function drawTheLine(xStart, yStart, xEnd, yEnd) {
  ctx.beginPath();
  ctx.strokeStyle = '#8E4585';
  ctx.lineWidth = 10;
  ctx.lineJoin = 'round';
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
  const moveAmount = 4;

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
      console.log(x, y);
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
