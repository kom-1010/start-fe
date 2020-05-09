const $box = document.querySelector('.box');
boxDrag($box);
const $box1 = document.querySelector('.box1');
// eslint-disable-next-line no-use-before-define
boxDrag($box1);

function boxDrag(element) {
  let currentX;
  let nextX;
  let currentY;
  let nextY;
  let isDown = false;

  element.addEventListener('mousedown', (event) => {
    currentX = event.clientX;
    currentY = event.clientY;
    isDown = true;
  });

  element.addEventListener('mouseup', (event) => {
    isDown = false;
  });

  element.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    nextX = currentX - event.clientX;
    nextY = currentY - event.clientY;
    currentX = event.clientX;
    currentY = event.clientY;
    element.style.left = `${element.offsetLeft - nextX}px`;
    element.style.top = `${element.offsetTop - nextY}px`;
  });
}
