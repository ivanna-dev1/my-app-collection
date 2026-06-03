function calc(x, y, operation) {
  let result;

  if (operation === '*') {
    result = x * y;
  }
  if (operation === '/') {
    result = x / y;
  }
  if (operation === '+') {
    result = x + y;
  }
  if (operation === '-') {
    result = x - y;
  } else {
    console.log('incorect operation');
    return;
  }

  console.log(result);
}

calc(47, 47, '?');
