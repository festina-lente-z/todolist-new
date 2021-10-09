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
  render() {
    //console.log('render');
    return(
      <Fragment>
        {/* 我是注释 */}
        <div>
          <label htmlFor='inputArea'>输入内容</label>
          <input 
            id='inputArea'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button 
            onClick={this.handleBtnClick}>
            submit
          </button>
        </div>
        <ul>{this.getTodoItem()}</ul>
        {/* 怎么判断要不要执行，没有触发条件的这种就需要执行？ */}
      </Fragment>
    )
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
  handleInputChange(e){
    // this.state.inputValue = e.target.value;
    // this.setState({
    //   inputValue:e.target.value
    // });
    // console.log(this.state.inputValue);
    // setState里面写了函数就变成异步形式？为什么
    const inputValue = e.target.value
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
    }))
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