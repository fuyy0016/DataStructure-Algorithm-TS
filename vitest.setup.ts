/**
 * Vitest 全局设置文件
 * 用于配置测试环境和全局设置
 */

// 全局测试设置
import { beforeAll, afterAll, beforeEach, afterEach } from 'vitest';

// 测试前的全局设置
beforeAll(() => {
  // 可以在这里添加全局的测试前置操作
  console.log('🚀 开始运行测试套件');
});

// 测试后的全局清理
afterAll(() => {
  // 可以在这里添加全局的测试后置操作
  console.log('✅ 测试套件运行完成');
});

// 每个测试前的设置
beforeEach(() => {
  // 可以在这里添加每个测试前的操作
});

// 每个测试后的清理
afterEach(() => {
  // 可以在这里添加每个测试后的清理操作
});

// 扩展全局类型定义（如果需要）
declare global {
  // 可以在这里添加全局类型定义
}

export {};