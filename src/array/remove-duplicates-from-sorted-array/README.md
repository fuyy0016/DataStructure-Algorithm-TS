# 26. 删除有序数组中的重复项 (Remove Duplicates from Sorted Array)

## 1. 题目描述

给你一个**升序排列**的数组 `nums` ，请你**原地**删除重复出现的元素，使每个元素**只出现一次**，返回删除后数组的新长度。元素的**相对顺序**应该保持**一致**。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组 `nums` 的第一部分。如果在删除重复元素之后有 `k` 个元素，那么 `nums` 的前 `k` 个元素应该保存最终结果。

将最终结果插入 `nums` 的前 `k` 个位置后返回 `k`。

**不要使用额外的空间**，你必须在**原地修改输入数组**并在使用 O(1) 额外空间的条件下完成。

**示例:**

```
输入: nums = [0,0,1,1,1,2,2,3,3,4]
输出: 5, nums = [0,1,2,3,4,_,_,_,_,_]
解释: 函数应该返回新的长度 5 ，并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

## 2. 代码实现

```typescript
/**
 * 解法一：暴力法
 */
export function removeDuplicatesBruteForce(nums: number[]): number {
  if (nums.length === 0) return 0;
  let length = nums.length;
  let i = 0;
  while (i < length - 1) {
    if (nums[i] === nums[i + 1]) {
      for (let j = i + 1; j < length - 1; j++) {
        nums[j] = nums[j + 1]!;
      }
      length--;
    } else {
      i++;
    }
  }
  return length;
}

/**
 * 解法二：双指针
 */
export function removeDuplicatesTwoPointers(nums: number[]): number {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]!;
    }
  }
  return slow + 1;
}

/**
 * 解法三：使用Set去重（不符合原地要求）
 */
export function removeDuplicatesSet(nums: number[]): number {
  const uniqueNums = [...new Set(nums)];
  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i]!;
  }
  return uniqueNums.length;
}
```

## 3. 方案对比

| 解法 | 优点 | 缺点 |
| --- | --- | --- |
| **暴力法** | 思路直接，易于理解。 | 时间复杂度高，涉及大量元素移动，性能差。 |
| **双指针** | 时间和空间复杂度都为最优，完全符合题目要求。 | 逻辑需要仔细思考，理解快慢指针的作用。 |
| **Set去重** | 代码简洁，利用了JS内置数据结构。 | 不满足 O(1) 空间复杂度的要求，属于投机取巧。 |

## 4. 复杂度分析

- **暴力法**:
  - **时间复杂度**: O(n²)。当数组中充满重复元素时，每次删除都需要移动后续所有元素。
  - **空间复杂度**: O(1)。原地修改。

- **双指针**:
  - **时间复杂度**: O(n)。快慢指针都只遍历数组一次。
  - **空间复杂度**: O(1)。原地修改。

- **Set去重**:
  - **时间复杂度**: O(n)。遍历数组和Set的创建都是线性时间。
  - **空间复杂度**: O(n)。需要一个额外的Set来存储不重复的元素。

## 5. 优化建议

**双指针**解法是该问题的标准最优解。它完美地利用了数组已排序的特性，通过一次遍历就完成了原地去重，效率极高。

## 6. 思想讲解

### 暴力法

暴力解法的思路是两层循环。外层循环遍历数组，当发现一个重复元素 `nums[i] === nums[i+1]` 时，就启动内层循环，将 `i+1` 位置之后的所有元素向前移动一位，以覆盖掉这个重复项。同时，数组的有效长度 `length` 减一。这种方法因为涉及频繁的数组元素移位，所以效率很低。

### 双指针（快慢指针）

这是解决此问题的经典和高效方法。我们使用两个指针：
- **慢指针 `slow`**: 指向下一个将要被赋值的、不重复元素的位置。它也代表了去重后数组的长度。
- **快指针 `fast`**: 遍历整个数组，寻找与 `slow` 指向的元素不同的新元素。

算法流程如下：
1. `slow` 初始化为 0。
2. `fast` 从 1 开始遍历数组。
3. 如果 `nums[fast]` **不等于** `nums[slow]`，说明我们找到了一个新的、不重复的元素。此时：
   - 将 `slow` 指针后移一位 (`slow++`)。
   - 将 `nums[fast]` 的值赋给 `nums[slow]`，即 `nums[slow] = nums[fast]`。
4. 如果 `nums[fast]` **等于** `nums[slow]`，说明是重复元素，`slow` 指针不动，`fast` 继续向后移动，直到找到下一个不重复的元素。

遍历结束后，`slow + 1` 就是去重后数组的长度。所有在 `slow` 指针（包含）之前的位置，都是不重复的元素。

这种方法之所以高效，是因为它将“查找新元素”和“放置新元素”两个操作通过快慢指针的配合，在一次遍历中完成，避免了暴力法中昂贵的元素移动操作。