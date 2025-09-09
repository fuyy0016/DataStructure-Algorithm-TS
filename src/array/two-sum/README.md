# 1. 两数之和 (Two Sum)

## 1. 题目描述

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出和为目标值 `target` 的那**两个**整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例:**

```
输入: nums = [2,7,11,15], target = 9
输出: [0,1]
解释: 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

## 2. 代码实现

```typescript
/**
 * 解法一：暴力法
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
```

## 3. 方案对比

| 解法 | 优点 | 缺点 |
| --- | --- | --- |
| **暴力法** | 思路简单，易于实现。 | 时间复杂度高，在数据量大时性能很差。 |
| **哈希表** | 时间复杂度低，查询效率高，是此问题的最优解。 | 需要额外的空间来存储哈希表。 |

## 4. 复杂度分析

- **暴力法**:
  - **时间复杂度**: O(n²)。嵌套循环遍历所有可能的数字对。
  - **空间复杂度**: O(1)。没有使用额外的存储空间。

- **哈希表**:
  - **时间复杂度**: O(n)。只需遍历一次数组。哈希表的插入和查找操作平均时间复杂度为 O(1)。
  - **空间复杂度**: O(n)。最坏情况下，需要将数组中所有元素都存入哈希表。

## 5. 优化建议

哈希表解法是该问题的最优解，其线性时间复杂度已经非常高效。对于这个特定的问题，没有更显著的优化空间了。

## 6. 思想讲解

### 暴力法

最直接的思路是使用两层循环。外层循环选取第一个数，内层循环从外层循环的下一个位置开始，选取第二个数。然后判断这两个数的和是否等于 `target`。如果等于，就返回它们的下标。这种方法简单粗暴，但效率低下。

### 哈希表

哈希表法利用了哈希表（在JavaScript中是 `Map`）快速查找的特性，将时间复杂度从 O(n²) 优化到 O(n)。

核心思想是：**在遍历数组时，对于每个元素 `nums[i]`，我们去寻找一个“搭档” `complement`，使得 `nums[i] + complement = target`。这个“搭档”就是 `target - nums[i]`。**

算法流程如下：
1. 创建一个空的哈希表 `map`，用于存储已经遍历过的数字及其下标，即 `{ 数字: 下标 }`。
2. 遍历数组 `nums` 中的每个元素 `nums[i]`。
3. 计算出它需要的“搭档” `complement = target - nums[i]`。
4. 在哈希表 `map` 中查找是否存在 `complement`。
   - 如果**存在**，说明我们找到了答案。`complement` 的下标（存储在 `map` 中）和当前元素的下标 `i` 就是我们要找的两个下标。
   - 如果**不存在**，说明还没找到“搭档”。我们将当前数字 `nums[i]` 和它的下标 `i` 存入哈希表 `map` 中，即 `map.set(nums[i], i)`，以便后续的元素可以将它作为“搭档”进行匹配。

通过这种“一边遍历，一边查找，一边存储”的方式，我们只需要一次遍历就可以解决问题。这种用空间换时间的思想在算法中非常常见。