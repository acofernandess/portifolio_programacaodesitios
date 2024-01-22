const goku = document.querySelector('.goku');
const madimbu = document.querySelector('.madimbu');
const pulo = () => {
goku.classList.add('pulo');
setTimeout(() => {
goku.classList.remove('pulo');
}, 500);
}
const loop = setInterval(()=>{
console.log(loop);
const madimbuPosition = madimbu.offsetLeft;
const gokuPosition = 
+window.getComputedStyle(goku).bottom.replace('px', '');
if (madimbuPosition <= 120 && madimbuPosition >= 0 && gokuPosition < 
100) { 
madimbu.style.animation = 'none';
madimbu.style.left = `${madimbuPosition}px`;
goku.style.animation = 'none';
goku.style.bottom = `${gokuPosition}px`;
goku.src = './IMG_ADAPTACAO/gameover1.gif';
goku.style.width ='200px';
goku.style.marginLeft = '150px';
clearInterval(loop);
}
}, 10);

document.addEventListener('keydown', pulo)