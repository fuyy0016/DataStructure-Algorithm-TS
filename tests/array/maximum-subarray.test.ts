import { describe, test, expect } from 'vitest';
import { maxSubArrayBruteForce, maxSubArrayDP, maxSubArrayDivideConquer } from '../../src/array/maximum-subarray/maximum-subarray';

describe('最大子数组和', () => {
  const testCases = [
    { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { nums: [1], expected: 1 },
    { nums: [5, 4, -1, 7, 8], expected: 23 },
    { nums: [-1], expected: -1 },
  ];

  test('暴力法', () => {
    testCases.forEach(({ nums, expected }) => {
      expect(maxSubArrayBruteForce(nums)).toBe(expected);
    });
  });

  test('动态规划', () => {
    testCases.forEach(({ nums, expected }) => {
      expect(maxSubArrayDP(nums)).toBe(expected);
    });
  });

  test('分治法', () => {
    testCases.forEach(({ nums, expected }) => {
      expect(maxSubArrayDivideConquer(nums)).toBe(expected);
    });
  });
});