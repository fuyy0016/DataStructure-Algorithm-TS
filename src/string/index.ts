/**
 * 字符串算法题解模块
 * String Algorithm Solutions
 */

// 字符串算法分类
export const STRING_CATEGORIES = {
  BASIC: '基础操作',
  PALINDROME: '回文字符串',
  SUBSTRING: '子字符串',
  PATTERN_MATCHING: '模式匹配',
  SLIDING_WINDOW: '滑动窗口'
} as const;

// 导出字符串算法题目列表
export const STRING_PROBLEMS = [
  'valid-palindrome',
  'longest-common-prefix',
  'reverse-string',
  'first-unique-character'
] as const;

export type StringProblem = typeof STRING_PROBLEMS[number];