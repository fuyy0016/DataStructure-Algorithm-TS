/**
 * 数学算法题解模块
 * Math Algorithm Solutions
 */

// 数学算法分类
export const MATH_CATEGORIES = {
  NUMBER_THEORY: '数论',
  GEOMETRY: '几何',
  PROBABILITY: '概率',
  COMBINATORICS: '组合数学',
  LINEAR_ALGEBRA: '线性代数'
} as const;

// 导出数学算法题目列表
export const MATH_PROBLEMS = [
  'palindrome-number',
  'reverse-integer',
  'power-of-two',
  'factorial-trailing-zeroes'
] as const;

export type MathProblem = typeof MATH_PROBLEMS[number];