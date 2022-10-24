let frames;
let currentFrame = 0;
let idInterval;
// frames[0].style.display = 'block';

(function DOMBuild() {
 let previewContainer = document.getElementById('preview-container');
 previewContainer.addEventListener('mousemove', (e) => {
   rotate(-e.movementX);

 })

 previewContainer.addEventListener('click', (e) => {
  clearInterval(idInterval);
 })


 for (let i = 0; i < 71; i++) {
  const link = `https://3d0.elmir.ua/models/17706/17706955/${i}_1.jpg`;
  const img = `<img class="frame" src="${link}" alt="">`;
  previewContainer.insertAdjacentHTML('beforeend', img);
 }
 frames = document.querySelectorAll('.frame');
 frames[0].classList.add('current');
 idInterval = setInterval(() => {
  rotate(-1);
 }, 100);
}());

function rotate(direction) {
 currentFrame += direction;
 if (currentFrame > frames.length - 1) {
  currentFrame = 0;
 }

 if (currentFrame < 0) {
  currentFrame = frames.length - 1;
 }
 document.querySelector('.current').classList.remove('current');
 frames[currentFrame].classList.add('current');
}
