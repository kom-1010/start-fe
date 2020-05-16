const url = document.getElementById('url');
const btn = document.getElementById('btn');
const log = document.getElementById('log');

function printRespone(res) {
  const textPormise = res.text();
  textPormise.then((data) => {
    log.innerHTML = data;
  });
}

function printError(err) {
  log.innerHTML = err;
}

function btnClick() {
  fetch(url.value)
    .then((response) => printRespone(response))
    .catch((error) => printError(error));
}

btn.addEventListener('click', btnClick);
