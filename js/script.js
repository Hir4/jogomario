const mario = document.querySelector('.mario');
const mario = document.querySelector('.pipe');

const jump= () => {
    mario.classList.add('jump');

    setTimeout(() => {
    mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    console.log('loop')

    const pipePosition =pipe.offsetLeft;
    const pipePosition =+window.getComputedStyle(mario).bottom.replace('px', '');    
    
    console.log(marioPosition);
    
    if (pipePosition < or = 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = '${pipeposition}px';
    
    pipe.style.animation = 'none';
    pipe.style.bottom = '${marioposition}px';
    
    mario.src = './imagens/game-over.png';
    mario.style.width = '75px'
    mario.style.marginleft = '50px'

    clearInterval(loop);    

}, 10);   

document.addEventListener('keydown', jump); 