// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';
// 所谓的Model, 就是一个自定义的 hooks
const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  return {
    name,
    setName,
  };
};
// 默认导出一个函数
export default useUser;
