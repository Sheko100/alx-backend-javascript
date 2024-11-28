#!/usr/bin/node

function calculateNumber (type = 'SUM', a = 0, b = 0) {
  const num1 = Number(a.toFixed());
  const num2 = Number(b.toFixed());
  let result = 0;

  switch (type) {
    case 'SUM':
      result = num1 + num2;
      break;
    case 'SUBSTRACT':
      result = num1 - num2;
      break;
    case 'DIVIDE':
      if (num2 === 0) {
        result = 'Error';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      throw TypeError('type param value should be a string and one of the correct options');
  }

  return result;
}

module.exports = calculateNumber;
