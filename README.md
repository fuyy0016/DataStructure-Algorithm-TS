# DataStructure-Algorithm-TS

🚀 **LeetCode练习代码仓库 - TypeScript实现**

一个专门用于LeetCode算法题练习的TypeScript代码仓库，采用现代化的开发工具链，支持自动化测试和代码质量保证。

## ✨ 特性

- 🔧 **TypeScript** - 类型安全的JavaScript超集
- ⚡ **Vitest** - 快速的单元测试框架
- 📁 **清晰的目录结构** - 按算法类型分类组织
- 🧪 **完整的测试覆盖** - 每个算法都有对应的测试用例
- 📊 **性能测试** - 内置算法性能对比工具
- 🛠️ **开发工具** - 支持热重载和实时测试

## 📦 安装

```bash
# 克隆仓库
git clone https://github.com/fuyy0016/DataStructure-Algorithm-TS.git
cd DataStructure-Algorithm-TS

# 安装依赖
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

## 🚀 快速开始

### 运行测试

```bash
# 运行所有测试
npm test

# 监听模式运行测试
npm run test:watch

# 运行测试并生成覆盖率报告
npm run test:coverage

# 运行测试UI界面
npm run test:ui
```

### 构建项目

```bash
# 编译TypeScript
npm run build

# 监听模式编译
npm run dev
```

## 📁 项目结构

```
DataStructure-Algorithm-TS/
├── src/                          # 源代码目录
│   ├── array/                    # 数组算法
│   │   ├── index.ts             # 模块导出
│   │   └── two-sum.ts           # 两数之和算法
│   ├── string/                   # 字符串算法
│   ├── linked-list/              # 链表算法
│   ├── stack-queue/              # 栈和队列算法
│   ├── tree/                     # 树算法
│   ├── graph/                    # 图算法
│   ├── dynamic-programming/      # 动态规划算法
│   ├── backtracking/             # 回溯算法
│   ├── greedy/                   # 贪心算法
│   ├── sorting/                  # 排序算法
│   ├── search/                   # 搜索算法
│   ├── math/                     # 数学算法
│   ├── utils/                    # 工具函数和数据结构
│   │   └── index.ts             # 通用工具类
│   └── index.ts                  # 主入口文件
├── tests/                        # 测试文件目录
│   └── array/                    # 数组算法测试
│       └── two-sum.test.ts      # 两数之和测试
├── dist/                         # 编译输出目录
├── coverage/                     # 测试覆盖率报告
├── package.json                  # 项目配置
├── tsconfig.json                # TypeScript配置
├── vitest.config.ts             # Vitest测试配置
└── README.md                     # 项目说明文档
```

## 🧩 算法分类

### 📊 数组 (Array)

- [两数之和](./src/array/two-sum/README.md)
- [买卖股票的最佳时机](./src/array/best-time-to-buy-and-sell-stock/README.md)
- [最大子数组和](./src/array/maximum-subarray/README.md)
- [合并两个有序数组](./src/array/merge-sorted-array/README.md)
- [删除有序数组中的重复项](./src/array/remove-duplicates-from-sorted-array/README.md)
- [最长连续递增序列](./src/array/longest-continuous-increasing-subsequence/README.md)

### 🔤 字符串 (String)
- 回文字符串、子字符串、模式匹配、滑动窗口
- 示例：有效回文串、最长公共前缀、反转字符串

### 🔗 链表 (LinkedList)

- [反转链表](./src/linked-list/reverse-linked-list/README.md)
- [合并两个有序链表](./src/linked-list/merge-two-sorted-lists/README.md)
- [环形链表](./src/linked-list/linked-list-cycle/README.md)
- [删除链表的倒数第 N 个结点](./src/linked-list/remove-nth-node-from-end/README.md)
- [相交链表](./src/linked-list/intersection-of-two-linked-lists/README.md)

### 📚 栈和队列 (StackQueue)
- 栈、队列、单调栈、优先队列
- 示例：有效括号、用栈实现队列、最小栈

### 🌳 树 (Tree)
- 遍历、二叉搜索树、深度优先搜索、广度优先搜索
- [计算二叉树的深度](./src/tree/calculate-the-depth-of-a-binary-tree/README.md)
- 示例：二叉树中序遍历、二叉树最大深度、验证二叉搜索树

### 🕸️ 图 (Graph)
- 遍历、最短路径、拓扑排序、并查集
- 示例：岛屿数量、课程表、克隆图

### 🎯 动态规划 (DynamicProgramming)
- 线性DP、区间DP、树形DP、状态机DP、背包问题
- 示例：爬楼梯、打家劫舍、零钱兑换

### 🔄 回溯算法 (Backtracking)
- 排列、组合、子集、分割、棋盘问题
- 示例：全排列、组合、子集、N皇后

### 🎲 贪心算法 (Greedy)
- 区间问题、数组问题、字符串问题、股票问题
- 示例：跳跃游戏、加油站、分发糖果

### 🔢 排序算法 (Sorting)
- 比较排序、非比较排序、稳定排序、原地排序
- 示例：归并排序、快速排序、堆排序

### 🔍 搜索算法 (Search)
- 二分查找、深度优先搜索、广度优先搜索
- 示例：二分查找、搜索旋转排序数组、搜索二维矩阵

### 🧮 数学算法 (Math)
- 数论、几何、概率、组合数学
- 示例：回文数、整数反转、2的幂

## 🛠️ 使用方法

### 添加新算法

1. 在对应的算法分类目录下创建新的`.ts`文件
2. 实现算法解决方案
3. 在对应的测试目录下创建`.test.ts`文件
4. 编写测试用例
5. 更新模块的`index.ts`文件导出新算法

### 算法实现模板

```typescript
/**
 * LeetCode XXX. 题目名称
 * 题目描述
 */

