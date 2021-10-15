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

## 一些疑问
- 取当前值是用`this.state`还是`store.getState()`？？？


