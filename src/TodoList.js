import React, { Component } from 'react';
import store from './store/index';
import { 
  getInputChangeAction,
  getAddItemAction, 
  getDeleteItemAction,
  initListAction,
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';


class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 订阅
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return (<TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleStoreChange={this.handleStoreChange}
      handleItemDelete={this.handleItemDelete}
    />)
  }
  componentDidMount(){
    axios.get('/list.json').then((res) => {
      const data = res.data;
      console.log(data);
    })
  }
  handleStoreChange(){
    // 当感知到store发生变化的时候，旧调用store.getState()方法，从store里面重新取一次数据
    this.setState(store.getState());
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index){
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;