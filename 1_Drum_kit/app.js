var clavier;
function removeTransition(e)
{
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function playSound(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //Rewind to the start
    audio.play();
    key.classList.add('playing');
}

clavier = Array.from(document.querySelectorAll('.key'));
clavier.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);