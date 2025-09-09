/**
 * 回溯算法题解模块
 * Backtracking Algorithm Solutions
 */

// 回溯算法分类
export const BACKTRACKING_CATEGORIES = {
  PERMUTATION: '排列',
  COMBINATION: '组合',
  SUBSET: '子集',
  PARTITION: '分割',
  CHESS: '棋盘问题'
} as const;

// 导出回溯算法题目列表
export const BACKTRACKING_PROBLEMS = [
  'permutations',
  'combinations',
  'subsets',
  'n-queens'
] as const;

export type BacktrackingProblem = typeof BACKTRACKING_PROBLEMS[number];