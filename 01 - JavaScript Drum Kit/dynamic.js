/* let toggleNavButton = document.querySelector('.togglenav');
toggleNavButton.addEventListener('click', () => {
  document.querySelector('#menu').classList.toggle('open')
}) */

//(event.key === 'a')

const key = document.querySelector('.key');

/* function pressKey(event) {
  if (event.type === 'click' || event.code === 'KeyA') {
    console.log('You clicked the A');
  }
} */

/* function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked the A');
  }
}

transformButton.addEventListener('keyup', handlePhotoClick);
transformButton.addEventListener('click', handlePhotoClick); */

/* key.addEventListener('keydown', () => {
  document.querySelector('.key').classList.add('playing')
})

key.addEventListener('click', () => {
  document.querySelector('.key').classList.add('playing')
}) */

function pressKey(event) {
  if (event.code === 'KeyA'){
    key.classList.toggle('playing');
  }
}

key.addEventListener('keydown', pressKey);
