/**
 * 26. 删除有序数组中的重复项
 * Remove Duplicates from Sorted Array
 * 
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 * 
 * 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复元素之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
 * 
 * 将最终结果插入 nums 的前 k 个位置后返回 k 。
 * 
 * 不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * 解法一：暴力法
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
export function removeDuplicatesBruteForce(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  let length = nums.length;
  let i = 0;
  
  while (i < length - 1) {
    if (nums[i] === nums[i + 1]) {
      // 移除重复元素
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
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
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
 * 解法三：使用Set去重（不符合原地要求，仅作参考）
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
export function removeDuplicatesSet(nums: number[]): number {
  const uniqueNums = [...new Set(nums)];
  
  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i]!;
  }
  
  return uniqueNums.length;
}

/**
 * 默认解法
 */
export const removeDuplicates = removeDuplicatesTwoPointers;

/**
 * 算法解决方案配置
 */
export const removeDuplicatesFromSortedArraySolutions = {
  bruteForce: {
    name: '暴力法',
    func: removeDuplicatesBruteForce,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: '逐个移除重复元素'
  },
  twoPointers: {
    name: '双指针',
    func: removeDuplicatesTwoPointers,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: '快慢指针原地去重'
  },
  set: {
    name: 'Set去重',
    func: removeDuplicatesSet,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    description: '使用Set数据结构去重（不符合原地要求）'
  }
} as const;

export type RemoveDuplicatesFromSortedArraySolution = keyof typeof removeDuplicatesFromSortedArraySolutions;