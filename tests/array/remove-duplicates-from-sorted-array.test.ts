import { describe, test, expect } from 'vitest';
import { removeDuplicatesBruteForce, removeDuplicatesTwoPointers, removeDuplicatesSet } from '../../src/array/remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array';

describe('删除有序数组中的重复项', () => {
  const getMocks = () => ([
    { nums: [1, 1, 2], expected: 2, expectedNums: [1, 2] },
    { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5, expectedNums: [0, 1, 2, 3, 4] },
    { nums: [], expected: 0, expectedNums: [] },
    { nums: [1, 1, 1], expected: 1, expectedNums: [1] },
  ]);

  test('暴力法', () => {
    getMocks().forEach(({ nums, expected, expectedNums }) => {
      const k = removeDuplicatesBruteForce(nums);
      expect(k).toBe(expected);
      for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i]);
      }
    });
  });

  test('双指针法', () => {
    getMocks().forEach(({ nums, expected, expectedNums }) => {
      const k = removeDuplicatesTwoPointers(nums);
      expect(k).toBe(expected);
      for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i]);
      }
    });
  });

  test('Set去重法', () => {
    getMocks().forEach(({ nums, expected, expectedNums }) => {
      const k = removeDuplicatesSet(nums);
      expect(k).toBe(expected);
      for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i]);
      }
    });
  });
});