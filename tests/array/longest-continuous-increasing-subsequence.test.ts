import { describe, it, expect } from 'vitest';
import {
  findLengthOfLCIS,
  findLengthOfLCISDP,
  findLengthOfLCISDPOptimized,
} from '../../src/array/longest-continuous-increasing-subsequence';

describe('最长连续递增序列', () => {
  const testCases = [
    {
      nums: [1, 3, 5, 4, 7],
      expected: 3,
    },
    {
      nums: [2, 2, 2, 2, 2],
      expected: 1,
    },
    {
      nums: [1, 2, 3, 4, 5],
      expected: 5,
    },
    {
      nums: [5, 4, 3, 2, 1],
      expected: 1,
    },
    {
      nums: [],
      expected: 0,
    },
    {
      nums: [1],
      expected: 1,
    },
    {
      nums: [1, 3, 2, 4, 5, 6],
      expected: 4,
    },
  ];

  describe('贪心算法', () => {
    testCases.forEach(({ nums, expected }) => {
      it(`nums: ${JSON.stringify(nums)}, 期望: ${expected}`, () => {
        expect(findLengthOfLCIS(nums)).toBe(expected);
      });
    });
  });

  describe('动态规划', () => {
    testCases.forEach(({ nums, expected }) => {
      it(`nums: ${JSON.stringify(nums)}, 期望: ${expected}`, () => {
        expect(findLengthOfLCISDP(nums)).toBe(expected);
      });
    });
  });

  describe('动态规划（空间优化）', () => {
    testCases.forEach(({ nums, expected }) => {
      it(`nums: ${JSON.stringify(nums)}, 期望: ${expected}`, () => {
        expect(findLengthOfLCISDPOptimized(nums)).toBe(expected);
      });
    });
  });
});