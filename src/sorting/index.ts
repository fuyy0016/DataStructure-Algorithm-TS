/**
 * 排序算法题解模块
 * Sorting Algorithm Solutions
 */

// 排序算法分类
export const SORTING_CATEGORIES = {
  COMPARISON: '比较排序',
  NON_COMPARISON: '非比较排序',
  STABLE: '稳定排序',
  IN_PLACE: '原地排序'
} as const;

// 导出排序算法题目列表
export const SORTING_PROBLEMS = [
  'merge-sort',
  'quick-sort',
  'heap-sort',
  'counting-sort'
] as const;

export type SortingProblem = typeof SORTING_PROBLEMS[number];