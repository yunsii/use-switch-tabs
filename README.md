# 🚀 use-switch-tabs

[![use-switch-tabs](https://nodei.co/npm/use-switch-tabs.png)](https://npmjs.org/package/use-switch-tabs)

React hook used to convert Switch-like component to Tabs-like component state. 用于将类 Switch 组件转换为 Tabs 组件状态的 React hook。

- 支持页面的嵌套路由渲染
- 两种标签页模式可选
  - 基于路由，每个路由只渲染一个标签页
  - 基于路由参数，计算出每个路由的所有参数的哈希值，不同的哈希值渲染不同的标签页
- 快捷操作
  - 刷新标签页 - `actionRef.reloadTab()`
  - 关闭标签页 - `actionRef.closeTab()`
  - 返回之前标签页 - `actionRef.goBackTab()`
  - 关闭并返回之前标签页 - `actionRef.closeAndGoBackTab()`
- `follow`，路由定义中新增配置，默认打开方式是添加到所有标签页最后面，可通过配置该属性，使得一个标签页在 `follow` 指定的标签页后面打开
- `persistent`，支持页面刷新之后恢复上次的标签页状态

注：返回默认只会返回上次的路由，所以如果上次的路由没有关闭，会在两个路由之前反复横跳，当删除上次打开的标签页之后再调用该返回方法时只会打印警告。

## 如何使用？

- 基于 useSwitchTabs 封装 [SwitchTabs](./example/src/components/SwitchTabs/index.tsx#L35) 组件
- 在 Layout 层[使用 SwitchTabs 组件](./example/src/layouts/BasicLayout.tsx#L88)

> 细节可参考 example 中的用法，也可参考 [ant-design-pro-plus](https://github.com/theprimone/ant-design-pro-plus/blob/master/src/layouts/BasicLayout.tsx)
