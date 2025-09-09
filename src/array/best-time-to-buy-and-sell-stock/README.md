# 121. 买卖股票的最佳时机 (Best Time to Buy and Sell Stock)

## 1. 题目描述

给定一个数组 `prices`，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择**某一天**买入这只股票，并选择在**未来的某一天**卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0。

**示例:**

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（价格 = 1）买入，在第 5 天（价格 = 6）卖出，最大利润 = 6-1 = 5。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

## 2. 代码实现

```typescript
/**
 * 解法一：暴力法
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
export function maxProfitBruteForce(prices: number[]): number {
  let maxProfit = 0;
  
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j]! - prices[i]!;
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  
  return maxProfit;
}

/**
 * 解法二：一次遍历
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function maxProfitOnePass(prices: number[]): number {
  if (prices.length <= 1) return 0;
  
  let minPrice = prices[0]!;
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i]! < minPrice) {
      minPrice = prices[i]!;
    } else {
      maxProfit = Math.max(maxProfit, prices[i]! - minPrice);
    }
  }
  
  return maxProfit;
}
```

## 3. 方案对比

| 解法 | 优点 | 缺点 |
| --- | --- | --- |
| **暴力法** | 思路简单，易于理解和实现。 | 时间复杂度高，当输入规模较大时性能较差。 |
| **一次遍历** | 时间复杂度低，性能高效。 | 需要维护一个最低价格变量，逻辑稍复杂。 |

## 4. 复杂度分析

- **暴力法**:
  - **时间复杂度**: O(n²)。需要两层循环遍历所有可能的买卖组合。
  - **空间复杂度**: O(1)。只使用了常数级别的额外空间。

- **一次遍历**:
  - **时间复杂度**: O(n)。只需要一次遍历数组。
  - **空间复杂度**: O(1)。只使用了常数级别的额外空间。

## 5. 优化建议

一次遍历的解法已经是该问题的最优解，时间复杂度和空间复杂度都达到了最优。没有更进一步的优化空间。

## 6. 思想讲解

### 暴力法

暴力法的思想非常直接：枚举所有可能的买入和卖出日期组合。外层循环 `i` 代表买入日期，内层循环 `j` 代表卖出日期（`j > i`）。对于每个组合，计算其利润 `prices[j] - prices[i]`，并与当前记录的最大利润 `maxProfit` 比较，更新最大利润。

这种方法虽然能解决问题，但效率低下，因为存在大量重复计算。

### 一次遍历

一次遍历的解法更加巧妙和高效。其核心思想是**在遍历数组的过程中，实时记录迄今为止的最低股票价格，并计算当前价格与这个最低价格的差值作为潜在利润**。

具体步骤如下：
1. 初始化 `minPrice` 为第一天的价格，`maxProfit` 为 0。
2. 从第二天开始遍历数组 `prices`。
3. 在每一天 `i`：
   - 如果当天的价格 `prices[i]` 低于 `minPrice`，则更新 `minPrice` 为 `prices[i]`。这是因为我们找到了一个更好的买入时机。
   - 否则，计算 `prices[i] - minPrice`，这就是如果在最低点买入、在今天卖出所能获得的利润。将这个利润与 `maxProfit` 比较，并更新 `maxProfit`。
4. 遍历结束后，`maxProfit` 就是所能获得的最大利润。

这种方法之所以有效，是因为它总是在寻找一个历史最低点来作为买入点，然后尝试在后续的每一天卖出，从而找到最大利润。通过一次遍历就完成了计算，大大提升了效率。