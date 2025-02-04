type Path = string | (string | number)[];

/**
 * 安全地设置对象的嵌套属性值
 * @param obj 要修改的对象
 * @param path 属性路径，可以是字符串 'a.b.c' 或数组 ['a', 'b', 'c']
 * @param value 要设置的值
 */
export const safeSet = (obj: any, path: Path, value: any): any => {
  if (!obj || typeof obj !== 'object') return obj;
  
  // 将路径转换为数组
  const keys = Array.isArray(path) ? path : path.split('.');
  
  // 创建对象的副本
  const result = { ...obj };
  let current = result;
  
  // 遍历路径
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    
    // 验证键名安全性
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      console.warn('Attempted to access protected property:', key);
      return obj;
    }
    
    // 如果当前层级不存在，创建一个新对象
    if (!(key in current) || current[key] === null) {
      current[key] = {};
    }
    
    // 如果当前值不是对象，转换为对象
    if (typeof current[key] !== 'object') {
      current[key] = {};
    }
    
    current = current[key];
  }
  
  // 设置最终值
  const lastKey = keys[keys.length - 1];
  if (lastKey === '__proto__' || lastKey === 'constructor' || lastKey === 'prototype') {
    console.warn('Attempted to access protected property:', lastKey);
    return obj;
  }
  
  current[lastKey] = value;
  return result;
};

/**
 * 创建一个不可变的更新函数
 * @param obj 原始对象
 * @param updates 要应用的更新数组，每个更新是一个 [path, value] 元组
 */
export const safeSetMultiple = (obj: any, updates: [Path, any][]): any => {
  return updates.reduce((result, [path, value]) => safeSet(result, path, value), obj);
}; 