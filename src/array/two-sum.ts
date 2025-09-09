/**
 * LeetCode 1. 两数之和
 * Two Sum
 * 
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

import { AlgorithmSolution } from '../utils';

/**
 * 解法一：暴力法
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]! + nums[j]! === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/**
 * 解法二：哈希表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
export function twoSumHashMap(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    
    if (map.has(complement)) {
      const complementIndex = map.get(complement);
      if (complementIndex !== undefined) {
        return [complementIndex, i];
      }
    }
    
    map.set(nums[i]!, i);
  }
  
  return [];
}

// 默认导出最优解
export const twoSum = twoSumHashMap;

// 算法解决方案配置
export const twoSumSolution: AlgorithmSolution<[number[], number], number[]> = {
  name: '两数之和',
  description: '给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  solution: twoSum,
  testCases: [
    {
      input: [[2, 7, 11, 15], 9],
      expected: [0, 1],
      description: '基本测试用例：nums = [2,7,11,15], target = 9'
    },
    {
      input: [[3, 2, 4], 6],
      expected: [1, 2],
      description: '测试用例2：nums = [3,2,4], target = 6'
    },
    {
      input: [[3, 3], 6],
      expected: [0, 1],
      description: '测试用例3：nums = [3,3], target = 6'
    },
    {
      input: [[-1, -2, -3, -4, -5], -8],
      expected: [2, 4],
      description: '负数测试用例：nums = [-1,-2,-3,-4,-5], target = -8'
    }
  ]
};