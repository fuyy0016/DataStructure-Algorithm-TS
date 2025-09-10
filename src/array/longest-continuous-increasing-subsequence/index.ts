/**
 * 674. 最长连续递增序列
 * Longest Continuous Increasing Subsequence
 * @see https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
 */

// 贪心算法
export function findLengthOfLCIS(nums: number[]): number {
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i]! <= nums[i - 1]!) {
      start = i;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

// 动态规划
export function findLengthOfLCISDP(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  const dp = new Array(nums.length).fill(1);
  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) {
      dp[i] = dp[i - 1]! + 1;
    }
    maxLength = Math.max(maxLength, dp[i]!);
  }
  return maxLength;
}

// 动态规划（空间优化）
export function findLengthOfLCISDPOptimized(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let currentLength = 1;
  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) {
      currentLength++;
    } else {
      currentLength = 1;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}