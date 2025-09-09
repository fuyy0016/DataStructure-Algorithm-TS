/**
 * 19. 删除链表的倒数第 N 个结点
 * Remove Nth Node From End of List
 *
 * 给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。
 */
import { ListNode } from '../../utils';

/**
 * 计算链表长度
 * @param head
 * @param n
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  cur = dummy;
  for (let i = 1; i < len - n + 1; i++) {
    cur = cur.next!;
  }
  cur.next = cur.next!.next;
  return dummy.next;
}

/**
 * 快慢指针
 * @param head
 * @param n
 */
export function removeNthFromEndPointer(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let slow: ListNode | null = dummy;
  let fast: ListNode | null = head;
  for (let i = 0; i < n; i++) {
    fast = fast!.next;
  }
  while (fast) {
    slow = slow!.next;
    fast = fast.next;
  }
  slow!.next = slow!.next!.next;
  return dummy.next;
}