#!/usr/bin/node

const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

it('should return the result of the round of a plus the round of b', function () {
  assert.equal(calculateNumber(2.5, 3.5), 7);
});
