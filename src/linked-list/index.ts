/**
 * 链表算法题解模块
 * Linked List Algorithm Solutions
 */

// 链表算法分类
export const LINKED_LIST_CATEGORIES = {
  BASIC: '基础操作',
  TWO_POINTERS: '双指针',
  REVERSE: '反转链表',
  CYCLE: '环形链表',
  MERGE: '合并链表'
} as const;

// 导出链表算法题目列表
export const LINKED_LIST_PROBLEMS = [
  'reverse-linked-list',
  'merge-two-sorted-lists',
  'linked-list-cycle',
  'remove-nth-node-from-end'
] as const;

export type LinkedListProblem = typeof LINKED_LIST_PROBLEMS[number];