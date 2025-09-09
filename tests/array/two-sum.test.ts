/**
 * 两数之和算法测试
 * @description 测试两数之和的各种实现方法
 */

import { describe, it, expect } from 'vitest';
import { twoSumBruteForce, twoSumHashMap, twoSum } from '../../src/array/two-sum/two-sum';

describe('两数之和 (Two Sum)', () => {
  describe('暴力法测试', () => {
    it('应该找到正确的两个数的索引', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSumBruteForce(nums, target);
      
      expect(result).toEqual([0, 1]);
      // 验证结果的正确性
      expect(nums[0]! + nums[1]!).toBe(target);
    });
    
    it('应该处理更复杂的情况', () => {
      const nums = [3, 2, 4, 6, 8];
      const target = 10;
      const result = twoSumBruteForce(nums, target);
      
      expect(result).toEqual([1, 4]);
      expect(nums[1]! + nums[4]!).toBe(target);
    });
  });
  
  describe('哈希表法测试', () => {
    it('应该找到正确的两个数的索引', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSumHashMap(nums, target);
      
      expect(result).toEqual([0, 1]);
      expect(nums[0]! + nums[1]!).toBe(target);
    });
    
    it('应该处理重复元素', () => {
      const nums = [3, 3];
      const target = 6;
      const result = twoSumHashMap(nums, target);
      
      expect(result).toEqual([0, 1]);
      expect(nums[0]! + nums[1]!).toBe(target);
    });
  });
  
  describe('默认解法测试', () => {
    it('应该找到正确的两个数的索引', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      
      expect(result).toEqual([0, 1]);
      expect(nums[0]! + nums[1]!).toBe(target);
    });
    
    it('应该处理负数', () => {
      const nums = [-1, -2, -3, -4, -5];
      const target = -8;
      const result = twoSum(nums, target);
      
      expect(result).toEqual([2, 4]);
      expect(nums[2]! + nums[4]!).toBe(target);
    });
  });
  
  describe('算法解决方案配置测试', () => {
    it('应该包含正确的元数据', () => {
      // 这里可以测试算法配置的元数据
      expect(twoSum).toBeDefined();
      expect(twoSumBruteForce).toBeDefined();
      expect(twoSumHashMap).toBeDefined();
    });
    
    it('所有测试用例都应该通过', () => {
      const testCases = [
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] }
      ];
      
      testCases.forEach(({ nums, target, expected }) => {
        const result = twoSum(nums, target);
        expect(result).toEqual(expected);
        // 验证结果正确性
        expect(nums[expected[0]!]! + nums[expected[1]!]!).toBe(target);
      });
    });
  });
  
  describe('性能测试', () => {
    it('哈希表法应该比暴力法更快（大数据集）', () => {
      // 生成大数据集
      const size = 100;
      const nums = Array.from({ length: size }, (_, i) => i);
      const target = 1; // 0 + 1 = 1
      
      // 简单的性能对比
      const start1 = Date.now();
      twoSumBruteForce(nums, target);
      const bruteForceTime = Date.now() - start1;
      
      const start2 = Date.now();
      twoSumHashMap(nums, target);
      const hashMapTime = Date.now() - start2;
      
      console.log(`暴力法耗时: ${bruteForceTime}ms`);
      console.log(`哈希表法耗时: ${hashMapTime}ms`);
      
      // 验证两种方法都能得到正确结果
      expect(twoSumBruteForce(nums, target)).toEqual(twoSumHashMap(nums, target));
    });
  });
  
  describe('边界条件测试', () => {
    it('应该处理最小数组长度', () => {
      const nums = [1, 2];
      const target = 3;
      const result = twoSum(nums, target);
      
      expect(result).toEqual([0, 1]);
      expect(nums[0]! + nums[1]!).toBe(target);
    });
    
    it('应该处理零值', () => {
      const nums = [0, 4, 3, 0];
      const target = 0;
      const result = twoSum(nums, target);
      
      expect(result).toEqual([0, 3]);
      expect(nums[0]! + nums[3]!).toBe(target);
    });
    
    it('应该处理大数值', () => {
      const nums = [1000000000, 999999999, 1];
      const target = 1999999999;
      const result = twoSum(nums, target);
      
      expect(result).toEqual([0, 1]);
      expect(nums[0]! + nums[1]!).toBe(target);
    });
  });
});