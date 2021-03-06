function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //stop execute

    audio.currentTime = 0; //rewind to the start

    audio.play();

    key.classList.add('playing');
}

function playSound2(datakey) {
    console.log("log test");
    const audio = document.querySelector(`audio[data-key="${datakey}"]`);
    const key = document.querySelector(`.key[data-key="${datakey}"]`);

    if (!audio) return; //stop execute

    audio.currentTime = 0; //rewind to the start

    audio.play();

    key.classList.add('playing');
}

function removeTranstion(e) {
  if(e.propertyName !== 'transform') return; //skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTranstion));

window.addEventListener('keydown', playSound);
