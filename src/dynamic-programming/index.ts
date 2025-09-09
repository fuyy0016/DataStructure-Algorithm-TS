/**
 * 动态规划算法题解模块
 * Dynamic Programming Algorithm Solutions
 */

// 动态规划算法分类
export const DP_CATEGORIES = {
  LINEAR: '线性DP',
  INTERVAL: '区间DP',
  TREE: '树形DP',
  STATE_MACHINE: '状态机DP',
  KNAPSACK: '背包问题'
} as const;

// 导出动态规划算法题目列表
export const DP_PROBLEMS = [
  'climbing-stairs',
  'house-robber',
  'coin-change',
  'longest-increasing-subsequence'
] as const;

export type DPProblem = typeof DP_PROBLEMS[number];