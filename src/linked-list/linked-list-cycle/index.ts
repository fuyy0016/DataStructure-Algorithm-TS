/**
 * 141. 环形链表
 * Linked List Cycle
 *
 * 给你一个链表的头节点 `head` ，判断链表中是否有环。
 *
 * 如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 *
 * 不允许修改 链表。
 */
import { ListNode } from '../../utils';

/**
 * 哈希表
 * @param head
 */
export function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
}

/**
 * 快慢指针
 * @param head
 */
export function hasCyclePointer(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
}