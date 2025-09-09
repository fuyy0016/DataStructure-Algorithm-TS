# 19. 删除链表的倒数第 N 个结点
## Remove Nth Node From End of List

## 1. 题目描述

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

#### 示例 1：
```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

#### 示例 2：
```
输入：head = [1], n = 1
输出：[]
```

#### 示例 3：
```
输入：head = [1,2], n = 1
输出：[1]
```

#### 提示：
- 链表中结点的数目为 `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

## 2. 思想讲解

### 方法一：计算链表长度

最直接的方法是先遍历一次链表，计算出总长度 `len`。然后，倒数第 `n` 个节点就是正数第 `len - n + 1` 个节点。我们只需要找到这个节点的前一个节点，即第 `len - n` 个节点，然后将其 `next` 指针指向下下个节点即可。

1.  **处理边界**：如果删除的是头节点（即 `len === n`），直接返回 `head.next`。
2.  **找到前驱**：遍历到第 `len - n` 个节点。
3.  **删除节点**：修改其 `next` 指针。

### 方法二：快慢指针

为了实现一次遍历就完成删除，我们可以使用快慢指针。让快指针 `fast` 先走 `n` 步，然后快慢指针 `slow` 和 `fast` 一起走。当 `fast` 到达链表末尾时，`slow` 正好指向倒数第 `n` 个节点的前一个节点。

1.  **虚拟头节点**：为了方便处理删除头节点的情况，我们可以创建一个虚拟头节点 `dummy`，让 `dummy.next = head`。
2.  **初始化**：`slow` 和 `fast` 都指向 `dummy`。
3.  **快指针先行**：`fast` 先向前移动 `n` 步。
4.  **同步移动**：`slow` 和 `fast` 一起移动，直到 `fast.next` 为 `null`。
5.  **删除节点**：此时 `slow` 指向的是待删除节点的前驱节点。执行 `slow.next = slow.next.next`。
6.  **返回**：返回 `dummy.next`。

## 3. 代码实现

### 方法一：计算链表长度
```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    cur = dummy;
    for (let i = 1; i < len - n + 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
}
```

### 方法二：快慢指针
```typescript
function removeNthFromEndPointer(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
```

## 4. 复杂度分析

### 方法一：计算链表长度
*   **时间复杂度**: O(L)，其中 L 是链表的长度。需要遍历两次链表。
*   **空间复杂度**: O(1)，只使用了常数级别的额外空间。

### 方法二：快慢指针
*   **时间复杂度**: O(L)，只需要遍历一次链表。
*   **空间复杂度**: O(1)，只使用了常数级别的额外空间。

## 5. 方案对比

| 特性 | 计算长度 | 快慢指针 |
| :--- | :--- | :--- |
| **遍历次数** | 两次 | 一次 |
| **代码简洁度** | 逻辑稍显分散 | 逻辑更集中，使用虚拟头节点更优雅 |
| **性能** | 略逊于快慢指针 | 更优，一次遍历完成 |
| **适用场景** | 思路简单，易于理解 | 对性能有要求，是此问题的标准解法 |

## 6. 优化建议

快慢指针法是解决此问题的最优方案，它通过一次遍历就解决了问题，且空间复杂度为 O(1)。使用虚拟头节点（dummy node）可以很好地统一删除头节点和非头节点的逻辑，让代码更加简洁和健壮，是推荐的最佳实践。