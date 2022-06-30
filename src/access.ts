// 定义权限定义文件
// initialState 是通过初始化插件 initial-state 提供的数据，你可以使用该数据来初始化你的用户权限
export default (initialState: API.UserInfo) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://next.umijs.org/docs/max/access
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  // 对象的每一个值就对应了一条权限
  return {
    canSeeAdmin,
  };
};
