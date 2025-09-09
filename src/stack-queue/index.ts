/**
 * 栈和队列算法题解模块
 * Stack and Queue Algorithm Solutions
 */

// 栈和队列算法分类
export const STACK_QUEUE_CATEGORIES = {
  STACK: '栈',
  QUEUE: '队列',
  MONOTONIC_STACK: '单调栈',
  PRIORITY_QUEUE: '优先队列'
} as const;

// 导出栈和队列算法题目列表
export const STACK_QUEUE_PROBLEMS = [
  'valid-parentheses',
  'implement-queue-using-stacks',
  'min-stack',
  'daily-temperatures'
] as const;

export type StackQueueProblem = typeof STACK_QUEUE_PROBLEMS[number];