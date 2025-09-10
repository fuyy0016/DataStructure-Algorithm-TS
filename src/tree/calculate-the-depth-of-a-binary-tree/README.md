# 计算二叉树的深度

## 题目描述

给定一个二叉树，找出其最大深度。

二叉树的深度是从根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

**示例:**

给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

## 代码实现

```typescript
// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
```

## 方案对比

1.  **深度优先搜索 (DFS) / 递归**
    *   **优点**：代码简洁，逻辑直观，符合人类对树形结构的递归思考方式。
    *   **缺点**：在某些语言中，如果树的深度非常大，可能会导致栈溢出。

2.  **广度优先搜索 (BFS) / 迭代**
    *   **优点**：可以避免栈溢出问题，适用于深度较大的树。可以方便地获取每一层的节点。
    *   **缺点**：需要额外的队列空间来存储每一层的节点。

3.  **深度优先搜索 (DFS) / 迭代**
    *   **优点**：通过显式使用栈来模拟递归，避免了系统调用栈的开销和潜在的栈溢出风险。
    *   **缺点**：相对于递归版本，代码稍显复杂，需要手动管理栈。

## 复杂度分析

### 深度优先搜索 (DFS) / 递归

-   **时间复杂度**：O(N)，其中 N 是二叉树的节点数。每个节点都会被访问一次。
-   **空间复杂度**：O(H)，其中 H 是二叉树的高度。在最坏情况下（树退化为链表），H 可以达到 N，此时空间复杂度为 O(N)；在最好情况下（完全二叉树），H 为 logN，此时空间复杂度为 O(logN)。递归调用的栈空间消耗。

### 广度优先搜索 (BFS) / 迭代

-   **时间复杂度**：O(N)，其中 N 是二叉树的节点数。每个节点都会被访问一次。
-   **空间复杂度**：O(W)，其中 W 是二叉树的最大宽度。在最坏情况下（完全二叉树的最后一层），W 可以达到 N/2，此时空间复杂度为 O(N)；在最好情况下（树退化为链表），W 为 1，此时空间复杂度为 O(1)。队列空间消耗。

### 深度优先搜索 (DFS) / 迭代

-   **时间复杂度**：O(N)，其中 N 是二叉树的节点数。每个节点都会被访问一次。
-   **空间复杂度**：O(H)，其中 H 是二叉树的高度。栈中最多存储 H 个节点，空间复杂度与递归版本类似。

## 优化建议

-   对于这两种解法，在时间复杂度上都是 O(N)，因为都需要遍历所有节点。在空间复杂度上，DFS 的空间复杂度取决于树的高度，BFS 的空间复杂度取决于树的宽度。在实际应用中，如果树的深度远大于宽度，BFS 可能更优；反之，DFS 可能更优。但通常情况下，两者在空间复杂度上都是 O(N) 级别。

## 思想讲解

### 深度优先搜索 (DFS) / 递归

深度优先搜索（DFS）是一种遍历或搜索树或图的算法。它沿着树的深度遍历节点，尽可能深地搜索树的分支。当节点 v 的所有边都已被探寻，回溯到发现节点 v 的那条边的起始节点。

对于计算二叉树的最大深度，DFS 的核心思想是：

1.  **基本情况**：如果当前节点为空，则深度为 0。
2.  **递归步骤**：
    *   递归计算左子树的最大深度 `leftDepth`。
    *   递归计算右子树的最大深度 `rightDepth`。
    *   当前节点的深度是 `max(leftDepth, rightDepth) + 1`（加 1 是因为当前节点本身也算一层）。

### 广度优先搜索 (BFS) / 迭代

广度优先搜索（BFS）是一种遍历或搜索树或图的算法。它从根节点开始，首先访问其所有相邻节点，然后对每个相邻节点，依次访问其所有未访问的相邻节点，以此类推。

对于计算二叉树的最大深度，BFS 的核心思想是：

1.  使用一个队列来存储每一层的节点。
2.  每次循环处理一层节点，深度加 1。
3.  将当前层的所有节点出队，并将其非空子节点入队。
4.  当队列为空时，表示所有节点都已遍历，此时的深度就是最大深度。

### 深度优先搜索 (DFS) / 迭代

迭代版本的深度优先搜索使用一个显式的栈来模拟递归过程，从而避免了函数调用栈的开销和潜在的溢出风险。

核心思想如下：

1.  创建一个栈，并将根节点和其深度（初始为 1）作为一个元组 `[node, depth]` 推入栈中。
2.  初始化一个变量 `maxDepth` 来记录迄今为止发现的最大深度。
3.  当栈不为空时，循环执行以下操作：
    *   从栈中弹出一个节点和其对应的深度。
    *   更新 `maxDepth` 为当前 `maxDepth` 和弹出深度的较大值。
    *   如果该节点有右子节点，则将 `[rightChild, depth + 1]` 推入栈中。
    *   如果该节点有左子节点，则将 `[leftChild, depth + 1]` 推入栈中。（注意：先推右子节点再推左子节点，可以确保下一次循环优先处理左子树，从而模拟递归的先序遍历顺序）。
4.  循环结束后，`maxDepth` 即为二叉树的最大深度。