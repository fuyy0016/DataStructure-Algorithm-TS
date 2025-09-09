/**
 * 88. 合并两个有序数组
 * Merge Sorted Array
 * 
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
 * 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 */

/**
 * 解法一：合并后排序
 * 时间复杂度：O((m+n)log(m+n))
 * 空间复杂度：O(1)
 */
export function mergeSortedArraySort(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]!;
  }
  nums1.sort((a, b) => a - b);
}

/**
 * 解法二：双指针（从前往后）
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(m)
 */
export function mergeSortedArrayTwoPointers(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  let p = 0;
  
  while (p1 < m && p2 < n) {
    if (nums1Copy[p1]! <= nums2[p2]!) {
      nums1[p] = nums1Copy[p1]!;
      p1++;
    } else {
      nums1[p] = nums2[p2]!;
      p2++;
    }
    p++;
  }
  
  while (p1 < m) {
    nums1[p] = nums1Copy[p1]!;
    p1++;
    p++;
  }
  
  while (p2 < n) {
    nums1[p] = nums2[p2]!;
    p2++;
    p++;
  }
}

/**
 * 解法三：双指针（从后往前）
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(1)
 */
export function mergeSortedArrayReverse(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1]! > nums2[p2]!) {
      nums1[p] = nums1[p1]!;
      p1--;
    } else {
      nums1[p] = nums2[p2]!;
      p2--;
    }
    p--;
  }
  
  while (p2 >= 0) {
    nums1[p] = nums2[p2]!;
    p2--;
    p--;
  }
}

/**
 * 默认解法
 */
export const merge = mergeSortedArrayReverse;

/**
 * 算法解决方案配置
 */
export const mergeSortedArraySolutions = {
  sort: {
    name: '合并后排序',
    func: mergeSortedArraySort,
    timeComplexity: 'O((m+n)log(m+n))',
    spaceComplexity: 'O(1)',
    description: '直接合并后排序'
  },
  twoPointers: {
    name: '双指针（从前往后）',
    func: mergeSortedArrayTwoPointers,
    timeComplexity: 'O(m+n)',
    spaceComplexity: 'O(m)',
    description: '使用额外空间，从前往后合并'
  },
  reverse: {
    name: '双指针（从后往前）',
    func: mergeSortedArrayReverse,
    timeComplexity: 'O(m+n)',
    spaceComplexity: 'O(1)',
    description: '原地合并，从后往前'
  }
} as const;

export type MergeSortedArraySolution = keyof typeof mergeSortedArraySolutions;