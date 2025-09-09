/**
 * 通用工具函数和数据结构定义
 */

// 链表节点定义
export class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

// 二叉树节点定义
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

// 图节点定义
export class GraphNode {
  val: number;
  neighbors: GraphNode[];
  
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val ?? 0;
    this.neighbors = neighbors ?? [];
  }
}

// 通用工具函数
export class Utils {
  /**
   * 创建链表
   * @param values 节点值数组
   * @returns 链表头节点
   */
  static createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    
    const head = new ListNode(values[0]);
    let current = head;
    
    for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i]);
      current = current.next;
    }
    
    return head;
  }
  
  /**
   * 链表转数组
   * @param head 链表头节点
   * @returns 节点值数组
   */
  static linkedListToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    
    return result;
  }
  
  /**
   * 创建二叉树（层序遍历数组）
   * @param values 节点值数组，null表示空节点
   * @returns 二叉树根节点
   */
  static createBinaryTree(values: (number | null)[]): TreeNode | null {
    if (values.length === 0 || values[0] === null) return null;
    
    const root = new TreeNode(values[0]);
    const queue: TreeNode[] = [root];
    let i = 1;
    
    while (queue.length > 0 && i < values.length) {
      const node = queue.shift()!;
      
      if (i < values.length && values[i] !== null) {
        node.left = new TreeNode(values[i]!);
        queue.push(node.left);
      }
      i++;
      
      if (i < values.length && values[i] !== null) {
        node.right = new TreeNode(values[i]!);
        queue.push(node.right);
      }
      i++;
    }
    
    return root;
  }
  
  /**
   * 二叉树层序遍历
   * @param root 二叉树根节点
   * @returns 层序遍历结果数组
   */
  static levelOrderTraversal(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    
    while (queue.length > 0) {
      const node = queue.shift();
      
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }
    
    // 移除末尾的null值
    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }
    
    return result;
  }
  
  /**
   * 数组深拷贝
   * @param arr 原数组
   * @returns 深拷贝后的数组
   */
  static deepCloneArray<T>(arr: T[]): T[] {
    return JSON.parse(JSON.stringify(arr));
  }
  
  /**
   * 生成随机数组
   * @param length 数组长度
   * @param min 最小值
   * @param max 最大值
   * @returns 随机数组
   */
  static generateRandomArray(length: number, min: number = 0, max: number = 100): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  /**
   * 测试用例执行时间统计
   * @param fn 待测试函数
   * @param args 函数参数
   * @returns 执行结果和耗时（毫秒）
   */
  static measureTime<T extends any[], R>(fn: (...args: T) => R, ...args: T): { result: R; time: number } {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();
    
    return {
      result,
      time: end - start
    };
  }
}

// 常用类型定义
export type TestCase<T = any, R = any> = {
  input: T;
  expected: R;
  description?: string;
};

export type AlgorithmSolution<T = any, R = any> = {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  solution: (...args: any[]) => R;
  testCases: TestCase<T, R>[];
};