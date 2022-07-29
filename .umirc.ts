import { defineConfig } from '@umijs/max';
// 包着一层 defineConfig 目的是为了有 ts 的语法提示
export default defineConfig({
  antd: {
    // configProvider: {},
    // themes
    // dark: true,
    // compact: true,
    // babel-plugin-import
    // import: true,
    // less or css,  default less
    // style: 'less'
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  // 布局与菜单配置开启
  layout: {
    // 显示在布局左上角的产品名，默认名为包名
    title: '@umijs/max',
    // 默认开启，如无需菜单国际化可关闭
    locale: false
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: '@/pages/Table',
    },
    {
      name: "用户中心",
      path: '/user',
      component: './User',
      // 配置路由组件的包装组件
      // wrappers: ['@/wrappers/auth']
    },
    {
      exact: true,
      // 动态路由
      path: 'posts/:postId',
      component: '@/pages/posts/$postId'
    }
  ],
  npmClient: 'pnpm',
});
