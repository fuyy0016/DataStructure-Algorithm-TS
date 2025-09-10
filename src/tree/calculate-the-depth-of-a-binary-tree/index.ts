/**
 * LCR 175. 计算二叉树的深度
 * Calculate the Depth of a Binary Tree
 * @see https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/
 */

import { TreeNode } from "../../utils";



/**
 * 解法一：深度优先搜索 (DFS) / 递归
 * @param root
 * @returns
 */
export function maxDepthDFS(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const leftDepth = maxDepthDFS(root.left);
  const rightDepth = maxDepthDFS(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * 解法二：广度优先搜索 (BFS) / 迭代
 * @param root
 * @returns
 */
export function maxDepthBFS(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue: TreeNode[] = [root];
  let depth = 0;
  while (queue.length > 0) {
    depth++;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
  }
  return depth;
}

/**
 * 解法三：深度优先搜索 (DFS) / 迭代
 * @param root
 * @returns
 */
export function maxDepthDFSIterative(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack: [TreeNode, number][] = [[root, 1]];
  let maxDepth = 0;

  while (stack.length > 0) {
    const [node, depth] = stack.pop()!;

    maxDepth = Math.max(maxDepth, depth);

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
  }

  return maxDepth;
}