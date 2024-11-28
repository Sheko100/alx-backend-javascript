#!/usr/bin/node

function calculateNumber (a=0, b=0) {
  const num1 = Number(a.toFixed());
  const num2 = Number(b.toFixed());

  return num1 + num2;
}

module.exports = calculateNumber;
