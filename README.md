## 🌵JSX
- Adjacent JSX elements must be wrapped in an enclosing tag(一个组件render函数返回的内容外层必须有一个包裹元素)
- 注释 `{//}`,`{/**/}`
- dangerouslySetInnerHTML
  >不希望输入的内容被转义
- `<label>`的`for`标签要替换成`htmlFor`
## 3-5 拆分组件与组件之间的传值
- 子组件如何修改父组件
- react中如何做父子组件的通信
  > 父组件向子组件传值，子组件就可以接收到父组件的值了
  > 同样子组件要是想传值给父组件，需要调用父组件传递过来的一个方法
- this绑定为什么统一放到constructor中？放到render中为什么会影响性能
- setState里面写了函数就变成异步形式？为什么
- setState中可以接收到参数preState？
## 3-7 react思考
- react是声明式开发
- react可以和其他框架共存
- 组件化，首字母大写
- 单向数据流
  > 父组件可以向子组件传递内容，但子组件只能使用父组件传过来的值，不能直接去改变这个值
- 视图层框架
- 函数式编程
## 4-2 PropTypes & DefaultProps
- 看官方文档（英文版）：Advanced Guides - Typechecking With PropTypes
## 🌟4-3 props, state & render函数关系
- 当组件的state或者props发生改变的时候，render函数就会重新执行
## Fragment
- React16版本中，提供了占位符Fragment
## 🌟React中的响应式设计思想和事件绑定 

## 问题
- React 中 render 函数的执行时机
- React组件到底什么时候render啊
- [react-为什么在jsx属性中不建议使用箭头函数和绑定](https://segmentfault.com/a/1190000020866363)
- [React事件绑定的几种方式对比](https://segmentfault.com/a/1190000011317515)
- [关于this.setState( )中的数据延迟问题](https://segmentfault.com/a/1190000019670168)
- class中函数中的this指向
- bind,call,apply总结一下，区别，用法
- bind的时候会执行函数吗？？？
- 手写bind
- 整理map用法
- 为什么不建议使用index作为key的值
  > key 帮助 React 识别哪些元素改变了，比如被添加或删除。
- 箭头函数 this

