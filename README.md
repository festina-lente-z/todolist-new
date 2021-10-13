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
- 当组件的state或者props发生改变的时候，render函数就会重新执行（就是调用setState的时候）
- 当父组件的render函数被运行时，它的子组件render都将被重新运行一次
- props vs. state 相同点
  - props和state都是纯对象（plain object）
  - props和state发生改变时都会触发render函数的更新
  - Both props and state are deterministic. If your Component generates different outputs for the same combination of props and state then you're doing something wrong.
- props vs. state 不同点
  - 
## 🌟虚拟DOM
- 虚拟DOM就是一个js对象，用它来描述真实DOM
- 减少了对真实DOM的创建以及对真实DOM的对比
- JSX -> React.createElement -> 虚拟DOM（JS对象）-> 真实的DOM
## 🌟深入了解虚拟DOM
### react数据视图更新原理
1. state数据
2. JSX模板
3. 数据 + 模板 生成虚拟DOM（虚拟DOM就是一个js对象，用它来描述真实DOM）（损耗了性能）
   `['div', {id: 'abc'}, ['span', {}, 'hello world']]`
4. 用虚拟DOM的结构生成真实的DOM，来显示：
   `<div id='abc'><span>hello world<span/><div/>`
5. state发生变化
6. 数据 + 模板生成新的虚拟DOM（极大提升了性能）
   `['div', {id: 'abc'}, ['span', {}, 'bye bye']]`
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容（极大的提升性能）
8. 直接操作DOM，改变span中的内容
### 🍀虚拟DOM优点
- 性能提升了
- 它使跨端应用得以实现。React Native
## 🌟虚拟DOM中的Diff（Difference）算法
- 同级比较
- key值比较（需要保持key值稳定）
## React中ref（reference）的使用  
- `ref={(input) => {this.input = input}}`-> 构建了一个ref引用
- ref帮助在react中直接获取DOM元素
- ref和setState一起用的时候，如果希望页面更新后再去获取DOM，要把获取DOM操作写在setState第二个参数中
## React中的生命周期函数
- 生命周期函数指在某一个时刻组件会自动调用执行的函数
- 在这里constructor函数符合生命周期函数的特点，但它不是react所独有的，因此不归类到生命周期函数之中（constructor函数在组件一被创建的时候自动的调用）
- componentWillMount在组件即将被挂载到页面上的时候执行
- 挂载：是指组件第一次被放到页面上的时候
- 删掉除render以外所有生命周期函数都不会报错，为什么删render会报错？
  > 因为react Component中默认内置了其他生命周期函数，但是没有内置render函数的默认实现，所以render函数需要自己定义
- ajax请求放在componentDidMount（只会被执行一次）里面
## React性能优化
- 把作用域的修改`this.handleBtnClick = this.handleBtnClick.bind(this)`放在constructor里面，可以保证整个程序里面这个函数的作用域绑定只会执行一次，而且可以避免子组件的一些无谓的渲染，因此这样写，react组件的性能会有所提升。
- react中的setState内置了性能提升的机制，它是一个异步的函数，可以把多次数据的改变结合成一次来做，这样可以降低虚拟DOM的比对频率
- react底层虚拟DOM，同层比对，key值，来提升虚拟DOM比对的速度，从而提升react的性能
- 借助shouldComponentUpdate这个方法，可以提升react组件的性能，因为可以避免一些无谓的渲染
## 4-10 使用Charles实现本地数据mock
- 步骤：Charles -> Tools -> Map Local Settings -> Add ->
- http://localhost.charlesproxy.com:3000/
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
  > 用index做key值会导致key值不稳定
- 箭头函数 this
- setState是异步的？
  > setState是一个异步函数，不会立即被执行

