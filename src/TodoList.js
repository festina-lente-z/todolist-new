import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // 存储input框中的内容
      list: [] // 存储列表中的每一项
    } // this.state组件的状态
    this.getTodoItem = this.getTodoItem.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  // componentWillMount在组件即将被挂载到页面上的时候执行
  UNSAFE_componentWillMount(){
    console.log('componentWillMount');
  }
  render() {
    console.log('render');
    return(
      <Fragment>
        {/* 我是注释 */}
        <div>
          <label htmlFor='inputArea'>输入内容</label>
          <input 
            id='inputArea'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.output = input}}
          />
          <button 
            onClick={this.handleBtnClick}>
            submit
          </button>
        </div>
        <ul 
          ref={(ul)=>{this.ul = ul}}
        >
          {this.getTodoItem()}
        </ul>
        {/* 怎么判断要不要执行，没有触发条件的这种就需要执行？ */}
      </Fragment>
    )
  }
  // componentDidMount在组件被挂载到页面之后，自动被执行
  componentDidMount(){
    console.log('componentDidMount');
  }
  // 组件被更新之前，shouldComponentUpdate会被自动执行
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true
  }
  /*
    组件被更新之前，componentWillUpdate会自动执行，但它在shouldComponentUpdate之后执行
    如果shouldComponentUpdate返回true它才执行
    如果返回false，这个函数就不会被执行了
   */
  UNSAFE_componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  // 组件更新完成之后,componentDidUpdate会被执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  
  getTodoItem(){
    const { list } = this.state
    return list.map((item, index)=>{
      return <TodoItem 
        key={index} 
        index={index}
        item={item} 
        handleItemDelete={this.handleItemDelete} 
      />
    })
  }
  handleInputChange(){
    // this.state.inputValue = e.target.value;
    // this.setState({
    //   inputValue:e.target.value
    // });
    // console.log(this.state.inputValue);
    // setState里面写了函数就变成异步形式？为什么
    // const inputValue = e.target.value
    const inputValue = this.output.value
    this.setState(() => ({
      inputValue
    }))
  }
  handleBtnClick(){
    // const {inputValue,list} = this.state
    // this.setState({
    //   list: [...list,inputValue],
    //   inputValue: ''
    // })
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }), ()=>{
      console.log(this.ul.querySelectorAll('li').length)
    })
    
  }
  handleItemDelete(index){
    // immutable
    // state不允许我们做任何改变
    // console.log(this)
    // const list = [...this.state.list]
    // list.splice(index,1)
    // this.setState({
    //   list
    // })
    this.setState((preState) => {
      const list = [...preState.list]
      list.splice(index,1)
      return {list}
    })
  }
}

export default TodoList