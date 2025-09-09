import { describe, test, expect } from 'vitest';
import { mergeSortedArraySort, mergeSortedArrayTwoPointers, mergeSortedArrayReverse } from '../../src/array/merge-sorted-array/merge-sorted-array';

describe('合并两个有序数组', () => {
  const getMocks = () => ([
    { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3, expected: [1, 2, 2, 3, 5, 6] },
    { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
    { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
    { nums1: [2, 0], m: 1, nums2: [1], n: 1, expected: [1, 2] },
  ]);

  test('合并后排序', () => {
    getMocks().forEach(({ nums1, m, nums2, n, expected }) => {
      mergeSortedArraySort(nums1, m, nums2, n);
      expect(nums1).toEqual(expected);
    });
  });

  test('双指针（从前往后）', () => {
    getMocks().forEach(({ nums1, m, nums2, n, expected }) => {
      mergeSortedArrayTwoPointers(nums1, m, nums2, n);
      expect(nums1).toEqual(expected);
    });
  });

  test('双指针（从后往前）', () => {
    getMocks().forEach(({ nums1, m, nums2, n, expected }) => {
      mergeSortedArrayReverse(nums1, m, nums2, n);
      expect(nums1).toEqual(expected);
    });
  });
});