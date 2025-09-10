import { describe, it, expect } from 'vitest';
import { maxDepthDFS, maxDepthBFS, maxDepthDFSIterative } from '../../src/tree/calculate-the-depth-of-a-binary-tree';
import { TreeNode } from '../../src/utils';

// 辅助函数：将数组转换为二叉树
function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const currentNode = queue.shift();

    if (currentNode) {
      // Left child
      if (arr[i] !== null && arr[i] !== undefined) {
        currentNode.left = new TreeNode(arr[i]!);
        queue.push(currentNode.left);
      } else {
        queue.push(null); // Push null to maintain structure for BFS
      }
      i++;

      // Right child
      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
        currentNode.right = new TreeNode(arr[i]!);
        queue.push(currentNode.right);
      } else {
        queue.push(null); // Push null to maintain structure for BFS
      }
      i++;
    }
  }
  return root;
}

describe('计算二叉树的深度', () => {
  const testCases = [
    {
      name: '示例一',
      input: [3, 9, 20, null, null, 15, 7],
      expected: 3,
    },
    {
      name: '空树',
      input: [],
      expected: 0,
    },
    {
      name: '单节点树',
      input: [1],
      expected: 1,
    },
    {
      name: '只有左子树',
      input: [1, 2, null, 3, null, 4],
      expected: 4,
    },
    {
      name: '只有右子树',
      input: [1, null, 2, null, 3, null, 4],
      expected: 4,
    },
    {
      name: '完全二叉树',
      input: [1, 2, 3, 4, 5, 6, 7],
      expected: 3,
    },
    {
      name: '复杂树',
      input: [1, 2, 3, 4, null, null, 5, 6, null, null, null, 7],
      expected: 5,
    },
  ];

  describe('深度优先搜索 (DFS)', () => {
    testCases.forEach(({ name, input, expected }) => {
      it(`${name}: 输入 ${JSON.stringify(input)}, 期望 ${expected}`, () => {
        const root = arrayToTreeNode(input);
        expect(maxDepthDFS(root)).toBe(expected);
      });
    });
  });

  describe('广度优先搜索 (BFS)', () => {
    testCases.forEach(({ name, input, expected }) => {
      it(`${name}: 输入 ${JSON.stringify(input)}, 期望 ${expected}`, () => {
        const root = arrayToTreeNode(input);
        expect(maxDepthBFS(root)).toBe(expected);
      });
    });
  });

  describe('深度优先搜索 (DFS) - 迭代', () => {
    testCases.forEach(({ name, input, expected }) => {
      it(`${name}: 输入 ${JSON.stringify(input)}, 期望 ${expected}`, () => {
        const root = arrayToTreeNode(input);
        expect(maxDepthDFSIterative(root)).toBe(expected);
      });
    });
  });
});