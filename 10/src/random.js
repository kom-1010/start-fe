function random(min, max) {
  if (!max) {
    // eslint-disable-next-line no-param-reassign
    max = min;
    // eslint-disable-next-line no-param-reassign
    min = 0;
  }
  if (!(Number.isInteger(min) && Number.isInteger(max))) return -1;
  const ran = Math.floor(Math.random() * (max - min + 1)) + min;
  return ran;
}

export default random;
