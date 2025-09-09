import { describe, it, expect } from 'vitest';
import { ListNode } from '../../src/utils';
import { getIntersectionNode, getIntersectionNodeTwoPointers } from '../../src/linked-list/intersection-of-two-linked-lists';

describe('相交链表', () => {
  describe('哈希集合', () => {
    it('两个链表相交于中间节点', () => {
      const intersectNode = new ListNode(8);
      intersectNode.next = new ListNode(4);
      intersectNode.next.next = new ListNode(5);

      const headA = new ListNode(4);
      headA.next = new ListNode(1);
      headA.next.next = intersectNode;

      const headB = new ListNode(5);
      headB.next = new ListNode(6);
      headB.next.next = new ListNode(1);
      headB.next.next.next = intersectNode;

      expect(getIntersectionNode(headA, headB)).toBe(intersectNode);
    });

    it('两个链表相交于末尾节点', () => {
      const intersectNode = new ListNode(2);
      
      const headA = new ListNode(1);
      headA.next = new ListNode(9);
      headA.next.next = new ListNode(1);
      headA.next.next.next = intersectNode;

      const headB = new ListNode(3);
      headB.next = intersectNode;

      expect(getIntersectionNode(headA, headB)).toBe(intersectNode);
    });

    it('两个链表不相交', () => {
      const headA = new ListNode(2);
      headA.next = new ListNode(6);
      headA.next.next = new ListNode(4);

      const headB = new ListNode(1);
      headB.next = new ListNode(5);

      expect(getIntersectionNode(headA, headB)).toBe(null);
    });

    it('一个链表为空', () => {
      const headA = new ListNode(1);
      headA.next = new ListNode(2);
      headA.next.next = new ListNode(3);

      expect(getIntersectionNode(headA, null)).toBe(null);
      expect(getIntersectionNode(null, headA)).toBe(null);
    });

    it('两个链表都为空', () => {
      expect(getIntersectionNode(null, null)).toBe(null);
    });
  });

  describe('双指针', () => {
    it('两个链表相交于中间节点', () => {
      const intersectNode = new ListNode(8);
      intersectNode.next = new ListNode(4);
      intersectNode.next.next = new ListNode(5);

      const headA = new ListNode(4);
      headA.next = new ListNode(1);
      headA.next.next = intersectNode;

      const headB = new ListNode(5);
      headB.next = new ListNode(6);
      headB.next.next = new ListNode(1);
      headB.next.next.next = intersectNode;

      expect(getIntersectionNodeTwoPointers(headA, headB)).toBe(intersectNode);
    });

    it('两个链表相交于末尾节点', () => {
      const intersectNode = new ListNode(2);
      
      const headA = new ListNode(1);
      headA.next = new ListNode(9);
      headA.next.next = new ListNode(1);
      headA.next.next.next = intersectNode;

      const headB = new ListNode(3);
      headB.next = intersectNode;

      expect(getIntersectionNodeTwoPointers(headA, headB)).toBe(intersectNode);
    });

    it('两个链表不相交', () => {
      const headA = new ListNode(2);
      headA.next = new ListNode(6);
      headA.next.next = new ListNode(4);

      const headB = new ListNode(1);
      headB.next = new ListNode(5);

      expect(getIntersectionNodeTwoPointers(headA, headB)).toBe(null);
    });

    it('一个链表为空', () => {
      const headA = new ListNode(1);
      headA.next = new ListNode(2);
      headA.next.next = new ListNode(3);

      expect(getIntersectionNodeTwoPointers(headA, null)).toBe(null);
      expect(getIntersectionNodeTwoPointers(null, headA)).toBe(null);
    });

    it('两个链表都为空', () => {
      expect(getIntersectionNodeTwoPointers(null, null)).toBe(null);
    });
  });
});