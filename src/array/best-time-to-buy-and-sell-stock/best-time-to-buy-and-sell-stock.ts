/**
 * 121. 买卖股票的最佳时机
 * Best Time to Buy and Sell Stock
 * 
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择某一天买入这只股票，并选择在未来的某一天卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。
 * 
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

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

/**
 * 默认解法
 */
export const maxProfit = maxProfitOnePass;

/**
 * 算法解决方案配置
 */
export const bestTimeToBuyAndSellStockSolutions = {
  bruteForce: {
    name: '暴力法',
    func: maxProfitBruteForce,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: '遍历所有可能的买入卖出组合'
  },
  onePass: {
    name: '一次遍历',
    func: maxProfitOnePass,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: '记录最低价格，计算最大利润'
  }
} as const;

export type BestTimeToBuyAndSellStockSolution = keyof typeof bestTimeToBuyAndSellStockSolutions;