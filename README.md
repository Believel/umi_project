# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)


# 初始化一个umi4项目
1. node 版本
```js
// node16+ 
// window上可以使用nvm
nvm install 16
nvm use 16
```
2. pnpm 安装
```js
npm intstall -g pnpm
```
3. `mkdir myApp`
4. `cd myApp`
5. 创建项目：`pnpm dlx create-umi@latest`
7. 启动项目：`pnpm dev`

# 目录结构
```js
.
|-- README.md
|-- mock         // 存储mock文件，此目录下所有js和ts文件会被解析为 mock文件。用于本地的模拟数据服务。
|   `-- userAPI.ts
|-- dist      // umi build 后，产物默认放在这里。可通过配置修改产物输出路径。
|-- package.json
|-- pnpm-lock.yaml
|-- src
|   |-- .umi     // dev的临时文件目录，比如入口文件、路由等，都会被临时生成到这里。不要提交.umi目录到git仓库，他们会在umi dev时被删除并重新生成。
|   |-- access.ts
|   |-- app.ts   // 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改render方法等。运行时配置是跑在浏览器，因此我们可以在这里写函数、jsx语法、import浏览器端依赖等等
|   |-- assets
|   |-- components
|   |-- constants
|   |-- models
|   |-- pages   // 所有路由组件存放在这里
|   |-- services
|   `-- utils
|-- .env          // 环境变量
|-- .umirc.ts     // 与`config/config.ts`文件功能相同，2选1。`.umirc.ts`文件优先级较高
                  // 配置wenj，包含Umi内置功能和插件的配置
|-- tsconfig.json
`-- typings.d.ts
```