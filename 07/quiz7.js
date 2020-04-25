let life, score;
const $bug = document.getElementById("bug");
const $point = document.getElementById("point");
const $life = document.getElementById("life");

playGame();

function playGame(){
    life = 10, score = 0;
    $bug.addEventListener('click', clickBug);
    setInterval(notClickBug, 2000);
}

function moveBug(){
    const MIN_X = 0, MIN_Y = 0, MAX_X = 380, MAX_Y = 380;
    let x = Math.floor(Math.random() * (MAX_X - MIN_X + 1)) + MIN_X;
    let y = Math.floor(Math.random() * (MAX_Y - MIN_Y + 1)) + MIN_Y;
    $bug.style.left = x + 'px';
    $bug.style.top = y + 'px';
}

function clickBug(){
    moveBug();
    score++;
    $point.innerHTML = score;
}

function notClickBug(){
    moveBug();
    life -= 1;
    $life.innerHTML = life;

    if(life==0){
        alert("game over!!!");
        playGame();
    }
}