/**
 * 206. 反转链表
 * Reverse Linked List
 *
 * 给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。
 */
import { ListNode } from '../../utils';

/**
 * 迭代（双指针）
 * @param head
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

/**
 * 递归
 * @param head
 */
export function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}