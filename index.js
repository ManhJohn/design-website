let leftEye = document.querySelector('.left-eye');
let rightEye = document.querySelector('.right-eye');

setInterval(() => {
  leftEye.classList.toggle('close-animation');
}, 2000);

setInterval(() => {
  rightEye.classList.toggle('close-animation');
}, 2000);