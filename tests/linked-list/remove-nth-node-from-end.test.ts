import { describe, it, expect } from 'vitest';
import { Utils } from '../../src/utils';
import { removeNthFromEnd, removeNthFromEndPointer } from '../../src/linked-list/remove-nth-node-from-end';

describe('删除链表的倒数第 N 个结点', () => {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5],
      n: 2,
      expected: [1, 2, 3, 5],
    },
    {
      input: [1],
      n: 1,
      expected: [],
    },
    {
      input: [1, 2],
      n: 1,
      expected: [1],
    },
    {
      input: [1, 2],
      n: 2,
      expected: [2],
    },
  ];

  describe('计算链表长度', () => {
    testCases.forEach(({ input, n, expected }) => {
      it(`删除链表 ${JSON.stringify(input)} 的倒数第 ${n} 个结点`, () => {
        const head = Utils.createLinkedList(input);
        const result = removeNthFromEnd(head, n);
        expect(Utils.linkedListToArray(result)).toEqual(expected);
      });
    });
  });

  describe('快慢指针', () => {
    testCases.forEach(({ input, n, expected }) => {
      it(`删除链表 ${JSON.stringify(input)} 的倒数第 ${n} 个结点`, () => {
        const head = Utils.createLinkedList(input);
        const result = removeNthFromEndPointer(head, n);
        expect(Utils.linkedListToArray(result)).toEqual(expected);
      });
    });
  });
});