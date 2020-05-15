const promise = fetch('./json.json');
console.log(promise);

promise.then((res) => {
  console.log('res:', res);
  const textPormise = res.text();
  console.log('textPormise:', textPormise);

  textPormise.then((data) => console.log('fetch():', data));
});

function callback(data) {
  console.log('callback:', data);
}
