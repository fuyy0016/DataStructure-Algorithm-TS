/**
 * 贪心算法题解模块
 * Greedy Algorithm Solutions
 */

// 贪心算法分类
export const GREEDY_CATEGORIES = {
  INTERVAL: '区间问题',
  ARRAY: '数组问题',
  STRING: '字符串问题',
  STOCK: '股票问题'
} as const;

// 导出贪心算法题目列表
export const GREEDY_PROBLEMS = [
  'jump-game',
  'gas-station',
  'candy',
  'non-overlapping-intervals'
] as const;

export type GreedyProblem = typeof GREEDY_PROBLEMS[number];