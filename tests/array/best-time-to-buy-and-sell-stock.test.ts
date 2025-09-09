import { describe, test, expect } from 'vitest';
import { maxProfitBruteForce, maxProfitOnePass } from '../../src/array/best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock';

describe('买卖股票的最佳时机', () => {
  const testCases = [
    { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
    { prices: [7, 6, 4, 3, 1], expected: 0 },
    { prices: [1], expected: 0 },
    { prices: [2, 4, 1], expected: 2 },
  ];

  test('暴力法', () => {
    testCases.forEach(({ prices, expected }) => {
      expect(maxProfitBruteForce(prices)).toBe(expected);
    });
  });

  test('一次遍历', () => {
    testCases.forEach(({ prices, expected }) => {
      expect(maxProfitOnePass(prices)).toBe(expected);
    });
  });
});