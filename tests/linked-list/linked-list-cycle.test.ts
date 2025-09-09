import { describe, it, expect } from 'vitest';
import { ListNode } from '../../src/utils';
import { hasCycle, hasCyclePointer } from '../../src/linked-list/linked-list-cycle';

describe('环形链表', () => {
  describe('哈希表', () => {
    it('对于有环链表应返回 true', () => {
      const head = new ListNode(3);
      const node2 = new ListNode(2);
      const node0 = new ListNode(0);
      const node4 = new ListNode(-4);
      head.next = node2;
      node2.next = node0;
      node0.next = node4;
      node4.next = node2; // 创建一个环
      expect(hasCycle(head)).toBe(true);
    });

    it('对于简单环链表应返回 true', () => {
      const head = new ListNode(1);
      const node2 = new ListNode(2);
      head.next = node2;
      node2.next = head; // 创建一个环
      expect(hasCycle(head)).toBe(true);
    });

    it('对于无环链表应返回 false', () => {
      const head = new ListNode(1);
      expect(hasCycle(head)).toBe(false);
    });

    it('对于空链表应返回 false', () => {
      expect(hasCycle(null)).toBe(false);
    });
  });

  describe('快慢指针', () => {
    it('对于有环链表应返回 true', () => {
      const head = new ListNode(3);
      const node2 = new ListNode(2);
      const node0 = new ListNode(0);
      const node4 = new ListNode(-4);
      head.next = node2;
      node2.next = node0;
      node0.next = node4;
      node4.next = node2; // 创建一个环
      expect(hasCyclePointer(head)).toBe(true);
    });

    it('对于简单环链表应返回 true', () => {
      const head = new ListNode(1);
      const node2 = new ListNode(2);
      head.next = node2;
      node2.next = head; // 创建一个环
      expect(hasCyclePointer(head)).toBe(true);
    });

    it('对于无环链表应返回 false', () => {
      const head = new ListNode(1);
      expect(hasCyclePointer(head)).toBe(false);
    });

    it('对于空链表应返回 false', () => {
      expect(hasCyclePointer(null)).toBe(false);
    });
  });
});