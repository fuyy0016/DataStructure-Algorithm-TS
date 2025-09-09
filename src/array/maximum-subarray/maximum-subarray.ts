/**
 * 53. 最大子数组和
 * Maximum Subarray
 * 
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 */

/**
 * 解法一：暴力法
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
export function maxSubArrayBruteForce(nums: number[]): number {
  let maxSum = nums[0]!;
  
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]!;
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  
  return maxSum;
}

/**
 * 解法二：动态规划（Kadane算法）
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function maxSubArrayDP(nums: number[]): number {
  let maxSum = nums[0]!;
  let currentSum = nums[0]!;
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i]!, currentSum + nums[i]!);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

/**
 * 解法三：分治法
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(log n)
 */
export function maxSubArrayDivideConquer(nums: number[]): number {
  function maxSubArrayHelper(left: number, right: number): number {
    if (left === right) {
      return nums[left]!;
    }
    
    const mid = Math.floor((left + right) / 2);
    const leftMax = maxSubArrayHelper(left, mid);
    const rightMax = maxSubArrayHelper(mid + 1, right);
    
    // 计算跨越中点的最大子数组和
    let leftSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i = mid; i >= left; i--) {
      sum += nums[i]!;
      leftSum = Math.max(leftSum, sum);
    }
    
    let rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i]!;
      rightSum = Math.max(rightSum, sum);
    }
    
    const crossSum = leftSum + rightSum;
    
    return Math.max(leftMax, rightMax, crossSum);
  }
  
  return maxSubArrayHelper(0, nums.length - 1);
}

/**
 * 默认解法
 */
export const maxSubArray = maxSubArrayDP;

/**
 * 算法解决方案配置
 */
export const maximumSubarraySolutions = {
  bruteForce: {
    name: '暴力法',
    func: maxSubArrayBruteForce,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: '枚举所有可能的子数组'
  },
  dp: {
    name: '动态规划',
    func: maxSubArrayDP,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: 'Kadane算法，动态规划求解'
  },
  divideConquer: {
    name: '分治法',
    func: maxSubArrayDivideConquer,
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(log n)',
    description: '分治算法，递归求解'
  }
} as const;

export type MaximumSubarraySolution = keyof typeof maximumSubarraySolutions;