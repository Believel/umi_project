// 运行时配置
// 全局初始化状态在整个 Umi项目的最开始创建
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  // 返回的就是全局初始化状态
  return { name: '@umijs/max' };
}

// 运行时配置布局与菜单
export const layout = () => {
  return {
    // 常见属性
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    // 默认布局调整
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    // menuHeaderRender: undefined,
  };
};
