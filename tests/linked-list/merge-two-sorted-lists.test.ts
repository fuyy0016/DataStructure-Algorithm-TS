import { describe, it, expect } from 'vitest';
import { Utils } from '../../src/utils';
import { mergeTwoLists, mergeTwoListsRecursive } from '../../src/linked-list/merge-two-sorted-lists';

describe('合并两个有序链表', () => {
  const testCases = [
    {
      l1: [1, 2, 4],
      l2: [1, 3, 4],
      expected: [1, 1, 2, 3, 4, 4],
    },
    {
      l1: [],
      l2: [],
      expected: [],
    },
    {
      l1: [],
      l2: [0],
      expected: [0],
    },
  ];

  describe('迭代', () => {
    testCases.forEach(({ l1, l2, expected }) => {
      it(`合并链表 ${JSON.stringify(l1)} 和 ${JSON.stringify(l2)}`, () => {
        const head1 = Utils.createLinkedList(l1);
        const head2 = Utils.createLinkedList(l2);
        const mergedHead = mergeTwoLists(head1, head2);
        expect(Utils.linkedListToArray(mergedHead)).toEqual(expected);
      });
    });
  });

  describe('递归', () => {
    testCases.forEach(({ l1, l2, expected }) => {
      it(`合并链表 ${JSON.stringify(l1)} 和 ${JSON.stringify(l2)}`, () => {
        const head1 = Utils.createLinkedList(l1);
        const head2 = Utils.createLinkedList(l2);
        const mergedHead = mergeTwoListsRecursive(head1, head2);
        expect(Utils.linkedListToArray(mergedHead)).toEqual(expected);
      });
    });
  });
});