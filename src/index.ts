/**
 * DataStructure-Algorithm-TS
 * LeetCode练习代码仓库主入口文件
 * 
 * 本项目包含以下算法分类：
 * - 数组 (Array)
 * - 字符串 (String) 
 * - 链表 (LinkedList)
 * - 栈和队列 (StackQueue)
 * - 树 (Tree)
 * - 图 (Graph)
 * - 动态规划 (DynamicProgramming)
 * - 回溯算法 (Backtracking)
 * - 贪心算法 (Greedy)
 * - 排序算法 (Sorting)
 * - 搜索算法 (Search)
 * - 数学 (Math)
 */

// 导出所有算法模块
export * from './array';
export * from './string';
export * from './linked-list';
export * from './stack-queue';
export * from './tree';
export * from './graph';
export * from './dynamic-programming';
export * from './backtracking';
export * from './greedy';
export * from './sorting';
export * from './search';
export * from './math';
export * from './utils';

// 项目信息
export const PROJECT_INFO = {
  name: 'DataStructure-Algorithm-TS',
  version: '1.0.0',
  description: 'LeetCode练习代码仓库 - TypeScript实现',
  author: 'Your Name'
} as const;

console.log(`欢迎使用 ${PROJECT_INFO.name} v${PROJECT_INFO.version}`);
console.log(PROJECT_INFO.description);