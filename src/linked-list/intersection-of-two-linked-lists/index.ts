import { ListNode } from '../../utils';

/**
 * 160. 相交链表
 * Intersection of Two Linked Lists
 * 
 * 给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。
 * 
 * 题目数据 保证 整个链式结构中不存在环。
 * 
 * 注意，函数返回结果后，链表必须 保持其原始结构 。
 * 
 * @see https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

// 哈希集合
export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>();
  let temp: ListNode | null = headA;
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
}

// 双指针
export function getIntersectionNodeTwoPointers(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }
  let pA: ListNode | null = headA;
  let pB: ListNode | null = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
}