# 674.最长连续递增序列

## 题目描述

给定一个未经排序的整数数组，找到最长且 **连续递增的子序列**，并返回该序列的长度。

连续递增的子序列 可以由两个下标 `l` 和 `r`（`l < r`）确定，如果对于每个 `l <= i < r`，都有 `nums[i] < nums[i+1]`，那么子序列 `[nums[l], nums[l+1], ..., nums[r]]` 就是连续递增子序列。

## 代码实现

```typescript
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
```

## 方案对比

1.  **贪心算法**
    *   **优点**：实现简单，空间复杂度为 O(1)，是解决此问题的最优方法之一。
    *   **缺点**：思路需要一些转换，不如动态规划直观。

2.  **动态规划**
    *   **优点**：思路清晰，状态转移方程明确，容易理解。
    *   **缺点**：需要 O(n) 的额外空间来存储 `dp` 数组。

3.  **动态规划（空间优化）**
    *   **优点**：在保持动态规划思路的同时，将空间复杂度降至 O(1)，性能与贪心算法相当。
    *   **缺点**：无明显缺点，是动态规划解法的理想优化。

## 复杂度分析

### 贪心算法

-   **时间复杂度**：O(n)，其中 n 是数组 `nums` 的长度。我们只需要遍历数组一次。
-   **空间复杂度**：O(1)。我们只使用了常数个额外的变量。

### 动态规划

-   **时间复杂度**：O(n)，其中 n 是数组 `nums` 的长度。我们只需要遍历数组一次。
-   **空间复杂度**：O(n)。我们需要一个大小为 n 的 `dp` 数组来存储中间状态。

### 动态规划（空间优化）

-   **时间复杂度**：O(n)。同样只需遍历数组一次。
-   **空间复杂度**：O(1)。使用单个变量代替了 `dp` 数组。

## 优化建议

-   对于动态规划解法，可以进行空间优化。由于 `dp[i]` 的值只与 `dp[i-1]` 相关，我们可以用一个变量来代替 `dp` 数组，从而将空间复杂度降至 O(1)。优化后的动态规划实际上与贪心算法的思路趋于一致。**（已实现 `findLengthOfLCISDPOptimized`）**

## 思想讲解

### 贪心算法

贪心算法的核心思想是 **局部最优解能导出全局最优解**。对于此问题，我们从头开始遍历数组，并记录当前连续递增子序列的起点 `start`。

1.  初始化最大长度 `maxLength` 为 0，当前连续递增子序列的起始索引 `start` 为 0。
2.  遍历数组，对于每个元素 `nums[i]`：
    *   如果 `nums[i]` **不大于** 前一个元素 `nums[i-1]`，说明连续递增的序列中断了。此时，我们将 `start` 更新为当前索引 `i`。
    *   无论序列是否中断，当前索引 `i` 对应的连续递增序列的长度为 `i - start + 1`。我们用这个长度更新 `maxLength`。
3.  遍历结束后，`maxLength` 即为所求的最长连续递增子序列的长度。

### 动态规划

动态规划的思路是 **通过子问题的解来构建原问题的解**。

1.  我们定义一个 `dp` 数组，其中 `dp[i]` 表示以 `nums[i]` **结尾** 的最长连续递增子序列的长度。
2.  **状态转移方程**：
    *   如果 `nums[i] > nums[i-1]`，说明 `nums[i]` 可以接在以 `nums[i-1]` 结尾的连续递增序列后面，所以 `dp[i] = dp[i-1] + 1`。
    *   如果 `nums[i] <= nums[i-1]`，说明连续递增序列中断了，此时以 `nums[i]` 结尾的连续递增序列只有它自己，所以 `dp[i] = 1`。
3.  `dp` 数组中的最大值就是整个数组的最长连续递增子序列的长度。

### 动态规划（空间优化）

空间优化的核心在于，我们发现计算 `dp[i]` 时只依赖于 `dp[i-1]`。因此，没有必要存储整个 `dp` 数组。我们可以用一个变量 `currentLength` 来记录 **以当前元素结尾** 的最长连续递增序列的长度。

1.  初始化 `currentLength` 和 `maxLength` 为 1。
2.  遍历数组（从第二个元素开始）：
    *   如果 `nums[i] > nums[i-1]`，说明连续性未中断，`currentLength` 加 1。
    *   如果 `nums[i] <= nums[i-1]`，说明连续性中断，以 `nums[i]` 开头的新的连续递增序列长度为 1，因此重置 `currentLength` 为 1。
3.  每次更新 `currentLength` 后，都用它来更新 `maxLength`。
4.  遍历结束后，`maxLength` 即为最终结果。这种思路与贪心算法非常相似。