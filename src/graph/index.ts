/**
 * 图算法题解模块
 * Graph Algorithm Solutions
 */

// 图算法分类
export const GRAPH_CATEGORIES = {
  TRAVERSAL: '遍历',
  SHORTEST_PATH: '最短路径',
  TOPOLOGICAL_SORT: '拓扑排序',
  UNION_FIND: '并查集',
  MINIMUM_SPANNING_TREE: '最小生成树'
} as const;

// 导出图算法题目列表
export const GRAPH_PROBLEMS = [
  'number-of-islands',
  'course-schedule',
  'clone-graph',
  'word-ladder'
] as const;

export type GraphProblem = typeof GRAPH_PROBLEMS[number];