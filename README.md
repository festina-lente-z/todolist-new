## redux
- redux是一个数据层框架
- redux里面要求我们把数据都放在一个公共的存储区域里面，叫做"Store"
- Redux = Reducer + Flux

## Redux的工作流程

## 创建redux中的store
- `yarn add redux`

## Action和Reducer的编写
- 当input框发生改变的时候，希望redux数据中的inputValue也跟着变
  - 第一步创建一个action
  - 用dispatch把action传给store
  - store需要把当前store中的数据和action一起转发给Reducers（Redux中的Store会自动转发给Reducers）
- 用`actionCreator`统一管理页面中的`action`
- Redux设计和使用的三项原则
  - store是唯一的
  - 只有store能改变自己的内容（store里面的数据不是reducer更新的，是store拿到reducer的返回数据自己更新的
  - Reducer必须是纯函数（纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
- redux核心API
  - `createStore`--可以帮助我们创建一个store
  - `store.dispatch`--派发action，action会传递给store
  - `store.getState`--可以帮我们获取到store中所有的数据内容
  - `store.subscribe`--订阅store的改变，只要发生改变，`store.subscribe`接收的回调函数就会被执行
## UI组件和容器组件
- UI组件负责页面的渲染
- 容器组件负责页面的逻辑 
## 无状态组件
- 无状态组件就是一个函数
- 当一个普通组件只有render函数的时候，我们可以用一个无状态组件来替换这个普通组件

## 一些疑问
- 取当前值是用`this.state`还是`store.getState()`？？？
  > 都不是！是在reducer里面进行
- react onClick 为什么要用bind，为什么也用箭头函数，除了绑定this还有什么原因？
- 无状态组件怎么渲染？render？


