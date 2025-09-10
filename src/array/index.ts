/**
 * 数组算法题解模块
 * Array Algorithm Solutions
 */

// 导出算法实现
export * from './two-sum/two-sum';
export * from './best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock';
export * from './maximum-subarray/maximum-subarray';
export * from './merge-sorted-array/merge-sorted-array';
export * from './remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array';
export * from './longest-continuous-increasing-subsequence';

// 数组算法分类
export const ARRAY_CATEGORIES = {
  BASIC: '基础操作',
  TWO_POINTERS: '双指针',
  SLIDING_WINDOW: '滑动窗口',
  BINARY_SEARCH: '二分查找',
  SORTING: '排序相关',
  DYNAMIC_PROGRAMMING: '动态规划',
  GREEDY: '贪心算法',
} as const;

// 导出数组算法题目列表
export const ARRAY_PROBLEMS = [
  'two-sum',
  'best-time-to-buy-and-sell-stock',
  'maximum-subarray',
  'merge-sorted-array',
  'remove-duplicates-from-sorted-array',
  'longest-continuous-increasing-subsequence',
] as const;

export type ArrayProblem = typeof ARRAY_PROBLEMS[number];