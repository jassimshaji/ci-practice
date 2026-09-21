const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('./sum');

test('sum adds two positive numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum adds negative numbers', () => {
  assert.equal(sum(-1, -4), -5);
});

test('sum adds a positive and a negative number', () => {
  assert.equal(sum(10, -3), 7);
});

test('sum with zero returns the other number', () => {
  assert.equal(sum(0, 7), 7);
});

test('sum of two zeros is zero', () => {
  assert.equal(sum(0, 0), 0);
});
