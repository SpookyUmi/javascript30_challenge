const keys = document.querySelectorAll('.key');

function togglePlaying(key) {
  key.classList.toggle('playing');
  const localKeyClasses = key.classList;
  setTimeout(() => {
    localKeyClasses.remove('playing')
  }, 100);
  playAudio(key.dataset.key);
}

function playAudio(keyCode) {
  const audioFile = document.querySelector(`audio[data-key = "${keyCode}"]`)
  audioFile.play();
  audioFile.currentTime = 0;
}

document.addEventListener('keydown', event => {
    keys.forEach(key => {
      if (event.keyCode == key.dataset.key) {
        togglePlaying(key);
      }
    });
});
