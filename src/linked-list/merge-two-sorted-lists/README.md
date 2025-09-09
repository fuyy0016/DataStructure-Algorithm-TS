# 21. 合并两个有序链表
## Merge Two Sorted Lists

## 1. 题目描述

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

#### 示例 1：
```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

#### 示例 2：
```
输入：l1 = [], l2 = []
输出：[]
```

#### 示例 3：
```
输入：l1 = [], l2 = [0]
输出：[0]
```

#### 提示：
- 两个链表的节点数目范围是 `[0, 50]`
- `-100 <= Node.val <= 100`
- `l1` 和 `l2` 均按 **非递减顺序** 排列

## 2. 思想讲解

### 方法一：迭代
迭代法的核心是创建一个哑节点（dummy node）作为新链表的头，然后用一个指针 `cur` 来构建新链表。

1.  **初始化**:
    *   创建一个哑节点 `dummy`，其 `next` 指针将指向新链表的真正头节点。
    *   创建一个指针 `cur`，初始化为 `dummy`。
2.  **遍历与合并**:
    *   当 `l1` 和 `l2` 都不为 `null` 时，比较它们当前节点的值。
    *   将值较小的节点连接到 `cur.next`。
    *   移动相应链表的指针（`l1` 或 `l2`）和 `cur` 指针。
3.  **处理剩余部分**:
    *   循环结束后，`l1` 和 `l2` 中最多只有一个还不为 `null`。
    *   将 `cur.next` 指向这个剩余的链表。
4.  **返回**:
    *   返回 `dummy.next`，即新链表的头节点。

### 方法二：递归
递归法则将问题分解为更小的子问题：合并 `l1` 和 `l2` 的头节点中值较小的那个，以及剩余的链表。

1.  **终止条件**:
    *   如果 `l1` 为 `null`，返回 `l2`。
    *   如果 `l2` 为 `null`，返回 `l1`。
2.  **递归步骤**:
    *   比较 `l1` 和 `l2` 的值。
    *   如果 `l1.val` 小于等于 `l2.val`，则 `l1` 是新链表的头。`l1.next` 应指向 `mergeTwoListsRecursive(l1.next, l2)` 的结果。返回 `l1`。
    *   否则，`l2` 是新链表的头。`l2.next` 应指向 `mergeTwoListsRecursive(l1, l2.next)` 的结果。返回 `l2`。

## 3. 代码实现

### 方法一：迭代
```typescript
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    // 处理剩余的链表
    cur.next = l1 ? l1 : l2;
    return dummy.next;
}
```

### 方法二：递归
```typescript
function mergeTwoListsRecursive(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}
```

## 4. 复杂度分析

### 方法一：迭代
*   **时间复杂度**: O(m + n)，其中 m 和 n 分别是两个链表的长度。我们需要遍历两个链表的所有节点。
*   **空间复杂度**: O(1)，只使用了常数级别的额外空间（`dummy` 和 `cur` 指针）。

### 方法二：递归
*   **时间复杂度**: O(m + n)，与迭代法相同。
*   **空间复杂度**: O(m + n)，递归调用栈的深度最多为两个链表长度之和。

## 5. 方案对比

| 特性 | 迭代 | 递归 |
| :--- | :--- | :--- |
| **空间效率** | O(1)，更优 | O(m+n)，可能导致栈溢出 |
| **代码可读性** | 逻辑直接 | 代码更简洁，但理解上需要递归思维 |
| **性能** | 通常略优于递归，因无函数调用开销 | 存在函数调用开销 |
| **适用场景** | 推荐在生产环境中使用 | 适用于链表长度可控且追求代码简洁性的场景 |

## 6. 优化建议

对于此问题，迭代法在空间复杂度上已经达到最优。两种方法的时间复杂度均为线性，因此在算法层面没有太多优化空间。在实际应用中，迭代法是更稳健的选择。