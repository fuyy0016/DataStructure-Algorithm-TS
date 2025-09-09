import { describe, it, expect } from 'vitest';
import { Utils } from '../../src/utils';
import { reverseList, reverseListRecursive } from '../../src/linked-list/reverse-linked-list';

describe('反转链表', () => {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5],
      expected: [5, 4, 3, 2, 1],
    },
    {
      input: [1, 2],
      expected: [2, 1],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    }
  ];

  describe('迭代', () => {
    testCases.forEach(({ input, expected }) => {
      it(`反转链表 ${JSON.stringify(input)}`, () => {
        const head = Utils.createLinkedList(input);
        const reversedHead = reverseList(head);
        expect(Utils.linkedListToArray(reversedHead)).toEqual(expected);
      });
    });
  });

  describe('递归', () => {
    testCases.forEach(({ input, expected }) => {
      it(`反转链表 ${JSON.stringify(input)}`, () => {
        const head = Utils.createLinkedList(input);
        const reversedHead = reverseListRecursive(head);
        expect(Utils.linkedListToArray(reversedHead)).toEqual(expected);
      });
    });
  });
});