import { AlgorithmSolution } from '../utils';

/**
 * 解法描述
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function solutionName(/* 参数 */): /* 返回类型 */ {
  // 算法实现
}

// 算法解决方案配置
export const solutionConfig: AlgorithmSolution = {
  name: '题目名称',
  description: '题目描述',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  solution: solutionName,
  testCases: [
    {
      input: /* 输入 */,
      expected: /* 期望输出 */,
      description: '测试用例描述'
    }
  ]
};
```

### 测试用例模板

```typescript
import { describe, it, expect } from 'vitest';
import { solutionName, solutionConfig } from '../../src/category/solution-name';

describe('题目名称', () => {
  it('应该正确处理基本用例', () => {
    const result = solutionName(/* 输入参数 */);
    expect(result).toEqual(/* 期望结果 */);
  });
  
  it('所有测试用例都应该通过', () => {
    solutionConfig.testCases.forEach((testCase) => {
      const result = solutionConfig.solution(...testCase.input);
      expect(result).toEqual(testCase.expected);
    });
  });
});
```

## 🧪 测试说明

项目使用 [Vitest](https://vitest.dev/) 作为测试框架，具有以下特性：

- ⚡ **快速执行** - 基于 Vite 的快速测试运行器
- 🔄 **热重载** - 文件变化时自动重新运行测试
- 📊 **覆盖率报告** - 内置代码覆盖率统计
- 🎨 **美观的UI** - 可选的Web界面查看测试结果

### 测试命令

```bash
# 运行所有测试
npm test

# 监听模式（推荐开发时使用）
npm run test:watch

# 生成覆盖率报告
npm run test:coverage

# 启动测试UI界面
npm run test:ui
```

## 🔧 工具函数

项目提供了丰富的工具函数来辅助算法开发：

### 数据结构
- `ListNode` - 链表节点
- `TreeNode` - 二叉树节点
- `GraphNode` - 图节点

### 工具方法
- `Utils.createLinkedList()` - 创建链表
- `Utils.createBinaryTree()` - 创建二叉树
- `Utils.measureTime()` - 性能测试
- `Utils.generateRandomArray()` - 生成随机测试数据

## 📈 性能测试

项目内置性能测试工具，可以对比不同算法的执行效率：

```typescript
import { Utils } from '../utils';

// 性能对比测试
const result1 = Utils.measureTime(algorithm1, ...args);
const result2 = Utils.measureTime(algorithm2, ...args);

console.log(`算法1耗时: ${result1.time}ms`);
console.log(`算法2耗时: ${result2.time}ms`);
```

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范

- 使用 TypeScript 严格模式
- 遵循现有的代码风格
- 为新算法添加完整的测试用例
- 添加详细的注释和文档


## 🙏 致谢

- [LeetCode](https://leetcode.com/) - 提供优质的算法题目
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的JavaScript
- [Vitest](https://vitest.dev/) - 现代化的测试框架
- [Vite](https://vitejs.dev/) - 快速的构建工具

