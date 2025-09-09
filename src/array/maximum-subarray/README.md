# 53. 最大子数组和 (Maximum Subarray)

## 1. 题目描述

给你一个整数数组 `nums` ，请你找出一个具有最大和的**连续子数组**（子数组最少包含一个元素），返回其最大和。

**子数组**是数组中的一个连续部分。

**示例:**

```
输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

## 2. 代码实现

```typescript
/**
 * 解法一：暴力法
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
 */
export function maxSubArrayDivideConquer(nums: number[]): number {
  function maxSubArrayHelper(left: number, right: number): number {
    if (left === right) {
      return nums[left]!;
    }
    const mid = Math.floor((left + right) / 2);
    const leftMax = maxSubArrayHelper(left, mid);
    const rightMax = maxSubArrayHelper(mid + 1, right);
    
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
```

## 3. 方案对比

| 解法 | 优点 | 缺点 |
| --- | --- | --- |
| **暴力法** | 逻辑简单，容易理解。 | 时间复杂度非常高，无法通过大规模测试用例。 |
| **动态规划** | 时间复杂度最优，代码简洁高效。 | 思路稍显抽象，需要理解动态规划思想。 |
| **分治法** | 经典的算法思想，有助于理解递归。 | 时间复杂度略高于动态规划，且实现相对复杂。 |

## 4. 复杂度分析

- **暴力法**:
  - **时间复杂度**: O(n²)。两层循环枚举了所有可能的子数组起点和终点。
  - **空间复杂度**: O(1)。只使用了常数级别的额外空间。

- **动态规划 (Kadane算法)**:
  - **时间复杂度**: O(n)。仅需一次遍历数组。
  - **空间复杂度**: O(1)。只使用了常数级别的额外空间。

- **分治法**:
  - **时间复杂度**: O(n log n)。递归关系式为 T(n) = 2T(n/2) + O(n)。
  - **空间复杂度**: O(log n)。递归调用栈的深度。

## 5. 优化建议

动态规划（Kadane算法）是解决此问题的最优方法，其线性的时间复杂度和常数的空间复杂度已经达到了理论上的下限。因此，通常不需要进一步的性能优化。

## 6. 思想讲解

### 暴力法

暴力法通过枚举所有可能的连续子数组来找到和最大的那一个。它使用两层循环，外层循环 `i` 确定子数组的起始位置，内层循环 `j` 确定子数组的结束位置。对每个子数组，计算其和并与全局最大和 `maxSum` 进行比较和更新。

### 动态规划 (Kadane算法)

这是解决该问题的经典算法。核心思想是：**若当前元素之前的子数组和为负数，则对当前元素来说是累赘，不如从当前元素重新开始计算子数组和。**

我们定义 `currentSum` 为以当前元素结尾的连续子数组的最大和。遍历数组时，对于每个元素 `nums[i]`，我们有两种选择：
1. 将 `nums[i]` 加入到之前的子数组中，新的和为 `currentSum + nums[i]`。
2. 从 `nums[i]` 开始一个新的子数组，和就是 `nums[i]`。

我们选择这两种情况中较大的一个作为新的 `currentSum`，即 `currentSum = Math.max(nums[i], currentSum + nums[i])`。

同时，我们用另一个变量 `maxSum` 来记录全局的最大子数组和，每次更新 `currentSum` 后，都用 `maxSum = Math.max(maxSum, currentSum)` 来更新全局最大值。

### 分治法

分治法的思想是将原问题分解为子问题来解决。
1. **分解 (Divide)**: 将数组从中间位置 `mid` 分为左右两个子数组。
2. **解决 (Conquer)**: 递归地求解左子数组的最大子数组和 `leftMax` 和右子数组的最大子数组和 `rightMax`。
3. **合并 (Combine)**: 最大子数组和可能存在于三个地方：
   - 完全位于左子数组中（即 `leftMax`）。
   - 完全位于右子数组中（即 `rightMax`）。
   - **跨越中点**。这个跨越中点的最大子数组和 `crossSum` 需要单独计算。计算方法是从 `mid` 向左扫描找到最大和，再从 `mid+1` 向右扫描找到最大和，两者相加。

最终的结果就是 `leftMax`, `rightMax`, 和 `crossSum` 中的最大值。