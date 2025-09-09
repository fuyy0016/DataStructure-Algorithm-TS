/**
 * 21. 合并两个有序链表
 * Merge Two Sorted Lists
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
import { ListNode } from '../../utils';

/**
 * 迭代
 * @param l1
 * @param l2
 */
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return dummy.next;
}

/**
 * 递归
 * @param l1
 * @param l2
 */
export function mergeTwoListsRecursive(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val <= l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsRecursive(l1, l2.next);
    return l2;
  }
}