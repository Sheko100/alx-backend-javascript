#!/usr/bin/node

const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

it('should return the sum of the round of a and the round of b', function () {
  assert.equal(calculateNumber('SUM', 2.5, 3.5), 7);
});

it('should return the substraction of the round of a and the round of b', function () {
  assert.equal(calculateNumber('SUBSTRACT', 2.5, 3.5), -1);
});

it('should return the division of the round of a and the round of b', function () {
  assert.equal(calculateNumber('DIVIDE', 2.5, 3.5), 0.75);
});

it('should return Error while dividing by 0', function () {
  assert.equal(calculateNumber('DIVIDE', 2.5, 0), 'Error');
});

it('should return 0 if there are no arguments passed', function () {
  assert.equal(calculateNumber(), 0);
});

it('should thow an error if the type value is not from the correct optoins', function () {
  assert.throws(function () {
    calculateNumber('LOL', 2.5, 3.5);
  });
});
