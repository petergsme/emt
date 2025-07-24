import { expect, test } from 'vitest';
import { sum, isTruthy } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('null to be false', () => {
  expect(isTruthy(null)).toBe(false);
});

test('random string to be true', () => {
  expect(Math.random() + '').toBe(true);
});
