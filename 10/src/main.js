import sum from './sum';
import avg from './avg';
import random from './random';

document.getElementById('debug').innerHTML = sum(100, 2);
document.getElementById('debug').innerHTML += `<br>avg(1,2,3,4) => ${avg(
  1,
  2,
  3,
  4,
)}`;
document.getElementById('debug').innerHTML += `<br>avg(1,2) => ${avg(1, 2)}`;
document.getElementById('debug').innerHTML += `<br>avg(1,2,3,4,5,6) => ${avg(
  1,
  2,
  3,
  4,
  5,
  6,
)}`;

document.getElementById('debug').innerHTML += `<br>avg(1,'a',2) => ${avg(
  1,
  'a',
  2,
)}`;

document.getElementById('debug').innerHTML += `<br>avg([1,2,3]) => ${avg([
  1,
  2,
  3,
])}`;

document.getElementById('debug').innerHTML += `<br>random(0, 100) => ${random(
  1,
  100,
)}`;

document.getElementById('debug').innerHTML += `<br>random(3) => ${random(3)}`;

document.getElementById('debug').innerHTML += `<br>random(0, 'a') => ${random(
  1,
  'a',
)}`;
