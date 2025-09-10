# 160. 相交链表

## 题目描述

给你两个单链表的头节点 `headA` 和 `headB`，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null`。

题目数据保证整个链式结构中不存在环。

注意，函数返回结果后，链表必须保持其原始结构。

## 代码实现

```typescript
// 哈希集合解法
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>();
  let temp: ListNode | null = headA;
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
}

// 双指针解法
function getIntersectionNodeTwoPointers(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }
  let pA: ListNode | null = headA;
  let pB: ListNode | null = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
}
```

## 方案对比

1. 哈希集合
   - 优点：思路直观，容易理解
   - 缺点：需要额外的空间存储访问过的节点

2. 双指针
   - 优点：空间复杂度为 O(1)，不需要额外空间
   - 缺点：思路相对不那么直观

## 复杂度分析

### 哈希集合解法

- 时间复杂度：O(N + M)，其中 N 和 M 分别是两个链表的长度
- 空间复杂度：O(N)，其中 N 是链表 A 的长度，需要存储链表 A 中的所有节点

### 双指针解法

- 时间复杂度：O(N + M)，其中 N 和 M 分别是两个链表的长度
- 空间复杂度：O(1)，只需要两个指针

## 优化建议

1. 在使用哈希集合方法时，如果已知其中一个链表较短，可以选择遍历较短的链表来减少空间使用
2. 在实际应用中，如果内存资源紧张，建议使用双指针方法

## 思想讲解

这道题可以用两种方法解决：哈希集合和双指针。

### 哈希集合

1. 遍历链表 A，将每个节点存入哈希集合中
2. 遍历链表 B，对于每个节点，检查它是否在哈希集合中
3. 如果找到一个在哈希集合中的节点，它就是相交节点
4. 如果遍历完链表 B 都没有找到，则两个链表不相交

### 双指针

这种方法更巧妙，不需要额外空间：

1. 创建两个指针 pA 和 pB，分别指向链表 A 和链表 B 的头节点
2. 同时遍历两个链表，当一个指针到达链表末尾时，将它重定向到另一个链表的头部
3. 如果两个链表相交，指针一定会在相交点相遇
4. 如果不相交，指针最终都会变为 null

原理：如果两个链表相交，那么相交点之后的部分是共用的。通过让两个指针分别走完 A+B 和 B+A 的路径，它们一定会在相交点相遇。
3. 可以在遍历前先判断两个链表的尾节点是否相同，如果不同则一定不相交