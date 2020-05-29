function avg() {
  let sum = 0;
  let count = 0;
  // eslint-disable-next-line no-array-constructor
  let paramArray = new Array();

  // eslint-disable-next-line prefer-rest-params
  if (arguments[0] instanceof Array) {
    // parameter is array.
    for (let i = 0; i < arguments.length; i += 1) {
      // eslint-disable-next-line prefer-rest-params
      paramArray.push(arguments[0][i]);
    }
  } else {
    // parameter is not array.
    // eslint-disable-next-line prefer-rest-params
    paramArray = arguments;
  }

  for (let i = 0; i < paramArray.length; i += 1) {
    if (!Number.isInteger(paramArray[i])) {
      // parameter has not only integer.
      // eslint-disable-next-line no-continue
      continue;
    }
    sum += paramArray[i];
    count += 1;
  }
  return sum / count;
}

export default avg;
