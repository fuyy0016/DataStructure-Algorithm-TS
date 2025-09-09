/**
 * 树算法题解模块
 * Tree Algorithm Solutions
 */

// 树算法分类
export const TREE_CATEGORIES = {
  TRAVERSAL: '遍历',
  BINARY_SEARCH_TREE: '二叉搜索树',
  DEPTH_FIRST_SEARCH: '深度优先搜索',
  BREADTH_FIRST_SEARCH: '广度优先搜索',
  LOWEST_COMMON_ANCESTOR: '最近公共祖先'
} as const;

// 导出树算法题目列表
export const TREE_PROBLEMS = [
  'binary-tree-inorder-traversal',
  'maximum-depth-of-binary-tree',
  'validate-binary-search-tree',
  'lowest-common-ancestor'
] as const;

export type TreeProblem = typeof TREE_PROBLEMS[number];