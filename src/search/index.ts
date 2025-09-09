/**
 * 搜索算法题解模块
 * Search Algorithm Solutions
 */

// 搜索算法分类
export const SEARCH_CATEGORIES = {
  BINARY_SEARCH: '二分查找',
  DEPTH_FIRST_SEARCH: '深度优先搜索',
  BREADTH_FIRST_SEARCH: '广度优先搜索',
  BACKTRACKING: '回溯搜索'
} as const;

// 导出搜索算法题目列表
export const SEARCH_PROBLEMS = [
  'binary-search',
  'search-in-rotated-sorted-array',
  'find-first-and-last-position',
  'search-2d-matrix'
] as const;

export type SearchProblem = typeof SEARCH_PROBLEMS[number];